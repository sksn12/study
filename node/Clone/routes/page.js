const express = require("express");
const { Post, User, Hashtag } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user; // 파일내의 모든 라우터들은 미들웨어를 거쳐야함으로 미들웨어의 특성을이용해 중복제거
  // 여기서는 모든 라우터에서 유저의 정보를 사용해야함으로 미들웨어에 넣어줌
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user
    ? req.user.Followings.map((f) => f.id)
    : [];
  next();
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
});

router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    }); // 업로드한 게시글들을 찾고
    res.render("main", {
      title: "NodeBird",
      twits: posts, //찾은 게시글들을 twits로 넣어줌
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/hashtag", async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({
        include: [{ model: User, attributes: ["id", "nick"] }],
      });
    }
    //User에는 여러 칼럼들이있는데 attributes: ["id", "nick"]하면 id와 nick값만 프론트로 보여짐 전부다 보여지면 해커들에게 노출되서 위험!

    return res.render("main", {
      title: `${query} 검색결과 | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
