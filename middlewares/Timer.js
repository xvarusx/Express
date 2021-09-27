const workTime = function (req, res, next) {
  const date = new Date();
  if (
    date.getDay() > 0 &&
    date.getDay() < 6 &&
    date.getHours() >= 9 &&
    date.getHours() < 17
  ) {
    next();
  } else {
    // res.redirect("/offlinepage");
    res.send("oops");
  }
};

module.exports = workTime;
