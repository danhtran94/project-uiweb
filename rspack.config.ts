import { resolve } from "path";
import { readFileSync } from "fs";

import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
// import * as RefreshPlugin from "@rspack/plugin-react-refresh"; // version 1-alpha
import RefreshPlugin from "@rspack/plugin-react-refresh";

const swcrcJSON = readFileSync("./.swcrc", "utf-8");
const swcrc = JSON.parse(swcrcJSON);

const isProd = process.env.NODE_ENV == "production";
const mode = isProd ? "production" : "development";
const devServerPort = 8080;
const hashLength = 6;

swcrc.jsc.transform.react.development = !isProd;
swcrc.jsc.transform.react.refresh = !isProd;

const config = defineConfig({
  context: __dirname,
  mode: mode,
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: resolve(__dirname, "dist"),
    // path: resolve(__dirname, "../cmd/server/www"),
    filename: `[name].[chunkhash:${hashLength}].js`,
    chunkFilename: `[name].[chunkhash:${hashLength}].js`,
    publicPath: "/",
  },
  resolve: {
    tsConfig: {
      configFile: resolve(__dirname, "tsconfig.json"),
    },
    alias: {
      "@": resolve(__dirname, "src/"),
    },
    extensions: ["...", ".js", ".ts", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.([tj]sx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: swcrc.jsc,
              env: {
                targets: ["> 0.2% and not dead"],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["builtin:lightningcss-loader"],
        type: "css/auto",
      },
      {
        test: /\.(jpe?g|gif|png|ttf|wolf)/,
        type: "asset/resource",
        generator: {
          filename: `assets/[name].[hash:${hashLength}][ext][query]`,
        },
      },
      {
        test: /\.svg$/i,
        exclude: /\.icon\.svg$/,
        type: "asset/resource",
        generator: {
          filename: `assets/[name].[hash:${hashLength}][ext][query]`,
        },
      },
      {
        test: /\.icon\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              descProp: true,
              titleProp: true,
              ref: true,
              icon: true,
              svgo: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new rspack.ProgressPlugin({}),
    new rspack.CopyRspackPlugin({
      patterns: [{ from: resolve(__dirname, "public"), to: "" }],
    }),
    new rspack.HtmlRspackPlugin({
      template: "./src/index.html",
    }),
    !isProd ? new RefreshPlugin() : null,
  ].filter(Boolean),
  experiments: {
    css: true,
  },
  devServer: {
    port: devServerPort,
    historyApiFallback: true,
    hot: true,
    // https: true,
    liveReload: true,
  },
});

config.optimization = {
  minimize: isProd,
  // runtimeChunk: "single",
  splitChunks: {
    chunks: "all",
    cacheGroups: {
      react: {
        priority: 10,
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: "react",
        chunks: "all",
      },
      vendors: {
        test: /node_modules/,
        // chunks: "initial",
        chunks: "all",
        name: "vendors",
        priority: 0,
        // enforce: true,
      },
    },
  },
};

export default config;
