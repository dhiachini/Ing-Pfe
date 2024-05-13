const Validator = require("validator");

const ValidateAccountRequest = (data) => {
  let errors = {};

  // Fullname validation
  if (Validator.isEmpty(data.Fullname)) {
    errors.Fullname = "Full name is required";
  }

  // Companyname validation
  if (Validator.isEmpty(data.Companyname)) {
    errors.Companyname = "Company name is required";
  }

  // Professionalemail validation
  if (Validator.isEmpty(data.Professionalemail)) {
    errors.Professionalemail = "Professional email is required";
  } else if (!Validator.isEmail(data.Professionalemail)) {
    errors.Professionalemail = "Invalid email format";
  }

  // Password validation
  if (Validator.isEmpty(data.Password)) {
    errors.Password = "Password is required";
  }

  // Confirmpassword validation
  if (Validator.isEmpty(data.Confirmpassword)) {
    errors.Confirmpassword = "Confirm password is required";
  } else if (!Validator.equals(data.Password, data.Confirmpassword)) {
    errors.Confirmpassword = "Passwords do not match";
  }

  // Telephonecode validation
  if (Validator.isEmpty(data.Telephonecode)) {
    errors.Telephonecode = "Telephone code is required";
  }

  // Phonenumber validation
  if (Validator.isEmpty(data.Phonenumber)) {
    errors.Phonenumber = "Phone number is required";
  } else if (!Validator.isNumeric(data.Phonenumber)) {
    errors.Phonenumber = "Phone number must contain only digits";
  }

  // Websiteurl validation (optional)
  if (!Validator.isEmpty(data.Websiteurl) && !Validator.isURL(data.Websiteurl)) {
    errors.Websiteurl = "Invalid URL format";
  }

  // Adresse validation (optional)
  if (!Validator.isEmpty(data.Adresse) && Validator.isNumeric(data.Adresse)) {
    errors.Adresse = "Adresse must not contain only numbers";
  }

  // Taxregistrationnumber validation (optional)
  if (!Validator.isEmpty(data.Taxregistrationnumber) && !Validator.isNumeric(data.Taxregistrationnumber)) {
    errors.Taxregistrationnumber = "Tax registration number must contain only numbers";
  }

  // Patent validation (optional, if required)
  // Add validation for patent upload if needed

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

module.exports = ValidateAccountRequest;
