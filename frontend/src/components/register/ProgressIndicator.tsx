import type { ProgressIndicatorProps } from "../../utils/types";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-6">
      <ul className="steps steps-horizontal w-full">
        <li className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>Account</li>
        <li className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>Academic</li>
        <li className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>Profile</li>
        <li className={`step ${currentStep >= 4 ? "step-primary" : ""}`}>Complete</li>
      </ul>
    </div>
  );
};

export default ProgressIndicator;
