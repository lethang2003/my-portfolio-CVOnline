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
  try {
    const res = await fetch('http://localhost:3003/cv'); // Đổi port nếu backend khác
    const data = await res.json();
    return data?.[0] || null; // Giả sử chỉ có 1 CV
  } catch (error) {
    console.error('Failed to fetch CV:', error);
    return null;
  }
}
