const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  //uploads라는 폴더가 없을때 uploads폴더를 생성해줌
  console.error("uploads 폴더가 없어 uploads폴더를 생성합니다");
  fs.mkdirSync("uploads");
}

//multer는 미들웨어가 아님 함수 multer함수를 가져와서 그안에 single,array,fields,none 4개의 미들웨어중에서 사용
const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/"); //uploads라는 폴더에 이미지를 업로드 할것이고
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      //파일명에다 날짜 넣어서 만들어줌 날짜를 기입하지 않으면 이름이 중복이 될시에 이미지가 덮어씌워질수있기때문
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
  //파일의 용량 제한
});

//로그인 한 사람이 이미지를 업로드할때 경로와 검출기 uploads.single("img")에서 img라는 키값이 form에서 일치해야 업로드가됨?
// 업로드를 하고 나서 미들웨어 작동
// 이미지 업로드
router.post("/img", isLoggedIn, uploads.single("img"), (req, res) => {
  console.log(req.file); //업로드한 파일이 찍힘
  res.json({ url: `/img/${req.file.filename}` }); //업로드가 완료되면 서버에서 프론트로 url을 돌려줌!
  // `/img/${req.file.filename}` 요청 주소는 img인데 실제 이미지 파일의 저장주소는 uploads임
  // ->요청주소와 실제 업로드 주소가 다를 때 app.js에서 static을 사용해 img가 uploads폴더안에 있다는 것을 표현
});

const uploads2 = multer();
// 게시글 업로드
router.post("/", isLoggedIn, uploads2.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g); // 주석안에 값을 넣으면 정규표현식! 정규표현식은 문자를 대체하거나 문자 추출 문자검색을 할때 사용!
    // hashtags 안에는
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
const uploads3 = multer();
router.post(
  "/:content/delete",
  isLoggedIn,
  uploads3.none(),
  async (req, res, next) => {
    try {
      await Post.destroy({ where: { content: "req.body.content " } });
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

module.exports = router;
