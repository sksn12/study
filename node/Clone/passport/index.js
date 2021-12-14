const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const User = require("../models/user");
// 전략(Strategy) 사용 -> 로그인 어캐할지 로직 적어두는것을 뜻함
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
    //세션에 user의 id만 저장 -> 서버 메모리가 한정되어있기때문에 모든 정보를 다 저장하기에는 빡세서 아이디만 저장함
  });
  // routes auth.js에서  req.login(user 실행될때 이부분이 실행됨
  // req.user는 deserializeUser에서 생성됨!!!!!!!!!!!
  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include: [
        {
          model: User, //밑에랑 위에가 둘다 User이기때문에 as로 구분을 꼭 해줘야함!
          attributes: ["id", "nick"],
          as: "Followers",
        },
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followings",
        },
      ],
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  local();
  kakao();
};
