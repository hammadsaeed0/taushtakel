export const validateEmail = email => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.trim());
};

export const validatePassword = password => {
  let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
  return re.test(password);
};
export const VALIDATION = {
  password: (pw) => {
    return (
      /[A-Z]/.test(pw) &&
      /[a-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw) &&
      pw.length > 4
    );
  },
  email: (email) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]");
    // let regex =/^[a-z0-9]+$/

    if (email.name == "") {
      return false ;
    } else if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  },
};