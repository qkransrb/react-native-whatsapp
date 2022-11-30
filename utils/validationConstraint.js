import { validate } from "validate.js";

export const validateString = (id, value) => {
  const constraint = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraint.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "value can only contain letters",
    };
  }

  const validationResult = validate({ [id]: value }, { [id]: constraint });

  return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
  const constraint = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraint.email = true;
  }

  const validationResult = validate({ [id]: value }, { [id]: constraint });

  return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
  const constraint = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraint.length = {
      minimum: 4,
      message: "must be at least 4 characters",
    };
  }

  const validationResult = validate({ [id]: value }, { [id]: constraint });

  return validationResult && validationResult[id];
};
