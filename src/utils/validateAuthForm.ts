type ValidateAuthForm = {
  email: string;
  password: string;
  emailInputRef: React.RefObject<HTMLInputElement>;
  requireStrongPassword?: boolean;
};
export const validateAuthForm = ({
  email,
  password,
  emailInputRef,
  requireStrongPassword,
}: ValidateAuthForm) => {
  if (!email) {
    return "Email is required";
  }
  const isValid = emailInputRef.current?.checkValidity();
  if (!isValid) {
    emailInputRef.current?.reportValidity();
    return "Invalid Email format";
  }
  if (!password) {
    return "Password is required";
  }
  if (requireStrongPassword && password.length < 6) {
    return "Password must be at least 6 characters";
  }
  return "";
};
