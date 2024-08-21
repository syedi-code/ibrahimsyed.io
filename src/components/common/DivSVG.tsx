import React from "react";

interface DivSVGProps {
    children: React.ReactNode;
    background: string;
    style: React.CSSProperties;
}

const DivSVG: React.FC<DivSVGProps> = ({ children, background, style }) => {
    return (
        <div
            style={{
                ...style,
                backgroundImage: `url("${background}")`, 
                backgroundSize: 'cover',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'padding-box',
                color: 'transparent'
            }}
        >
            {children}
        </div>
    );
};

export default DivSVG;