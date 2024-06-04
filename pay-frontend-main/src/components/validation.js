const validate = (values) => {
    const errors = {};
  /* validating first name */
    if (!values.Username) {
      errors.Username = "User name is required";
    } else if (values.Username.length < 3) {
      errors.Username = "Invalid User Name";
    } else {
      errors.Username = "Nice User Name 😃";
    }
  
  /* validating last name */
    if (!values.SponsorName) {
      errors.SponsorName = "Sponsor name is required";
    } else if (values.SponsorName.length < 1) {
      errors.SponsorName = "Invalid Sponsor Name";
    } else {
      errors.SponsorName = "Awesome Sponsor Name 😁";
    }
  
  /* validating email using regex to pass email */
    if (!values.Email) {
      errors.Email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
      errors.Email = "Invalid email address";
    }
  
  /* validating passwords */
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 6) {
      errors.password = "Password length is weak 😩";
    } else {
      errors.password = "Password strength is ok 💪";
    }
  
  /* validating password verification with initial */
    if (!values.Vpassword) {
      errors.Vpassword = "Invalid password verification";
    } else if (values.Vpassword !== values.password) {
      errors.Vpassword = "Passwords don't match 😟";
    } else {
      errors.Vpassword = "Passwords match 👏";
    }
  
    return errors;
  };
  
  export default validate;
  