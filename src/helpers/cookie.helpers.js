const cookieOptions = {
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: "lax",
  httpOnly: true,
  path: "/",
  //   partitioned: true,
};

module.exports = cookieOptions;
