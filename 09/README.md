# TypeScript から Chart.js を使うまで


### モジュール類をインストール

```
$ npm init -y
$ npm i -D webpack webpack-cli typescript ts-loader
$ npm i -S chart.js
```

### package.json にスクリプトを追加

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack -w"
  },
}
```

### tsconfig.json を作成

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

### webpack.config.js を作成

```js
module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
```

### src ディレクトリを作成

```
$ mkdir src
```

### src/main.ts を作成
```ts
import { Chart } from "chart.js"

const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
})
```

### dist ディレクトリを作成

```
$ mkdir dist
```

### dist/index.html を作成

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title></title>
</head>
<body>
    <div style="width:50%;">
        <canvas id="myChart" width="400px" height="400px"></canvas>
    </div>
    <script src='main.js'></script>
</body>
</html>
```

### ビルドして main.js を作成

```
$ npm run build
```

### ファイル更新を監視して自動ビルド

```
$ npm run watch
```


### 出力物

[https://akiraak.github.io/pages-sandbox/09/dist/](https://akiraak.github.io/pages-sandbox/09/dist/)
