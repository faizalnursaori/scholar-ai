import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
  Award,
  BookOpen,
  School,
  Briefcase,
  Users,
  Percent,
} from "lucide-react";
import { useState } from "react";

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Create Your ScholarAI Account
          </h2>

          {/* Progress indicator */}
          <div className="flex justify-center mb-6">
            <ul className="steps steps-horizontal w-full">
              <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Account</li>
              <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Academic</li>
              <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Achievements</li>
              <li className={`step ${step >= 4 ? "step-primary" : ""}`}>Complete</li>
            </ul>
          </div>

          {/* Step 1: Account Information */}
          {step === 1 && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3  rounded-l-lg bg-base-300">
                    <User size={20} />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Lock size={18} />
                  </span>
                  <input
                    type="password"
                    placeholder="Create a secure password"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Lock size={18} />
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button onClick={nextStep} className="btn btn-primary w-full rounded-lg">
                  Next Step
                </button>
              </div>
            </>
          )}

          {/* Step 2: Academic Information */}
          {step === 2 && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current Education Level</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <GraduationCap size={18} />
                  </span>
                  <select className="select select-bordered w-full rounded-l-none">
                    <option disabled selected>
                      Select your education level
                    </option>
                    <option>S1 (Bachelor's)</option>
                    <option>S2 (Master's)</option>
                    <option>S3 (Doctorate)</option>
                  </select>
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">University</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <School size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Your university name"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Major/Field of Study</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <BookOpen size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Your field of study"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">GPA</span>
                </label>
                <div className="relative flex border-1 rounded-lgx">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Percent size={18} />
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    placeholder="Current GPA (e.g., 3.75)"
                    className="input input-bordered w-full rounded-l-none"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-6">
                <button onClick={prevStep} className="btn btn-outline flex-1">
                  Back
                </button>
                <button onClick={nextStep} className="btn btn-primary flex-1">
                  Next Step
                </button>
              </div>
            </>
          )}

          {/* Step 3: Achievements */}
          {step === 3 && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Academic Achievements</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Award size={18} />
                  </span>
                  <textarea
                    className="textarea textarea-bordered w-full rounded-l-none"
                    placeholder="List your academic achievements, honors, awards, etc."
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Work/Research Experience</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Briefcase size={18} />
                  </span>
                  <textarea
                    className="textarea textarea-bordered w-full rounded-l-none"
                    placeholder="Describe your relevant work or research experience"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Extracurricular Activities</span>
                </label>
                <div className="relative flex border-1 rounded-lg">
                  <span className="inline-flex items-center px-3 bg-base-300">
                    <Users size={18} />
                  </span>
                  <textarea
                    className="textarea textarea-bordered w-full rounded-l-none"
                    placeholder="List organizations, volunteering, or activities you're involved in"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-6">
                <button onClick={prevStep} className="btn btn-outline flex-1">
                  Back
                </button>
                <button onClick={nextStep} className="btn btn-primary flex-1">
                  Next Step
                </button>
              </div>
            </>
          )}

          {/* Step 4: Completion */}
          {step === 4 && (
            <>
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Registration Complete!</h3>
                <p className="mb-4 text-sm">
                  Your ScholarAI account has been created successfully. We'll help you find
                  scholarships matching your profile and assist with application documents.
                </p>

                <div className="alert alert-info mb-4 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>You'll receive deadline reminders 7 days before scholarship due dates</span>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to="/scholarships" className="btn btn-primary">
                    Find Scholarships
                  </Link>
                  <Link to="/ai-assistant" className="btn btn-secondary">
                    Use AI Document Assistant
                  </Link>
                  <Link to="/login" className="btn btn-outline">
                    Go to Login
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Login link */}
          {step !== 4 && (
            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-semibold">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
