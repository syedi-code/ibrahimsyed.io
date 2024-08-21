import React from 'react';

import Div3D from '../common/Div3D';
import DivSVG from '../common/DivSVG';

import { primaryGradientMedium } from '../../data/animations';

interface SidebarProps {
    changePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ changePage }) => {
    const sidebarStyle: React.CSSProperties = {
        width: '20%',
        height: '100vh',
        backgroundColor: '#f4f4f4', // You can change this to any color you prefer
        borderRight: '1px solid black',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Centers the children vertically
        gap: '20px', // Adjust the gap between the buttons as needed
        height: '100%', // Ensures the container takes up the full height of the sidebar
    };

    return (
        <DivSVG style={sidebarStyle} background={primaryGradientMedium}>
            <div style={containerStyle}>
                <Div3D
                    borderRadius='20px'
                    onClick={() => changePage('landing')}
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                >
                    <div style={linkStyle}>ABOUT</div>
                </Div3D>

                <Div3D
                    borderRadius='20px'
                    onClick={() => changePage('projects')}
                    dropShadowColor='rgba(0, 0, 0, 1)'
                    inverted={true}
                >
                    <div style={linkStyle}>PROJECTS</div>
                </Div3D>
            </div>
        </DivSVG>
    );
};

export default Sidebar;
