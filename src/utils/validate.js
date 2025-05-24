//has logic of form validation
export const checkValidData = (email, password) => {
  //regex code to check for valid email and password
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
