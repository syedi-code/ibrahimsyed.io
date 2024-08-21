import React from 'react';
import { motion } from 'framer-motion';

interface MobileMenuProps {
    changePage: (page: string) => void;
    currentPage: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ changePage, currentPage }) => {
    const MENU_MARGIN = '10px';
    const SVG_STARS = "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='512px' height='512px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cdefs%3E%3Cg id='twinkling-star'%3E%3C!-- Define the original star shapes --%3E%3Cpath class='star' fill='%23FFFFFF' d='M147,147c-10,0-10.157,10.343-10.157,10.343C136.843,149.167,128,147,128,147 c10.157,0,9.843-10.343,9.843-10.343C137.843,147,147,147,147,147z'%3E%3C!-- Adjust opacity animation --%3E%3Canimate attributeName='opacity' values='1;0;1' dur='2s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath class='star1' fill='%23FFFFFF' d='M229,112c-5,0-5.085,5.168-5.085,5.168C223.915,113.842,216,112,216,112 c5.085,0,4.915-5.168,4.915-5.168C223.915,112,229,112,229,112z'%3E%3Canimate attributeName='opacity' values='1;0;1' dur='3s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath class='star2' fill='%23FFFFFF' d='M189.413,84c-15,0-15.157,15.343-15.157,15.343c0-13.375-15.157-15.343-15.157-15.343 c15.157,0,15.157-15.343,15.157-15.343C174.256,84,189.413,84,189.413,84z'%3E%3Canimate attributeName='opacity' values='1;0;1' dur='4s' repeatCount='indefinite'/%3E%3C/path%3E%3C/g%3E%3C/defs%3E%3C!-- Generate stars with more spread out, randomly seeded positions and scales --%3E%3Cuse xlink:href='%23twinkling-star' x='0' y='0' transform='scale(2.1)' /%3E%3Cuse xlink:href='%23twinkling-star' x='-100' y='-50' transform='scale(1.0)' /%3E%3Cuse xlink:href='%23twinkling-star' x='180' y='200' transform='scale(0.95)' /%3E%3Cuse xlink:href='%23twinkling-star' x='250' y='120' transform='scale(1.9)' /%3E%3Cuse xlink:href='%23twinkling-star' x='370' y='50' transform='scale(0.85)' /%3E%3Cuse xlink:href='%23twinkling-star' x='-130' y='-30' transform='scale(1.2)' /%3E%3Cuse xlink:href='%23twinkling-star' x='60' y='280' transform='scale(1.0)' /%3E%3Cuse xlink:href='%23twinkling-star' x='160' y='460' transform='scale(1.15)' /%3E%3Cuse xlink:href='%23twinkling-star' x='280' y='320' transform='scale(0.8)' /%3E%3Cuse xlink:href='%23twinkling-star' x='380' y='240' transform='scale(1.05)' /%3E%3Cuse xlink:href='%23twinkling-star' x='460' y='400' transform='scale(0.88)' /%3E%3Cuse xlink:href='%23twinkling-star' x='30' y='490' transform='scale(1.1)' /%3E%3Cuse xlink:href='%23twinkling-star' x='130' y='350' transform='scale(0.92)' /%3E%3Cuse xlink:href='%23twinkling-star' x='240' y='440' transform='scale(1.18)' /%3E%3Cuse xlink:href='%23twinkling-star' x='330' y='60' transform='scale(0.7)' /%3E%3Cuse xlink:href='%23twinkling-star' x='420' y='170' transform='scale(1.05)' /%3E%3Cuse xlink:href='%23twinkling-star' x='490' y='320' transform='scale(0.8)' /%3E%3Cuse xlink:href='%23twinkling-star' x='90' y='470' transform='scale(1.78)' /%3E%3Cuse xlink:href='%23twinkling-star' x='200' y='380' transform='scale(1.2)' /%3E%3Cuse xlink:href='%23twinkling-star' x='340' y='450' transform='scale(1.0)' /%3E%3C/svg%3E%0A";

    // --------- GENERAL STYLING ---------
    const selectorStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column', // Stack the buttons and divider vertically
        alignItems: 'center',
        padding: '0 3vw',
        backgroundColor: 'transparent',
        paddingTop: `${MENU_MARGIN}`,
        paddingBottom: `${MENU_MARGIN}`,
        borderBottom: '1px solid black',
    };

    const buttonsContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
    };

    // --------- FRAMER-MOTION VARIANTS ---------
    const buttonVariants = {
        inactive: {
            padding: '10px 3vw',
            fontSize: '4vw',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            margin: '0 1vw',
            color: 'black',
            backgroundColor: 'transparent',
            transition: { duration: 0.3 }, // General transition for inactive state
        },
        active: {
            padding: '10px 3vw',
            fontSize: '4vw',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            margin: '0 1vw',
            color: 'white',
            borderRadius: '20px',
            backgroundColor: 'black',
            backgroundImage: `url("${SVG_STARS}")`,
            backgroundSize: 'cover',
            backgroundClip: 'padding-box',
            transition: { 
                duration: 0.5,  // Overall duration for the transition to active state
                backgroundImage: { duration: 0.5, ease: 'easeIn' } // Specific transition for backgroundImage
            },
        },
    };

    return (
        <div style={selectorStyle}>
            <div style={buttonsContainerStyle}>
                <motion.div
                    variants={buttonVariants}
                    initial="inactive"
                    animate={currentPage === 'landing' ? 'active' : 'inactive'}
                    onClick={() => changePage('landing')}
                >
                    ABOUT
                </motion.div>
                <motion.div
                    variants={buttonVariants}
                    initial="inactive"
                    animate={currentPage === 'projects' ? 'active' : 'inactive'}
                    onClick={() => changePage('projects')}
                >
                    PROJECTS
                </motion.div>
            </div>
        </div>
    );
}

export default MobileMenu;
