import { Link } from "react-router-dom";
import type { LoginLinkProps } from "../../utils/types";

const LoginLink: React.FC<LoginLinkProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="text-center mt-4">
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default LoginLink;
