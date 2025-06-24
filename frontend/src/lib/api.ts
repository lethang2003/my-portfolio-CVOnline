export interface Project {
  name: string;
  link?: string;
  github?: string;
  description: string;
  technologies: string[];
}

export interface CV {
  _id: string;
  fullName: string;
  nickName: string;
  position: string;
  email: string;
  phone: string;
  github: string;
  address: string;
  aboutMe: string;
  softSkills: string[];
  programmingLanguages: string[];
  markupLanguages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  devopsTools: string[];
  uiux: string[];
  others: string[];
  education: string;
  experience: string;
  languageSkill: string;
  teamwork: string;
  problemSolving: string;
  projects: Project[];
  avatar: string;
}

export async function getCV(): Promise<CV | null> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${API_URL}/cv`);
    const data = await res.json();
    return data?.[0] || null; // Giả sử chỉ có 1 CV
  } catch (error) {
    console.error('Failed to fetch CV:', error);
    return null;
  }
}
