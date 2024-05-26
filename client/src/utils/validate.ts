export const validateMobile = (mobile: string) => {
  return mobile.match(/^[1-9]([0-9]*){8,10}$/);
};
export const validateUsername = (str: string) => {
  const regExp = /^[a-z_]*$/;
  return regExp.test(str);
};
export const validateEmail = (email: string) => {
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegExp.test(email);
};
export const validatePassword = (pass: string) => {
  return pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/);
};
export const onlyNumber = (num: string): boolean => {
  const numRegExp: RegExp = /^[0-9]+$/;
  return numRegExp.test(num);
};

export const passwordValidator = (value: string) => {
  let isValid = true;
  let message = "";
  if (!validatePassword(value)) {
    isValid = false;
    message = "weak";
  } else {
    message = "strong";
    isValid = true;
  }
  return { isValid, message };
};

export const validatePasswordInput = (value: string) => {
  if (!validatePassword(value)) {
    return true;
  } else {
    throw "error";
  }
};

// export const FormatTime = (time: string, prefix = "") => {
//   const date = Date.parse(time); // returns NaN if it can't parse
//   return Number.isNaN(date) ? "" : prefix + date.toLocaleDateString();
// };
