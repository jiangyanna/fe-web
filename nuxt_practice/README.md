# nuxt_practice

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


<!-- pm2 -->
https://pm2.keymetrics.io/docs/usage/quick-start/

<!-- iview -->
http://v1.iviewui.com/components/menu
http://v1.iviewui.com/components/layout#%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B

<!-- @nuxtjs/axios -->
http://axios-js.com/zh-cn/docs/nuxtjs-axios.html
http://www.axios-js.com/zh-cn/docs/


<!-- nuxt官网进度 -->
https://nuxtjs.org/guides/features/data-fetching

<!-- yarn -->
https://neveryu.github.io/2018/07/20/yarn/

<!-- nuxt引入eslint步骤 -->
1 安装开发环境依赖 eslint babel-eslint eslint-loader prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
2 项目根目录增加eslint配置文件.eslintrc.js
3 package.json的scripts中增加命令 "lint": "eslint --ext .js,.vue --ignore-path .gitignore ."
4 执行yarn lint 报错 error  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
5 解决：修改eslint配置文件为
parserOptions: {
  parser: 'babel-eslint'
}

<!-- nuxt loading问题 -->
nuxt.config.js中配置了loading样式但是页面加载并没有看到加载条，只有在页面中手动调用时才会显示

<!-- nuxt 内置的组件(可以全局使用) -->
1 <Nuxt/> 只能在layouts中使用，显示页面组件，该组件会被替换为当前展示的页面组件的内容
2 <NuxtChild/> 在嵌套路由的父组件中使用，用于显示子组件，该组件会被替换为当前展示的子组件的内容
<Nuxt/>和<NuxtChild/> 均可以设置keep-alive、 keep-alive-props属性
3 <NuxtLink to="/">Home Page</NuxtLink> 应用程序的页面之间导航
  所有内部链接跳转都应该使用<NuxtLink>,跳转外部网站的链接应该使用a标签