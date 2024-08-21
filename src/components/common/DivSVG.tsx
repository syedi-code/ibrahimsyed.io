import React from "react";

/*
*
*   DivSVG
*
*   The most reliable way I could get an animation to
*   display as a <div> background was to render it as
*   an <svg> object, which is then encoded into a string
*   as demonstrated here: https://yoksel.github.io/url-encoder/
*   
*   So this is a wrapper around <div> which accepts a
*   'background' as URL-encoded SVG and renders it
*   using the "backgroundImage", "backgroundSize",
*   and "backgroundClip" CSS properties.
*
*/

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
                backgroundSize: '100% 100%',
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