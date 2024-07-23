import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Cursor from './Cursor';

const LandingSubtitle: React.FC = () => {
    const textIndex = useMotionValue(0);
    const texts = [
        "Programmer, data analyst, sound designer, musician",
        "Oregon State University '24",
    ];
  
    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    const subtitleStyle: React.CSSProperties = {
        fontFamily: 'Aleo, sans-serif',
        fontWeight: '400',
        fontSize: '32px',
    }
  
    useEffect(() => {
      animate(count, 60, {
        type: "tween",
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
        <div style={{ textAlign: 'left' }}>
            <motion.span style={subtitleStyle}>
                {displayText}
            </motion.span>

            <Cursor />
        </div>
    );
}

export default LandingSubtitle;