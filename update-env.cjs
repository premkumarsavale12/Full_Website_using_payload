const fs = require('fs');
const path = require('path');

const envPath = path.resolve('.env');
let content = fs.readFileSync(envPath, 'utf8');

const newUri = 'DATABASE_URI=postgresql://neondb_owner:npg_vwhyM87mKdgZ@ep-withered-bush-a4m064gc-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Regex to replace DATABASE_URI line
// content = content.replace(/^DATABASE_URI=.*$/m, newUri);
// Using regex with multiline flag
if (/^DATABASE_URI=/.test(content)) {
    content = content.replace(/^DATABASE_URI=.*$/m, newUri);
} else {
    // Append if not found
    content += `\n${newUri}`;
}

fs.writeFileSync(envPath, content);
console.log('.env updated');
