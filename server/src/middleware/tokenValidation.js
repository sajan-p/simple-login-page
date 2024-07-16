const JWT = require("jsonwebtoken");

const tokenValidation = async (req, res, next) => {
  console.log(req.body);
  let token = req.header("authorization");

  if (!token) {
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }

  token = token.split(" ")[1];

  try {
    const user = await JWT.verify(token, process.env.JWT_SECRET);
    req.user = user.email;
    next();
  } catch (err) {
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }
};

module.exports = tokenValidation;
