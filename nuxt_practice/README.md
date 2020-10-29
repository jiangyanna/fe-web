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
  在NuxtLink添加no-prefetch属性或设置 :pferetch="false"禁用当前链接prefetch，
  如果在nuxt.config.js中配置了router:{prefetchLinks: false}禁用所有连接prefetch，也可以在nuxtlink上添加prefetch指定某个链接prefetch
  所有内部链接跳转都应该使用<NuxtLink>,跳转外部网站的链接应该使用a标签
4 <client-only></client-only>组件，(https://nuxtjs.org/guides/features/nuxt-components)
感觉不是很好用，不知道是否使用姿势不对  可以用process.server/process.client判断环境执行不同的操作
如果只在客户端渲染某个组件，需要在客户端plugin中注册组件，然后将其包在client-only中

<!-- nuxt生命周期 -->
vue的生命周期中，只有beforeCreate和created这两个钩子可以同时在客户端和服务端执行

<!-- 路由切换过渡/动画transition -->
transition 路由切换时的过渡效果/动画
  特定页面的过渡效果设置，在页面中设置transition属性
   * transition值可以是string/object/function，默认的transition name是'page'
   * 需在css中设置过渡效果样式
   * .home-enter-active, .home-leave-active { transition: opacity 5s; }.home-enter, .home-leave-active { opacity: 0; }
  所有页面应该过渡效果：
   nuxt提供的默认transition名称是'page'，如果项对项目的每一个页面应用过渡效果，可以在全局css中设置css样式，nuxt.config.js中引入全局css：
   css: [~/assets/main.css]

<!-- 异步数据获取方式 -->
  fetch和asyncData是nuxt提供的两种异步数据加载的钩子函数
   fetch
   * fetch 有this、可以在任何组件中使用，组件级别暴露$fetchState：
   * $fetchState.pending布尔值，在客户端渲染时可以显示占位符
   * $fetchState.error：null或fetch抛出的Error对象
   * $fetchState.timestamp：上一次fetch请求的时间戳
   asyncData
   * asyncData 没有this、只能在页面组件中使用，会阻塞路由导航，失败时可以通过context.error方法处理跳转layout/error页面
   * asyncData会将其return的数据与本地的vue组件的data对象进行合并

<!-- nuxt目录结构 -->
1 assets 该目录用于包含未编译的资源，如css/images/fonts
  nuxt.config.js中引入assets目录下资源： css: ['~/assets/css/main.css']。引入scss文件需要安装node-sass和sass-loader
  vue文件中引入assets目录下的资源： ~/assets/
  css中（无论是assets目录下的css文件还是vue文件的css）引入assets目录下的资源(少了一层斜杠/)：~assets
2 layouts  项目页面的模板 
   2.1 layouts/default.vue 项目的主要布局模板，需要包含<Nuxt/>组件用于渲染页面。默认会应用到所有页面，除非如果页面特别指定模板
   2.2 layouts/error.vue   error page是一个页面组件，模板中不包含<Nuxt/>，发生错误时展示。
        尽管在layouts目录下，但是可以认为是一个页面，可以为其指定layout属性:export default {layout: 'blog'}
   2.3 可以在layouts目录下创建自定义布局模板，如layouts/blog.vue  然后页面中指定使用该模板：export default {layout: 'blog'}
2 components 该目录包含不同的vue组件
  2.1 组件注册方式
  （1）配置文件nuxt.config.js中配置components:true后，会自动全局注册components目录下的所有内容，无须手动引入组件；
  （2）值为false(默认false)，须手动引入组件并完成注册
      在页面中局部注册组件。示例：
      <template>
        <Mountains></Mountains>
      </template>
      <script>
        import Mountains from '~/components/mountains.vue'
        export default {
          components:{ Mountains }
        }
      </script>

      如果组件名是多个单词且是驼峰命名方式(productName.vue)，页面中引入组件时<ProductName></ProductName>或<product-name></product-name>
      ques：如何判断组件是局部注册，还是全局注册？
  2.2 组件加载
  (1)组件名小写(product.vue productname.vue):在页面中引入组件时，组件名也可以是全部小写的，但是dialog.vue组件名可能与nuxt内部有冲突，必须要大写才可以
  (2)组件名多个单词且是驼峰式命名（productName.vue)：在页面中引入组件时，组件名必须是<ProductName></ProductName>或<product-name></product-name>
  综上，无论组件名是否以大写字母开头，推荐在页面中使用使用时组件名以大写字母开头
  2.3 组件懒加载
  在页面中使用组件时添加Lazy前缀，<LazyProductName></LazyProductName>或<lazy-product-name></lazy-product-name>
  ques:若是手动引入的组件，是引入组件时将其名字前添加Lazy?如何区分组件加载方式是懒加载还是正常加载？？？
  2.4 嵌套组件命名
  如果组件目录层级为components/base/Button.vue，nuxt推荐组件命名时加上目录名更好的识别组件
  components/
    base/
      baseButton.vue
  如果想保持组件名不变（components/base/Button.vue），可以在nuxt配置文件中对components属性中为某个子目录下的所有组件添加指定前缀
  components: {
    dirs: [
      '~/components',
        {
          path: '~/components/base/',
          prefix: 'Base'
        }
    ]
  }
  components/base/Button.vue组件在页面中的使用：<BaseButton text="自定义按钮"></BaseButton>






  