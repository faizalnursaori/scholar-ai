import { FileText, Globe, Award, Briefcase } from "lucide-react";
import type { ProfileInfoStepProps } from "../../utils/types";

const ProfileInfoStep: React.FC<ProfileInfoStepProps> = ({
  formData,
  onChange,
  onSubmit,
  onPrevious,
  isSubmitting,
  getFieldError,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Short Bio</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <FileText size={18} />
          </span>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={onChange}
            className={`textarea textarea-bordered w-full rounded-l-none ${
              getFieldError("bio") ? "textarea-error" : ""
            }`}
            placeholder="Tell us a bit about yourself..."
            rows={3}
          ></textarea>
        </div>
        {getFieldError("bio") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("bio")}</span>
          </label>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Language Scores</span>
        </label>
        <div className="relative flex border-1 rounded-lg mb-2">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Globe size={18} />
          </span>
          <input
            type="text"
            name="language_scores.english"
            value={formData.language_scores.english}
            onChange={onChange}
            placeholder="English score (e.g., TOEFL: 600, IELTS: 7.5)"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("language_scores.english") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("language_scores.english") && (
          <label className="label">
            <span className="label-text-alt text-error">
              {getFieldError("language_scores.english")}
            </span>
          </label>
        )}

        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Globe size={18} />
          </span>
          <input
            type="text"
            name="language_scores.other"
            value={formData.language_scores.other}
            onChange={onChange}
            placeholder="Other language scores (optional)"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("language_scores.other") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("language_scores.other") && (
          <label className="label">
            <span className="label-text-alt text-error">
              {getFieldError("language_scores.other")}
            </span>
          </label>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Academic Achievements</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 bg-base-300">
            <Award size={18} />
          </span>
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={onChange}
            className={`textarea textarea-bordered w-full rounded-l-none ${
              getFieldError("achievements") ? "textarea-error" : ""
            }`}
            placeholder="List your academic achievements, honors, awards, etc."
            rows={3}
          ></textarea>
        </div>
        {getFieldError("achievements") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("achievements")}</span>
          </label>
        )}
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
            name="research_experience"
            value={formData.research_experience}
            onChange={onChange}
            className={`textarea textarea-bordered w-full rounded-l-none ${
              getFieldError("research_experience") ? "textarea-error" : ""
            }`}
            placeholder="Describe your relevant work or research experience"
            rows={3}
          ></textarea>
        </div>
        {getFieldError("research_experience") && (
          <label className="label">
            <span className="label-text-alt text-error">
              {getFieldError("research_experience")}
            </span>
          </label>
        )}
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <button
          type="button"
          onClick={onPrevious}
          className="btn btn-outline flex-1"
          disabled={isSubmitting}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              Processing...
            </>
          ) : (
            "Complete Registration"
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfileInfoStep;
