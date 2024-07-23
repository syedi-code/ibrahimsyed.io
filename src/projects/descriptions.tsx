import React from 'react';
import { descriptionStyle } from './styles';
import { motion, AnimatePresence } from 'framer-motion';

export const HistoricleDescription: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div 
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                A browser-based game where the player guesses a daily-rotating target year based on given historical events. Utilizes <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> to schedule data collection from a public API to update the site at midnight PST. Implemented using React in TypeScript and deployed to the web via Netlify.
            </motion.div>
        </AnimatePresence>
    );
};

export const GenerativeSoundDescription: React.FC = () => {
    return (
        <div>
            <AnimatePresence>
                <motion.div 
                    style={descriptionStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    A system to create dynamic generative sound cues for robots based on existing research in human-robot interaction, music cognition, and robot sonification. Designed using a Pure Data build integrated with Robot Operating System. A live study with N = 26 participants demonstrated that our team's generative sounds caused human listeners to perceive our robots as being more friendly.
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div 
                    style={descriptionStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    This work was presented at the 27th <a href="https://icad.org/" target="_blank" rel="noopener noreferrer">International Conference for Auditory Display</a> (ICAD) in 2022.
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export const SmallShDescription: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                A minimalistic Unix-like shell as part of the Operating Systems I course at Oregon State University. Supports basic shell functionalities, including command execution, input/output redirection, and signal handling using system calls. Also provides management of both foreground and background tasks. Written in C and compiled using gcc.
            </motion.div>
        </AnimatePresence>
    );
};

export const DaxbotDescription: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                A look into the methodology behind designing intentional sounds for Daxbot, a food delivery robot operating out of Philomath, Oregon. This project involved creating and testing a set of sound samples and integrating these sounds into Daxbot's day-to-day operations using detection of specific motions. These sounds were designed to improve the robot's communicative and emotive capabilities during customer-facing interactions, specifically during deliveries. To achieve this, our team saught user feedback, defined interaction needs, ideated sound solutions, and went through several stages of prototyping and real-world testing.
            </motion.div>
        </AnimatePresence>
    );
};

export const DLADescription: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                A combination of computational physics and computer graphics, this project simulates a phenomenon called <a href="https://paulbourke.net/fractals/dla/" target="_blank" rel="noopener noreferrer">diffusion-limited aggregation</a> to model intricate, fractal-like branching structures. The resulting structure is then processed using a lightweight raytracing shader written in <a href="https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language" target="_blank" rel="noopener noreferrer">GLSL</a> which simulates light interactions using thousands of virtual rays that bounce around the scene. 
            </motion.div>
        </AnimatePresence>
    );
};

export const ParticleSystemDescription: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                A real-time sonification program integrating multimedia programming language Max/MSP with creative coding JavaScript library p5.js. The script allows users to generate particles on a simulated canvas, with their movements and interactions mapped to virtual synthesizers. By adjusting parameters such as system heat, users can influence particle behavior and the corresponding audio output.
            </motion.div>
        </AnimatePresence>
    );
};