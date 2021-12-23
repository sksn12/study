const Sequelize = require("sequelize");

module.exports = class User extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true, // null이여도 되고 고유해야한다 -> 두 개의 이메일이 null값을 가질 수 는 있어도 이메일을 가진값에서는 중복된 이메일을 가질 수 없다
        },
        nick: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100), //비밀번호를 해시화할때 비밀번호 길이가 늘어나서 여유있게 100까지 잡아줌
          allowNull: true, //비밀번호가 없어도됨! -> 카카오나 sns로 로그인할때 비밀번호 필요 x
        },
        provider: {
          //로그인 제공자
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: "local", // 이값에 따라 어디서 로그인 하는지 알 수 있음 -> local이면 기본 로그인 제공자 카카오면 카카오 다른 sns에서는 sns
        },
        snsId: {
          type: Sequelize.STRING(30), // 카카오나 다른 sns로 로그인할때 snsId라는 것을 발급해줘서 카카오로 로그인했을때 그 sns아이디를 아이디 처럼 사용할수 있음! ->DB에 저장해야함
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true, //CRUD날짜가 기록이됨
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci", //charset과 collate설정을 해야 한글이 지원됨
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post); //user는 post를 많이 가질 수  있다 (1대 다 관계)
    db.User.belongsToMany(db.User, {
      foreignKey: "followingId",
      as: "Followers", // foreignKey와 as의 관계가 반대인 이유는 as 팔로워하면 그사람의 팔로워 id가 아닌 팔로잉 id가 필요하기 때문
      // 팔로워들이 누군지 알고 싶으면 팔로워들의 아이디가 아닌 팔로워들이 팔로우하는 팔로잉 id값이 필요!
      through: "Follow",
    });
    db.User.belongsToMany(db.User, {
      foreignKey: "followerId",
      as: "Followings",
      through: "Follow",
    });
  }
};
