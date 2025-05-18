import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { z } from "zod";

import type { RegistrationFormData, RegistrationStep } from "../../utils/types";
import {
  accountInfoSchema,
  academicInfoSchema,
  profileInfoSchema,
} from "../../utils/schemas/registerSchema";

import ProgressIndicator from "../../components/register/ProgressIndicator";
import ErrorAlert from "../../components/register/ErrorAlert";
import AccountInfoStep from "../../components/register/AccountInfoStep";
import AcademicInfoStep from "../../components/register/AcademicInfoStep";
import ProfileInfoStep from "../../components/register/ProfileInfoStep";
import CompletionStep from "../../components/register/CompletionStep";
import LoginLink from "../../components/register/LoginLink";

const RegisterPage = () => {
  const [step, setStep] = useState<RegistrationStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<RegistrationFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    bio: "",
    birth_date: "",
    major: "",
    university: "",
    degree_level: "S1",
    gpa: "",
    graduation_year: "",
    language_scores: {
      english: "",
      other: "",
    },
    achievements: "",
    research_experience: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Clear specific field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof RegistrationFormData] as object),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateStep = (currentStep: RegistrationStep): boolean => {
    setError("");
    setFieldErrors({});

    try {
      if (currentStep === 1) {
        const stepData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          firstName: formData.firstName,
          lastName: formData.lastName,
        };
        accountInfoSchema.parse(stepData);
      }

      if (currentStep === 2) {
        const stepData = {
          university: formData.university,
          major: formData.major,
          degree_level: formData.degree_level,
          gpa: formData.gpa,
          graduation_year: formData.graduation_year,
        };
        academicInfoSchema.parse(stepData);
      }

      if (currentStep === 3) {
        const stepData = {
          bio: formData.bio,
          birth_date: formData.birth_date,
          language_scores: formData.language_scores,
          achievements: formData.achievements,
          research_experience: formData.research_experience,
        };
        profileInfoSchema.parse(stepData);
      }

      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        err.errors.forEach((error) => {
          const path = error.path.join(".");
          errors[path] = error.message;
        });
        setFieldErrors(errors);

        // Set general error message with the first error
        setError(err.errors[0].message);
      }
      return false;
    }
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      return;
    }
    setStep((prev) => (prev + 1) as RegistrationStep);
  };

  const prevStep = () => {
    setStep((prev) => (prev - 1) as RegistrationStep);
    setError("");
    setFieldErrors({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all steps before submission
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setError("Please fix all validation errors before submitting");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        profile: {
          bio: formData.bio,
          birth_date: formData.birth_date,
          major: formData.major,
          university: formData.university,
          degree_level: formData.degree_level,
          gpa: parseFloat(formData.gpa),
          graduation_year: parseInt(formData.graduation_year),
          language_scores: formData.language_scores,
          achievements: formData.achievements,
          research_experience: formData.research_experience,
        },
      };

      await axios.post("http://localhost:8000/api/users/register/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1500);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.detail ||
            "Registration failed. Please check your input and try again."
        );
      } else {
        setError("An unexpected error occurred.");
      }
      setIsSubmitting(false);
    }
  };

  // Function to get error for specific field
  const getFieldError = (fieldName: string): string | undefined => {
    return fieldErrors[fieldName];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="card bg-base-100 w-full max-w-md">
        <div className="card-body p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Create Your ScholarAI Account
          </h2>

          <ProgressIndicator currentStep={step} />
          <ErrorAlert error={error} />

          {step === 1 && (
            <AccountInfoStep
              formData={formData}
              onChange={handleChange}
              onNext={nextStep}
              fieldErrors={fieldErrors}
              getFieldError={getFieldError}
            />
          )}
          {step === 2 && (
            <AcademicInfoStep
              formData={formData}
              onChange={handleChange}
              onNext={nextStep}
              onPrevious={prevStep}
              fieldErrors={fieldErrors}
              getFieldError={getFieldError}
            />
          )}
          {step === 3 && (
            <ProfileInfoStep
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onPrevious={prevStep}
              isSubmitting={isSubmitting}
              fieldErrors={fieldErrors}
              getFieldError={getFieldError}
            />
          )}
          {step === 4 && <CompletionStep />}

          <LoginLink show={step !== 4} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
