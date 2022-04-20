const express = require("express");
const router = express.Router();
const { sendResponse, validateQuery } = require("../helpers/utility");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post("/news", isAuthenticated, (req, res, next) => {
  try {
    const query = req.query;
    const keysArray = Object.keys(query);
    console.log(keysArray);

    const allowed = ["category", "title", "city"];
    keysArray.forEach((e) => {
      if (allowed.indexOf(e) === -1) {
        const error = new Error(`${e} Query not allow`);
        error.statusCode = 400;
        throw error;
      }
    });
    return sendResponse({}, 200, "post news", res, next);
  } catch (error) {
    next(error);
  }
});

router.put("/news/:id", isAuthenticated, (req, res, next) => {
  return sendResponse({}, 200, "update news", res, next);
});

router.post("/login", isAuthenticated, (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = { name, password };
    const userDbs = [
      { name: "tuan", password: "3ef" },
      { name: "notTuan", password: "31f" },
      { name: "moreTuan", password: "4ef" },
      { name: "mostTuan", password: "9ef" },
    ];
    console.log(user);
    if (
      !userDbs.some(
        (userDb) =>
          userDb.name === user.name && userDb.password === user.password
      )
    ) {
      const error = new Error(`You have not registered!`);
      error.statusCode = 400;
      throw error;
    }
    return sendResponse({ accesstoken: 123 }, 200, "", res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// return sendResponse({ accesstoken: 123 }, 200, "post news", res, next);
