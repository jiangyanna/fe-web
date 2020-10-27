<template>
  <div class="page-posts">
    <h1>嵌套路由---父页面</h1>
    <!-- 父页面需要有nuxt-child组件，否则子页面不显示 -->
    <!-- nuxt-child 显示子页面，与其并列的其他内容展示需要有html标签包裹，否则会报错 -->
    <img class="img-err" src="~/assets/images/nuxtchild-err.png"/>
    <!-- 
      <nuxt/> <nuxt-child/>组件都可以使用keep-alive指令缓存fetch请求的页面,
      keep-alive指令渲染的页面会有activated/deactivated钩子函数
     -->
    <nuxt-child keep-alive/>
  </div>
</template>

<script>
export default {
  // loading: false,
  data () {
    return {
    }
  },
  head: {
    title: 'Post Page',  // 设置当前页面的标题
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Post Page description'
      }
    ]
  },
  components: {

  },
  computed: {

  },

  mounted () {
    /**
     * 手动调用进度条，mounting阶段loading组件可能无法访问，需要在nextTick中使用
     * 手动调用时，即使当前页面和nuxt.config.js中都配置了loading:false，仍然有默认loading进度条加载
     *  */ 
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 2000);
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
// 使用sass需要安装node-sass和sass-loader yarn add node-sass sass-loader
.page-posts {
  .img-err {
    width: 720px;
  }
}
</style>
