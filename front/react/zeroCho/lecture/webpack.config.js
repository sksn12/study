const path = require("path");
const { webpack } = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word=relay=setting",
  mode: "development", // 실서비스에서는 production으로 change
  devtool: "eval",
  // js,jsx파일을 가져옴
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // 파일을 가져옴 client가 상위 파일이고 guguDan파일을 가져오기 때문에 사실 client만 entry에 넣어주면됨
  entry: {
    app: ["./client", "./guguDan"],
  }, // 입력

  //entry로 받아온 파일들을 모듈화 시켜서 룰을 적용시킴
  // .jsx나 .js로 된 파일들을 가져와서 바벨로 옛날 문법으로 바꿔주겠다.
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env", //preset-env 바벨로 원하는 브라우저를 선택하여 코드 변환
              {
                targets: {
                  browsers: ["> 5% in KR"], //borwerslist에서 코드 확인
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },

  // 추가적으로 하고 싶은 작업
  plugins: [new RefreshWebpackPlugin()],

  // path를 사용하면 컴퓨터 디랙토리 경로를 일일히 타자로 치지 않고 자동으로 경로 탐색
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력

  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
