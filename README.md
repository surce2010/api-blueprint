## API-blueprint

### PRE-INSTALL
`npm install -g aglio && npm install -g drakov`

* aglio 可以根据 api-blueprint 的文档生成静态 HTML 页面;
* drakov 可以根据 api-blueprint 的文档创建一个本地的 mockServer;

### 项目运行

* `npm install`
* `aglio -i ./hello.md --theme-template triple -o ./hello.html`
* `node index.js`
* 访问：`http://127.0.0.1:3000/hello.html`查看接口文档

### 本地MOCK服务器

* `drakov -f ./hello.md -p 3001`


