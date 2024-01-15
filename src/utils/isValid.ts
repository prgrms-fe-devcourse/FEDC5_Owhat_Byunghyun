export const isValidEmail = (value: string) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);

export const isValidPassword = (value: string) =>
  value.length >= 8 &&
  /[a-zA-Z]/.test(value) &&
  /\d/.test(value) &&
  /[!@#$%^&*(),.?":{}|<>]/.test(value);

export const isValidUsername = (value: string) =>
  value.length >= 3 && /^[가-힣a-zA-Z0-9]+$/.test(value);

export const isValidPasswordMatch = ({
  value,
  newPassword,
}: {
  value: string;
  newPassword: string;
}) => {
  return newPassword === value;
};
