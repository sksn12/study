const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config(); //dotenv.config();는 require하고 최대한 위에 하는것이 좋음 why? dotenv.config()이후에 dotenv설정값들이 들어가서
const pageRouter = require("./routes/page");
const { sequelize } = require("./models");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const passportConfig = require("./passport");

const app = express();
passportConfig();
app.set("port", process.env.PORT || 8001); // 여기서 or를 사용하는 이유는 개발하는 포트는 8001을 사용하다가 배포할때 .env에서 port=80이렇게 새로운 포트넘버값을 주기위해!!
app.set("view engine", "html"); //넌적스 설정코딩
nunjucks.configure("views", {
  express: app,
  watch: true,
});
// force: ture 하면 테이블이 지워졌다가 다시 생성됨 초기화됨 -> 실무에서 쓰지마세요 다 날라갑니다
// alter : ture 컬럼이 바뀐것을 반영하고 싶을때 사용  (문제점) -> 새로운 칼럼에서 무조건 값이 있어야하는 allowNull이 false 값을 만들면 기존데이터가 allow : ture일때 오류가 발생!
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session()); // 이 두줄이 있음으로 로그인을 한번하고나면 다음요청부터 세션쿠키를 생성하지 않고 passport폴더에 index.js에서 deserializeUser가 실행된다
app.use("/", pageRouter);
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error); //404없는 경우 미들웨어도 err미들웨어로 넘기기위해 next사용!
});

app.use((err, req, res, next) => {
  //error미들웨어는 인자가 4개여야함!
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {}; //개발시에는 error상세내역이 나올수있게 배포할때는 보이지않게!
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
