import { Project, Tag } from '../types';
import * as Descriptions from './descriptions';
import * as Links from './links';

export const projectsData: Project[] = [
  {
    "id": 0,
    "name": "Personal Website",
    "tags": ["web development", "programming"],
    "url": "https://ibrahimsyed.io/",
    "technologies": ["react", "typescript"], 
    "year": 2024,
    "scale": "major",
    "img": "react.svg",
    "preview": "An overhaul of my personal website with an updated Projects page, portfolio, and various interactive components.",
    "description": Descriptions.PersonalWebsiteDescription,
    "links": Links.PersonalWebsiteLinks,
  },      
  {
    "id": 1,
    "name": "Historicle",
    "tags": ["web development", "programming"],
    "url": "https://historiclega.me/",
    "technologies": ["react", "typescript"], 
    "year": 2024,
    "scale": "major",
    "img": "historicle.svg",
    "preview": "A browser-based game where the player guesses a daily-rotating target year based on given historical events.",
    "description": Descriptions.HistoricleDescription,
    "links": Links.HistoricleLinks,
  },
  {
    "id": 2,
    "name": "Toward Generative Sound Cues for Robots Using Emotive Musification",
    "tags": ["sound design", "robotics", "programming", "generative"],
    "url": "https://icad2022.icad.org/wp-content/uploads/2022/06/ICAD2022_29.pdf",
    "technologies": ["ros (robot operating system)", "puredata"], 
    "year": 2022,
    "scale": "major",
    "img": "semantic.png",
    "preview": "A system to create generative dynamic sound cues for robots based on research in human-robot interaction, music cognition, and robot sonification.",
    "description": Descriptions.GenerativeSoundDescription,
    "links": Links.GenerativeSoundLinks,
  },
  {
    "id": 3,
    "name": "SonifyIt: Towards Transformative Sound for All Robots",
    "tags": ["sound design", "robotics", "programming"],
    "url": "https://ieeexplore.ieee.org/document/9837424",
    "technologies": ["ros (robot operating system)", "puredata"], 
    "year": 2022,
    "scale": "major",
    "img": "ieee.svg",
    "preview": "A system integrating Robot Operating System (ROS) and Pure Data, a visual programming language for multimedia, to enable live sound synthesis and sample playback for robots.",
    "description": Descriptions.HistoricleDescription,
    "links": Links.SonifyItLinks,
  },
  {
    "id": 4,
    "name": "Designing Sound for Daxbot",
    "tags": ["sound design", "robotics"],
    "url": "https://syedi-code.github.io/html/daxbot.html",
    "technologies": ["ableton live"], 
    "year": 2024,
    "scale": "major",
    "img": "",
    "preview": "Designing sound cues for an Oregon-based food delivery robot: methodology, study, and real-world testing.",
    "description": Descriptions.DaxbotDescription,
    "links": Links.DaxbotLinks,
  },
  {
    "id": 5,
    "name": "smallsh: A Unix-like shell",
    "tags": ["programming"],
    "url": "coming soon",
    "technologies": ["c"], 
    "year": 2023,
    "scale": "minor",
    "img": "",
    "preview": "A Unix-like shell developed for OSU's Operating Systems course. Provides features such as command execution, I/O redirection, and signal handling.",
    "description": Descriptions.SmallShDescription,
    "links": Links.DefaultLinks,
  },
  {
    "id": 6,
    "name": "Diffusion-Limited Aggregation and Raytracing in GLSL",
    "tags": ["generative", "programming"],
    "url": "coming soon",
    "technologies": ["glsl", "c++"], 
    "year": 2023,
    "scale": "minor",
    "img": "",
    "preview": "A simulation of diffusion-limited aggregation, a natural phenonemon, processed using lightweight raytracing shader.",
    "description": Descriptions.DLADescription,
    "links": Links.DefaultLinks,
  },
  {
    "id": 7,
    "name": "Two-Dimensional Particle System Sonification",
    "tags": ["generative", "programming", "sound design"],
    "url": "https://github.com/syedi-code/particle-system-sonification",
    "technologies": ["max/msp", "javascript"], 
    "year": 2022,
    "scale": "minor",
    "img": "",
    "preview": "An audiovisual experience and real-time sonification program integrating multimedia programming language Max/MSP with creative coding library p5.js.",
    "description": Descriptions.ParticleSystemDescription,
    "links": Links.ParticleSystemLinks,
  }
];

export const tagColorMap: Map<string, string> = new Map([
  ["web development", "#4793AF"],
  ["programming", "#FFC470"],
  ["sound design", "#DD5746"],
  ["robotics", "#8B322C"],
  ["generative", "#4793AF"],
]);

export function extractTags(projectName: string): Tag[] {
  // Find the project by name
  const project = projectsData.find(p => p.name === projectName);

  if (!project) {
      return [];  // Return empty array if project is not found
  }

  // Map each tag name to a Tag object using the color from tagColorMap
  return project.tags.map(tagName => {
      const color = tagColorMap.get(tagName) || '#000000';  // Default to black if color not found
      return { name: tagName, color };
  });
}