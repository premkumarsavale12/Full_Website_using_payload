const { Pool } = require('pg');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load env vars
// We need .env.production specifically or parse it manually if dotenv doesn't support override easily
// Actually, just read the file content to be sure we get the production one if that's what we are using
// Or just let dotenv load .env then .env.production? No, usually it loads .env.
// But the user is running build with .env.production.
// Let's manually read .env.production if it exists, or use the string I know.
// I'll hardcode the string I just put in .env.production or read it.
// Reading is safer.

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));
const connectionString = envConfig.DATABASE_URI;

if (!connectionString) {
  console.error('No DATABASE_URI found in .env.production');
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: true, // User url has sslmode=require
});

async function reset() {
  const client = await pool.connect();
  try {
    console.log('Dropping schema public...');
    await client.query('DROP SCHEMA public CASCADE');
    console.log('Creating schema public...');
    await client.query('CREATE SCHEMA public');
    console.log('Database reset complete.');
  } catch (err) {
    console.error('Error resetting database:', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

reset();
