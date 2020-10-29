<template>
  <div class="container">
    <div>
      <!-- <client-only placeholder="client loading...">
        <Mountains></Mountains>
      </client-only> -->
      <Mountains v-if="ready"></Mountains>
      <!-- 手动调用$fetch -->
      <button @click="$fetch">Refresh</button>
      <div v-if="$nuxt.isOnline">You are Online</div>
      <a href="https://github.com/nuxt/nuxt.js">nuxt</a>
      <div class="links">
        <NuxtLink to="about">关于我们</NuxtLink>
        <Button type="primary" target="_blank" rel="noopener noreferrer" to="https://nuxtjs.org/">
          Documentation
        </Button>
        <Button target="_blank" rel="noopener noreferrer" to="https://github.com/nuxt/nuxt.js">
          GitHub
        </Button>
        <Button target="_blank" rel="noopener noreferrer" to="https://www.iviewui.com/">
          iView
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
// import Mountains from '~/components/mountains.vue'
export default {
  name: 'homepage',
  /**
   * nuxt提供transition组件可以在路由切换时创建过渡效果/动画
   * transition值可以是string/object/function，默认的transition name是'page'
   * 需在css中设置过渡效果样式
   * .home-enter-active, .home-leave-active { transition: opacity 5s; }.home-enter, .home-leave-active { opacity: 0; }
   * 
   * nuxt提供的默认transition名称是'page'，如果项对项目的每一个页面应用过渡效果，可以在全局css中设置css样式，nuxt.config.js中引入全局css：
   * css: [~/assets/main.css]
   *
   */
  // transition: 'home',  // String
  // transition: {
  //   name: 'home',
  //   mode: ''
  // },  // Object
  // transition (to, from) {
  //   if (!from) {
  //     return 'slide-left'
  //   }
  // },
  components: {
    // Mountains
    // Mountains: () => {
    //   import('~/components/mountains.vue')
    // }
  },
  data () {
    return {
      user: null,
      mountains: [],
      ready: false
    }
  },
  /**
   * fetch和asyncData是nuxt提供的两种异步数据加载的钩子函数
   * fetch 有this、可以在任何组件中使用，组件级别暴露$fetchState：
   * $fetchState.pending布尔值，在客户端渲染时可以显示占位符
   * $fetchState.error：null或fetch抛出的Error对象
   * $fetchState.timestamp：上一次fetch请求的时间戳
   * 
   * asyncData 没有this、只能在页面组件中使用，会阻塞路由导航，失败时可以通过context.error方法处理跳转layout/error页面
   * asyncData会将其return的数据与本地的vue组件的data对象进行合并
   */
  fetchOnServer: true,  // boolean/function，默认true服务端渲染，设置为false则只在客户端调用fetch
  fetchDelay: 200,     // integer默认200，单位毫秒，设置最短执行时间
  // fetch也可以手动调用，按钮的click事件绑定$fetch或this.$fetch()
  watch: {
    '$route.query': '$fetch'
  },
  async fetch () {
    // this.user = await fetch (
    //   'http://localhost:3000/api/user'
    // ).then((res) => {
    //   console.log('---res:', res.json());
    //   res.json()
    // });
    // console.log('-----fetch process.isClient:', process.client)
    console.log('-----call fetch process.server:', process.server)
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then((res) => { return res.json()})
  },
  // context对象可以在nuxt的这些函数中使用：asyncData, plugins, middleware, nuxtServerInit
  async asyncData (context) {
    console.log('-----asyncData process.isClient:', process.client)
    return {renderOn: process.client ? 'client' : 'server' }
  },
  beforeMount () {
  },
  // activated () {
  //   console.log('-----activated')
  // },
  mounted () {
    /**
     * $nuxt小助手（访问方式this.$nuxt或window.$nuxt）
     * isOffline/isOnline 网络连接状态（布尔值）
     * this.$nuxt.refresh() 页面数据局部刷新 （asyncData、fetch）
     * 控制页面加载条 this.$nuxt.$loading .start()/.finish()
     * fetch钩子函数中可以使用this.$nuxt.context访问context对象
     * window.onNuxtReady 函数
     */
    console.log('this.$nuxt:', this.$nuxt)
    /**
     * process小助手  nuxt在process全局对象中注入了三个boolean变量
     *  process.server  process.client
     */
    console.log('process.isClient:', process.client)
    console.log('---process:', process.server)
    // this.getUserInfo();
    /**
     * onNuxtReady函数：nuxt应用加载完毕且准备好时要执行的操作（客户端执行时无需再增加交互）
     */
    window.onNuxtReady (() => {
      console.log('Nuxt.js is ready and ounted')
      setTimeout(() => {
        this.ready = true;
      }, 500);
    })

    console.log('-----mounted')
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user',
        method: 'get'
      }).then((res) => {
        console.log('res:', res)
      }).catch((err) => {
        console.log('err:', err)
      });
    }
  }
}
</script>

<style>
/* 对应transition名称设置的过渡样式 */
.home-enter-active, .home-leave-active { transition: opacity 1s; }
.home-enter, .home-leave-active { opacity: 0; }

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
