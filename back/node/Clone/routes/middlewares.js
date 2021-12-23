exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
}; // isLoggedIn을 거치면 로그인을 한사람은 다음으로 넘어가고 로그인하지않을사람은 로그인 필요라는 메세지문구가 나오게된다

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다");
    res.redirect(`/?error=${message}`);
  }
}; // isNotLoggedIn을 거치면 로그인을 하지 않은 사람은 next로 다음으로 넘어가고 로그인 되어있는 사람은 로그인한 상태입니다라는 문구와함께 에러처리 redirect가 된다.
