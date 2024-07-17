const argon2 = require("argon2");
const { findOnebyEmail, createUser } = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findOnebyEmail(email);

  if (!user) {
    return res
      .status(401)
      .json({ sucess: false, message: "Invalid credentials" });
  }

  const passwordMatch = await argon2.verify(user.password, password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ sucess: false, message: "Invalid credentials" });
  }

  res.json({ sucess: true, user: {id: user.id, emeil: user.email}});
};

const register = async (req, res) => {
    const { email, password, firstname, lastname} = req.body;
    console.log(email, password, firstname, lastname);

    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);

    try {
        const userId = await createUser({
            email,
            password: hashedPassword,
            firstname,
            lastname,
        });
        res.json({sucess: true, userId: userId.toString()});
    } catch (error) {
        console.error("Error registering user :", error);
        res.status(500).json({sucess: false, message: "Internal server error"});
    }
};
