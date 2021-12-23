const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env]; //config 안에 config.json에서 development값을 가져옴

const User = require("./user");
const Post = require("./post");
const Hashtag = require("./hashtag");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post; // 사용자가 여러개의 게시글을 만들수 있음으로 1(user) 대 다(post) 관계가 형성된다.
db.Hashtag = Hashtag; // 게시글과 hashtag는 다 대 다 관계를 지닌다

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;
