import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const SidebarSketch: React.FC = () => {
    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sketch = (p: p5) => {
            let padding = 3; // Adjust this value to control the space between rhombuses
            let minSize = 0; // Minimum size of the rhombus
            let maxSize = 15; // Maximum size of the rhombus
            let hues = [225, 360];
            let h = 360;
            let falloffIntensity = 100;

            p.setup = () => {
                const canvas = p.createCanvas(window.innerWidth * 0.1, window.innerHeight).parent(sketchRef.current!);
                p.colorMode(p.HSB, 360, 100, 100);
                p.noStroke();
                h = hues[Math.floor(p.random(hues.length))];
            };

            p.draw = () => {
                p.background(255);

                let cols = Math.ceil(p.width / (maxSize + padding)); // Number of columns based on canvas width
                let rows = Math.ceil(p.height / ((maxSize + padding) / 2));

                // Calculate the maximum distance possible for size mapping
                let maxDist = p.dist(0, 0, window.innerWidth, window.innerHeight);

                for (let col = 0; col < cols; col++) {
                    for (let row = 0; row < rows; row++) {
                        // Calculate base positions with padding
                        let baseX = col * (maxSize + padding);
                        let baseY = row * (maxSize + padding) / 2;

                        // Offset every other row to create interlocking effect
                        let offsetX = row % 2 === 0 ? 0 : (maxSize + padding) / 2;
                        let x = baseX + offsetX;
                        let y = baseY;

                        // Calculate distance from the cursor to the center of the rhombus
                        let distance = p.dist(p.mouseX, p.mouseY, x, y);

                        // Map the distance to a hue value and size
                        let hueValue = p.map(distance, 0, maxDist, 60, 0);
                        let size = minSize + (maxSize - minSize) * Math.exp(-distance / falloffIntensity);

                        // HSB values
                        let s = 15 + (75 - 15) * Math.exp(-distance / falloffIntensity); // [15, 75]

                        p.fill(h, s, 100); 

                        // Draw the rhombus
                        p.beginShape();
                        p.vertex(x - size / 2, y);
                        p.vertex(x, y - size / 2);
                        p.vertex(x + size / 2, y);
                        p.vertex(x, y + size / 2);
                        p.endShape(p.CLOSE);
                    }
                }
            };
        };

        const myP5 = new p5(sketch, sketchRef.current!);

        // Cleanup on component unmount
        return () => {
            myP5.remove();
        };
    }, []);

    const sidebarStyle: React.CSSProperties = {
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '10vw',
        backgroundColor: '#0e0e0e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRight: '2px solid black'
    };

    return (
        <div>
            <div ref={sketchRef} style={sidebarStyle}></div>
        </div>
    );
};

export default SidebarSketch;