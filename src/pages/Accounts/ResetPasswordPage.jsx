import { useSearchParams } from "react-router-dom";
import ResetPasswordModal from "../../components/Accounts/ResetPasswordModal";
const ResetPasswordPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token");

  return <ResetPasswordModal token={token} />;
};

export default ResetPasswordPage;
