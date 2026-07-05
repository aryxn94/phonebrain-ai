exports.signup = (req, res) => {
  res.json({
    success: true,
    message: "Signup API ready 🚀",
    data: req.body
  });
};

exports.login = (req, res) => {
  res.json({
    success: true,
    message: "Login API ready 🚀",
    data: req.body
  });
};
