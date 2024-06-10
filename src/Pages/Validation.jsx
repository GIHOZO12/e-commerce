const Validation = (values) => {
  let errors = {};

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is not in a valid format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 9) {
    errors.password = "Password must be more than 8 characters";
  }

  return errors;
};

export default Validation;
