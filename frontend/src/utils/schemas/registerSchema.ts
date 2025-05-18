import { z } from "zod";

// Step 1: Account Information Schema (base, tanpa refine)
const accountInfoBaseSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

// Account schema dengan validasi kecocokan password
export const accountInfoSchema = accountInfoBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

// Step 2: Academic Information Schema
export const academicInfoSchema = z.object({
  university: z.string().min(1, "University is required"),
  major: z.string().min(1, "Major is required"),
  degree_level: z.string().min(1, "Degree level is required"),
  gpa: z.coerce.number().min(0).max(4, "GPA must be between 0 and 4"),
  graduation_year: z.coerce
    .number()
    .gte(2000)
    .lte(2050, "Graduation year must be between 2000 and 2050"),
  birth_date: z.string().optional(), // Masuk ke step akademik
});

// Step 3: Profile Information Schema
export const profileInfoSchema = z.object({
  bio: z.string().optional(),
  language_scores: z.object({
    english: z.string().optional(),
    other: z.string().optional(),
  }),
  achievements: z.string().optional(),
  research_experience: z.string().optional(),
});

// Final Schema: Complete registration (untuk final submit)
export const completeRegistrationSchema = accountInfoBaseSchema
  .omit({ confirmPassword: true }) // aman karena belum di-refine
  .merge(academicInfoSchema)
  .merge(profileInfoSchema);

// Type inference
export type AccountInfoFormData = z.infer<typeof accountInfoSchema>;
export type AcademicInfoFormData = z.infer<typeof academicInfoSchema>;
export type ProfileInfoFormData = z.infer<typeof profileInfoSchema>;
export type CompleteRegistrationData = z.infer<typeof completeRegistrationSchema>;
