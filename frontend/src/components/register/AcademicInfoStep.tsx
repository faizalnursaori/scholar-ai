import { GraduationCap, BookOpen, School, Percent, Calendar, Clock } from "lucide-react";
import type { AcademicInfoStepProps } from "../../utils/types";

const AcademicInfoStep: React.FC<AcademicInfoStepProps> = ({
  formData,
  onChange,
  onNext,
  onPrevious,
  getFieldError,
}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Current Education Level</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <GraduationCap size={18} />
          </span>
          <select
            name="degree_level"
            value={formData.degree_level}
            onChange={onChange}
            className={`select select-bordered w-full rounded-l-none ${
              getFieldError("degree_level") ? "select-error" : ""
            }`}
          >
            <option value="" disabled>
              Select education level
            </option>
            <option value="S1">S1 (Bachelor's)</option>
            <option value="S2">S2 (Master's)</option>
            <option value="S3">S3 (Doctorate)</option>
          </select>
        </div>
        {getFieldError("degree_level") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("degree_level")}</span>
          </label>
        )}
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
            name="university"
            value={formData.university}
            onChange={onChange}
            placeholder="Your university name"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("university") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("university") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("university")}</span>
          </label>
        )}
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
            name="major"
            value={formData.major}
            onChange={onChange}
            placeholder="Your field of study"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("major") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("major") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("major")}</span>
          </label>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">GPA</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Percent size={18} />
          </span>
          <input
            type="number"
            name="gpa"
            value={formData.gpa}
            onChange={onChange}
            step="0.01"
            min="0"
            max="4"
            placeholder="Current GPA (e.g., 3.75)"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("gpa") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("gpa") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("gpa")}</span>
          </label>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Birth Date</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Calendar size={18} />
          </span>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={onChange}
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("birth_date") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("birth_date") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("birth_date")}</span>
          </label>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Graduation Year</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Clock size={18} />
          </span>
          <input
            type="number"
            name="graduation_year"
            value={formData.graduation_year}
            onChange={onChange}
            min="2000"
            max="2050"
            placeholder="Expected graduation year"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("graduation_year") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("graduation_year") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("graduation_year")}</span>
          </label>
        )}
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <button onClick={onPrevious} className="btn btn-outline flex-1">
          Back
        </button>
        <button onClick={onNext} className="btn btn-primary flex-1">
          Next Step
        </button>
      </div>
    </>
  );
};

export default AcademicInfoStep;
