const validator = require("validator");

exports.isObjectEmpty = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

exports.validateRegisterInput = data => {
  const { firstName, lastName, email, password } = data;
  let errors = {};

  if (!firstName || validator.isEmpty(firstName)) {
    errors.firstName = "first name is required";
  }

  if (!lastName || validator.isEmpty(lastName)) {
    errors.lastName = "last name is required";
  }

  if (!email || validator.isEmpty(email)) {
    errors.email = "email is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "invalid email";
  }

  if (!password || validator.isEmpty(password)) {
    errors.password = "password is required";
  } else if (!validator.isLength(password, { min: 8 })) {
    errors.password = "password must be at least 8 characters";
  }

  return errors;
};
