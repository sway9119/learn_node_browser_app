const { ewsolve, resolve } = require("path");

module.exports = {
  // mode: どの環境向けにビルドするか（develop, default=production）
  mode: "development",
  // devtool: ソースマップがあればtypescriptのまま参照できるようにするツール
  devtool: "inline-source-map",
  // entry: バンドルするファイルのエントリポイント。複数ファイルを指定可能
  entry: resolve(__dirname, "ts/index.ts"),
  // output: バンドルされてあファイルを出力する場所、出力方法
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  // resolve: モジュールの解決方法を指定する。拡張しを指定する。
  resolve: {
    extensions: [".ts", ".js"],
  },
  // module: モジュールとして扱いたいファイルを指定する。それおれloaderを記述する。
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
