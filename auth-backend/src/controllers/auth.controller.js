const User = require("../models/User");

exports.startAuth = async (req, res) => {
  const { email, phone } = req.body; //destructing
  if (!email && !phone) {
    return res.status(400).json({
      message: "Email or phone required",
    });
  }
  let user;
  if (email) {
    user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, provide: "email" });//lazy user creation
    }
    return res.json({//tells fe what to do next with user session
      next: "EMAIL_OTP",
      userId: user._id,
    });
  }
  if (phone) {
    user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone, provide: "phone" });
    }
    return res.json({
      next: "PHONE_OTP",
      userId: user._id,
    });
  }
};

//req: data coming from frontend
//res: response back end
//destructing: extract data from request body
