import React from 'react';
import { motion } from 'framer-motion';
import Div3D from './Div3D';
import SidebarSketch from './SidebarSketch';
import { link } from 'fs';

interface SidebarProps {
    changePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ changePage }) => {
    const sidebarVariants = {
        hidden: {
            x: -200
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    const linkVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.2
            }
        }
    };

    const sidebarStyle: React.CSSProperties = {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '10vw',
        backgroundColor: 'transparent',
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const linkStyle: React.CSSProperties = {
        display: 'block',
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    const containerStyle: React.CSSProperties = {
        textAlign: 'left',
        paddingLeft: '2vw'
    }

    const spanStyle: React.CSSProperties = {
      backgroundColor: 'white',
      padding: '5px 10px',
      border: '1px solid black'
    }

    return (
        <motion.div style={sidebarStyle} initial="hidden" animate="visible" variants={sidebarVariants}>
            <div style={containerStyle}>
                <Div3D
                    borderRadius='20px'
                    onClick={() => changePage('landing')}
                    dropShadowColor='rgba(0, 0, 0, 1)'
                >
                    <div style={linkStyle}>ABOUT</div>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    onClick={() => changePage('projects')}
                    dropShadowColor='rgba(0, 0, 0, 1)'
                >
                    <div style={linkStyle}>PROJECTS</div>
                </Div3D>
            </div>
        </motion.div>
    );
}

export default Sidebar;
