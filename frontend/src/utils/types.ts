import type { ChangeEvent, FormEvent } from "react";

// types.ts
export interface LanguageScores {
  english: string;
  other: string;
}

export interface RegistrationFormData {
  // User fields (AbstractUser)
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;

  // UserProfile fields
  bio: string;
  birth_date: string;
  major: string;
  university: string;
  degree_level: "S1" | "S2" | "S3";
  gpa: string;
  graduation_year: string;
  language_scores: LanguageScores;
  achievements: string;
  research_experience: string;
  extracurricular_activities?: string;
}

export interface RegistrationPayload {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profile: {
    bio: string;
    birth_date: string;
    major: string;
    university: string;
    degree_level: "S1" | "S2" | "S3";
    gpa: number;
    graduation_year: number;
    language_scores: {
      english: string;
      other: string;
    };
    achievements: string;
    research_experience: string;
  };
}

export interface LoginData {
  username: string;
  password: string;
}

export interface UserData {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  profile?: ProfileData;
}

export interface ProfileData {
  bio?: string;
  birth_date?: string;
  major?: string;
  university?: string;
  degree_level?: string;
  gpa?: string;
  graduation_year?: string;
  language_scores?: string;
  achievements?: string;
  research_experience?: string;
}

export interface AuthResponse {
  user: UserData;
  refresh: string;
  access: string;
}

export interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  setUser: (user: UserData | null) => void;
  logout: () => void;
}

export interface ProgressIndicatorProps {
  currentStep: RegistrationStep;
}

export interface ErrorAlertProps {
  error: string;
}

export interface AccountInfoStepProps {
  formData: RegistrationFormData;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  fieldErrors: Record<string, string>;
  getFieldError: (fieldName: string) => string | undefined;
}

export interface AcademicInfoStepProps {
  formData: RegistrationFormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
  onPrevious: () => void;
  fieldErrors: Record<string, string>;
  getFieldError: (fieldName: string) => string | undefined;
}

export interface ProfileInfoStepProps {
  formData: RegistrationFormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  onPrevious: () => void;
  isSubmitting: boolean;
  fieldErrors: Record<string, string>;
  getFieldError: (fieldName: string) => string | undefined;
}

export type RegistrationStep = 1 | 2 | 3 | 4;

export interface LoginLinkProps {
  show: boolean;
}
