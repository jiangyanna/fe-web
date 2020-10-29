import { sortRoutes } from '@nuxt/utils';

/**
 * 通常nuxt配置文件nuxt.config.js中都是export default{}，也可以使用异步配置export default async () {}
 */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  /**
   * 设置meta数据有三种方式
   * 1 nuxt.config.js全局设置
   * 2 本地head对象中使用
   * 3 本地head函数中使用，可以访问data/computed数据
   */
  head: {
    title: 'nuxt_practice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // meta的唯一标识符hid，避免与页面中的设置重复  如果设置了同名属性，且都设置了hid，则访问页面时只会有一个当前页面设置的属性
      { hid: 'description', name: 'description', content: 'my website description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 引入外部font/css资源,默认在head中引入，设置body属性为true后将在</body>前引入
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap', body: true }
    ],
    // 引入外部js资源,默认在head中引入，设置body属性为true后将在</body>前引入
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', body: true }
    ] 
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'iview/dist/styles/iview.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/iview',
    // '@/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,   // 设置true，会自动全局注册components目录下的所有内容，无须手动引入组件；值为false，须手动引入组件并完成注册

  components: {
    dirs: [
      '~/components', // 该设置同components: true,
      {
        path: '~/components/base/',
        prefix: 'Base'
      }
    ]
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // modules可以暴露自己的方法，然后通过context.app访问到
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http'
  ],

  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,  // 提取公共的css样式到css文件中，网页源代码中不再展示全部的css
    /**
     * extend方法扩展webpack配置
     * 接收两个参数：config是webpack配置对象，context对象{isDev, isClient, isSerer, loaders}
     * 该方法会被调用两次，一次是在客户端，另一次是服务器端
     *  */ 
    extend (config, { isDdev, isClient }) {
      if (isDdev) {
        config.mode = 'development'
      }
      if (isClient) {
        // config.optimization.splitChunks.maxSize = 200000;  // 比maxSize字节大的chunks会被分隔为较小的部分
      }
      // 配置后好像没有生效
      // if (isDdev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: '/\.(js|vue)$/',
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }, // webpack配置

  // 页面加载进度条，  todo：配置了后还需要在页面中手动调用？如果不调用看不到加载条
  // loading: {
  //   color: '#1f64d9',
  //   height: '10px',
  //   continuous: true  // 从0到100%循环显示加载条
  // },
  // loading: false,  // 禁用页面加载进度条（所有页面），可以在页面文件中设置针对单个页面不展示进度条

  loading: '~/components/LoadingBar.vue',  // 使用自定义loading组件

  router: {
    // base: '/app/',   // base属性配置后，页面链接增加base值的前缀
    /**
     * 禁止所有连接的prefetch，禁止单个链接prefetch可以在<NuxtLink>上添加no-prefetch属性或设置:prefetch="false"
     * 如果想开启单个连接的prefetch 可以在NuxtLink上添加prefetch属性(nuxt > v2.10.0)
     */
    // prefetchLinks: false,
    // linkActiveClass: 'custom-active-link',
    // linkExactActiveClass: 'custom-exact-active-link',
    linkPrefetchedClass: 'nuxt-link-prefetched',  // prefetch加载的链接设置样式，默认禁用
    // 扩展路由
    extendRoutes(routes, resolve){
      // routes.push({
      //   name: 'custom',
      //   path: '*',
      //   component: resolve(__dirname, 'pages/error.vue')
      // })
      sortRoutes(routes) // 路由排序，需要安装@nuxt/utils,并引入sortRoutes方法
    },
  },

  serverMiddleware: [
    '~/server/index.js',
    // '~/middleware/api/logger'
  ],
  /**
   * 官方不推荐使用，容易引发问题。可以尝试下面两种方法：
   * 可以在命令行启动时指定host和端口： HOST=0 PORT=8000 yarn dev
   * package.json的scripts中增加命令： "dev:host": "nuxt --hostnmae '0' --port 8000"
   */
  // server: {
  //   port: 8888,       // 默认3000端口
  //   host: '0.0.0.0'  // 默认localhost
  // }
}
