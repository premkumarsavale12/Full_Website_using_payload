
"use client"
import React, { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react';

export const TopButton = () => {
    const [visible, setVisible] = useState(false);
    const scrollThreshold = 400;
    const lenis = useLenis();

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                lock: false,
            })
        } else {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > scrollThreshold) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        // Initial check with small delay to avoid hydration mismatch or initial layout shift issues
        const timer = setTimeout(checkScroll, 100);

        if (lenis) {
            const updateVisibility = ({ scroll }) => {
                if (scroll > scrollThreshold) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            }
            lenis.on('scroll', updateVisibility);
            return () => {
                lenis.off('scroll', updateVisibility);
                clearTimeout(timer);
            }
        } else {

            window.addEventListener('scroll', checkScroll);
            return () => {
                window.removeEventListener('scroll', checkScroll);
                clearTimeout(timer);
            };
        }
    }, [lenis, scrollThreshold])

    return (
        <div
            className="scroll-to-top"
            style={{ display: visible ? 'block' : 'none', marginLeft: '40px', marginTop: '-40px', }}
        >
            <button
                onClick={scrollToTop}
                title="Go to top"
                className="bg-black text-white 
                    

                     -mt-[20px]
                  
                   w-14 h-14 
                     flex items-center justify-center
                     rounded-full 
                   text-2xl
                      shadow-lg
                       hover:bg-gray-800
                        marker: transition"
            >
                ⬆️
            </button>
        </div>
    )
}

