
exports.ValidateName = function (name) {
  //console.log(name.length);
  if (name.length > 0 && name.length >= 3) {
    return true;
  } else {
    let err = new Error("Enter a valid name with at least 3 characters");
    err.status = 400;
    throw err;
  }
};

exports.ValidatePassword = function (password) {
  if (password.length >= 8 && password.length <= 12) {
    return true;
  }
  let err = new Error("Enter a valid password with at least 8 and not more than 12 characters");
  err.status = 400;
  throw err;
};

exports.ValidateMobile = function (mobile) {
  if (mobile.toString().length == 10) {
    return true;
  }
  let err = new Error("Mobile Number should have 10 digits");
  err.status = 400;
  throw err;
};

exports.ValidateEmail = function (email) {
  var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (mailformat.test(email)) {
    return true;
  }
  else {
    let err = new Error("Enter a valid email id");
    err.status = 400;
    throw err;
  }
};
