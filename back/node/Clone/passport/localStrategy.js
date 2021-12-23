// 이메일과 password로 로그인하는것을 적어줌
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", // req.body.email
        passwordField: "password", // req.body.password
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password); // 가입된 이메일이 존재한다면 비밀번호화 디비에 저장되어 있는 해시화된 비밀번호를 비교한다
            if (result) {
              done(null, exUser); // done은 인자를 세개(성공 2개 실패3개)를 받는데 맨처음은 서버 에러  두번째는 로그인이 성공하면  exUser 실패하면 false 실패후 메세지 처리까지 3개
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다" });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
            // done 함수가 실행되면 routes 폴더에 auth.js로 넘어간다
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
