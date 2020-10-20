const path = require('path');
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/api/user', (req, res) => {
  const url = req.path;
  console.log('req:', req.path)
  const obj = {name: '密码'};
  return res.send(obj);
});

console.log('server index called')
// app.listen(3001, () => {
//   console.log('示例应用正在监听 3001 端口')
// })
module.exports = {
  path: '/api',
  handler: app
}