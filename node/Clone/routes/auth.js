const express = require("express");
const passport = require("passport");
const bycrpt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares"); // 미들웨어 사용으로 로그인 되어있는지 아닌지 검출기 역할!
//로그인이 되어서는 안되는 페이지 ex)로그인되어 세션의 쿠키가 있는경우 회원가입을 하면 안됨으로 회원가입 페이지 에서는 미들웨어로 로그인이 안되있을경우에만 동작할수 있게 검출기 역할
const User = require("../models/user");

const router = express.Router();

//회원가입
router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    // 기존에 같은 이메일로 가입한 사람이 있나 확인
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      // 만약에 있으면 프론트에서 이미 존재하는 이메일입니다 라는 문구를 작성해주고
      // redirect로 쿼리스트링 /join?error=exist'을 프론트로 보내주면 프론트 개발자가 처리해줌
      return res.redirect("/join?error=exist");
    }
    const hash = await bycrpt.hash(password, 12); //비밀번호를 해시화 하는데 12는 얼마나 복잡하게 해시 할 건지를 나타냅니다 숫자가 클수록 암호화가 잘되지만 오래걸림!
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect("/"); // 회원가입 후 다시 메인 페이지로 돌아감!
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//로그인
// authenticate : 진위여부를 확인하다
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    // done 함수 실행시 (authError, user, info) => {}이부분이 실행됨
    // passport.authenticate("local", 까지 실행되고 passport폴더에 localStrategy.js가 실행됨
    if (authError) {
      console.error(authError);
      return next(authError);
    } // 서버쪽에 에러가 있는경우
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    } // 로그인 실패한 경우 메세지를 담아서 프론트로 보냄
    return req.login(user, (loginError) => {
      //  req.login(user, 하는 순간 passport폴더에 index.js로 넘어감
      // passport 폴더에 index.js에서 done(null, user.id);되는 순간  (loginError) => {}이부분이 실행됨
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // 세션 쿠키를 브라우져로 보내줌 ->리다이렉트후 세션 쿠키가 브라우저에 남게되어 다음 요청시에는 서버가 누가 요청을 보냈는지 알게 되어 로그인이 필요한 페이지도 자동을 보여줌?
      return res.redirect("/");
    }); //로그인 성공했을시에
  })(req, res, next); //미들웨어 확장 형식!
});

//로그아웃
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout(); //세션 쿠키를 사라지게함
  req.session.destroy();
  res.redirect("/");
});

//카카오 로그인
router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
module.exports = router;
