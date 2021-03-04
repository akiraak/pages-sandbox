```
$ npm init -y
$ npm i -D webpack webpack-cli typescript ts-loader
```

package.json
```json:
{
  "name": "08_webpack_typescript",
  "version": "1.0.0",
  "description": "``` npm init -y npm i -D webpack webpack-cli mkdir src mkdir dist ```",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^8.0.17",
    "typescript": "^4.2.2",
    "webpack": "^5.24.2",
    "webpack-cli": "^4.5.0"
  },
  "private": true
}
```

tsconfig.json
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "module": "es2015"
  }
}
```

webpack.config.js
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

```
mkdir src
```

main.ts
```ts
const Hello = (name: string): string => {
    return "Hello " + name;
}

alert(Hello('hoge'))
```

```
$ mkdir dist
```

index.html
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title></title>
</head>
<body>
    <script src='main.js'></script>
</body>
</html>
```

build
```
$ npm run build
```

auto build
```
$ npm run watch
```

```
$ npm i -S chart.js
```