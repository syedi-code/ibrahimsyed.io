export interface Tag {
    name: string;
    color: string;
}

export interface Project {
    id: number;
    name: string;
    tags: string[];
    url: string;
    technologies: string[];
    year: number;
    scale: 'major' | 'minor';
    img: string;
    preview: string;
    description: React.FC<{}>;
    links: React.FC<{}>;
}