import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Cursor from './Cursor';

interface LandingSubtitleProps {
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontWeight?: string;
  cursor?: boolean;
}

const LandingSubtitle: React.FC<LandingSubtitleProps> = ({ color = 'black', fontSize = '32px', backgroundColor = 'transparent', fontWeight = '400', cursor = true }) => {
    const textIndex = useMotionValue(0);
    const texts = [
        "Programmer, data analyst, sound designer",
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
        color: color,
        fontFamily: 'Aleo, sans-serif',
        fontWeight: fontWeight,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
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

            <Cursor color={color} />
        </div>
    );
}

export default LandingSubtitle;