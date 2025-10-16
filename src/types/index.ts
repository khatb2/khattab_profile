export interface PersonalInfo {
  name_en: string;
  name_ar: string;
  title_en: string;
  title_ar: string;
  gender_en: string;
  gender_ar: string;
  birthDate: string;
  maritalStatus_en: string;
  maritalStatus_ar: string;
  nationality_en: string;
  nationality_ar: string;
  residence_en: string;
  residence_ar: string;
  passport_en: string;
  passport_ar: string;
  summary_en: string;
  summary_ar: string;
  about_me_en: string;
  about_me_ar: string;
  photoUrl: string;
}

export interface VisionAndMission {
  vision_en: string;
  vision_ar: string;
  mission_en: string;
  mission_ar: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

export interface ExperienceItem {
  title_en: string;
  title_ar: string;
  company_en: string;
  company_ar: string;
  period_en: string;
  period_ar: string;
  description_en: string;
  description_ar: string;
  details_en: string[];
  details_ar: string[];
  logoUrl?: string;
}

export interface Skill {
  name_en: string;
  name_ar: string;
  icon: string;
}

export interface Skills {
  technical: Skill[];
  soft: Skill[];
  managerial: Skill[];
}

export interface Language {
  name_en: string;
  name_ar: string;
  level_en: string;
  level_ar: string;
}

export interface EducationItem {
  degree_en: string;
  degree_ar: string;
  institution_en: string;
  institution_ar: string;
  year: string;
}

export interface CourseItem {
  name_en: string;
  name_ar: string;
  provider_en: string;
  provider_ar: string;
  year: string;
  logoId: string;
  certificateUrl?: string;
}

export interface ProjectItem {
  name_en: string;
  name_ar: string;
  link: string;
  imageIds: string[];
  description_en: string;
  description_ar: string;
}

export interface FaqItem {
  question_en: string;
  question_ar: string;
  answer_en: string;
  answer_ar: string;
}

export interface ProfileData {
  personalInfo: PersonalInfo;
  visionAndMission: VisionAndMission;
  contactInfo: ContactInfo;
  experience_public: ExperienceItem[];
  experience_private: ExperienceItem[];
  skills: Skills;
  languages: Language[];
  education: EducationItem[];
  courses: CourseItem[];
  projects: ProjectItem[];
  faq: FaqItem[];
}
