const express = require("express");

const { isLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

// POST /user/1/follow
router.post("/:id/follow", isLoggedIn, async (req, res, next) => {
  try {
    //먼저 나의 아이디를 찾음
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      //나의 아이디가 1이라는 아이디값을 가진 사용자를 팔로잉함
      await user.addFollowings([parseInt(req.params.id, 10)]); // addFollowing:내가(params.id)팔로잉 추가  setFollowings:내팔로잉 목록을 수정(통채로 바꿔서 조심해야함!)
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id/unFollow", isLoggedIn, async (req, res, next) => {
  try {
    //먼저 나의 아이디를 찾음
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      //나의 아이디가 1이라는 아이디값을 가진 사용자를 팔로잉함
      await user.deleteFollowings([parseInt(req.params.id, 10)]);
      // addFollowing:내가(params.id)팔로잉 추가  setFollowings:내팔로잉 목록을 수정(통채로 바꿔서 조심해야함!)
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
