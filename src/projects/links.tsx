import React from 'react';
import { linksContainerStyle } from './styles';

export const DefaultLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                links coming soon!
            </span>
        </div>
    );
}

export const PersonalWebsiteLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://github.com/syedi-code/ibrahimsyed.io" target="_blank" rel="noopener noreferrer">source</a>
                {" • "}
                <a href="ibrahimsyed.io/">ibrahimsyed.io</a>
            </span>
        </div>
    );
}

export const HistoricleLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://github.com/syedi-code/historicle" target="_blank" rel="noopener noreferrer">source</a>
                {" • "}
                <a href="https://historiclega.me/">historiclega.me</a>
            </span>
        </div>
    );
}

export const GenerativeSoundLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://pdfs.semanticscholar.org/399a/2679d264e81a1b7d7578df3446c5442a702e.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
                {" • "}
                <a href="https://www.semanticscholar.org/paper/Toward-Generative-Sound-Cues-for-Robots-Using-Syed-Fick/808084a9edef2391b4b4043d4362fd85dbe2d998" target="_blank" rel="noopener noreferrer">cite</a>
            </span>
        </div>
    );
}

export const SonifyItLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://ieeexplore.ieee.org/document/9837424" target="_blank" rel="noopener noreferrer">PDF</a>
                {" • "}
                <a href="https://ieeexplore.ieee.org/document/9837424" target="_blank" rel="noopener noreferrer">cite</a>
            </span>
        </div>
    );
}

export const DaxbotLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://ieeexplore.ieee.org/document/9837424" target="_blank" rel="noopener noreferrer">blog</a>
            </span>
        </div>
    );
}

export const ParticleSystemLinks: React.FC = () => {
    return (
        <div style={linksContainerStyle}>
            <span>
                <a href="https://github.com/syedi-code/particle-system-sonification" target="_blank" rel="noopener noreferrer">source</a>
            </span>
        </div>
    );
}