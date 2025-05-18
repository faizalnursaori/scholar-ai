import { User, Mail, Lock } from "lucide-react";
import type { AccountInfoStepProps } from "../../utils/types";

const AccountInfoStep: React.FC<AccountInfoStepProps> = ({
  formData,
  onChange,
  onNext,
  getFieldError,
}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 rounded-l-lg bg-base-300">
            <User size={20} />
          </span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            placeholder="Input Your Username"
            className={`input input-bordered w-full ${
              getFieldError("username") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("username") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("username")}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 rounded-l-lg bg-base-300">
            <User size={20} />
          </span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="Input Your First Name"
            className={`input input-bordered w-full ${
              getFieldError("firstName") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("firstName") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("firstName")}</span>
          </label>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <div className="relative flex border-1 rounded-lg">
          <span className="inline-flex items-center px-3 rounded-l-lg bg-base-300">
            <User size={20} />
          </span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="Input Your Last Name"
            className={`input input-bordered w-full ${
              getFieldError("lastName") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("lastName") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("lastName")}</span>
          </label>
        )}
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
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="your.email@example.com"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("email") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("email") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("email")}</span>
          </label>
        )}
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
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Create a secure password"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("password") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("password") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("password")}</span>
          </label>
        )}
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
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
            placeholder="Confirm your password"
            className={`input input-bordered w-full rounded-l-none ${
              getFieldError("confirmPassword") ? "input-error" : ""
            }`}
          />
        </div>
        {getFieldError("confirmPassword") && (
          <label className="label">
            <span className="label-text-alt text-error">{getFieldError("confirmPassword")}</span>
          </label>
        )}
      </div>

      <div className="form-control mt-6">
        <button onClick={onNext} className="btn btn-primary w-full rounded-lg">
          Next Step
        </button>
      </div>
    </>
  );
};

export default AccountInfoStep;
