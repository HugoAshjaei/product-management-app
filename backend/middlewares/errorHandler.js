const errorHandler = (err, req, res, next) => {
  console.log("here");
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
};

module.exports = errorHandler;
