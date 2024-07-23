import React from 'react';
import { motion } from 'framer-motion';
import SidebarSketch from './SidebarSketch';

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
        padding: '10px 15px',
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '25px'
    };

    const containerStyle: React.CSSProperties = {
        textAlign: 'center'
    }

    const spanStyle: React.CSSProperties = {
      backgroundColor: 'white',
      padding: '5px 10px',
      border: '2px solid black'
    }

    return (
        <motion.div style={sidebarStyle} initial="hidden" animate="visible" variants={sidebarVariants}>
            <div style={containerStyle}>
                <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial" 
                    whileHover="hover" 
                    style={linkStyle} 
                    onClick={() => changePage('landing')}
                >
                    <span style={spanStyle}>ABOUT</span>
                </motion.a>
                <motion.a 
                    href="#"
                    variants={linkVariants}
                    initial="initial" 
                    whileHover="hover" 
                    style={linkStyle} 
                    onClick={() => changePage('projects')}
                >
                    <span style={spanStyle}>PROJECTS</span>
                </motion.a>
            </div>
        </motion.div>
    );
}

export default Sidebar;
