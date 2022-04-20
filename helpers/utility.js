const sendResponse = (data, statusCode, message, res, next) => {
  const result = { data, message };
  return res.status(statusCode).send(result);
};
const validateQuery = (allowQuery, query) => {
  //array 1
  // array 2
  //kiem tra tat ca cac phan tu cua array 2 co trong array 1
  // return true || false
};

module.exports = { sendResponse, validateQuery };
