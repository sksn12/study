const Sequelize = require("sequelize");

module.exports = class Post extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING(140),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User); // post는 user에 속해있다 (1대 다 관계이다)
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post와 hashtag는 다 대 다 관계이다
    // 다 대 다 관계에서는 중간 테이블이 생기는데 "PostHashtag" 가 중간테이블 명
  }
};
