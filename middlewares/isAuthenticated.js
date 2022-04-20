const isAuthenticated = (req, res, next) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken || accesstoken !== "123") {
      const error = new Error("Please login");
      error.statusCode = 401;
      throw error;
    }
    next(); //router midd
  } catch (error) {
    next(error); // escape router and go to applevel middleware
  }
};

module.exports = isAuthenticated;
