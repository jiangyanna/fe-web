<template>
  <div class="page-post">
    子页面动态路由
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '动态路由'
    }
  },
  head () {
    return {
      title: this.title,  // head函数可以访问data/computed的数据
      meta: [
        {
          hid: 'description',  // 为避免重复设置，可以为meta添加唯一标识符hid
          name: 'description',
          content: 'Dynamic route page'
        }
      ]
    }
  },
  // async asyncData (context) {
  //   const id = context.params.id;
  //   try {
  //     // 使用$http模块需要安装@nuxt/http依赖包，且在nuxt.config.js的modules中增加配置'@nuxt/http'
  //     const post = await context.app.$http.$get(`https://api.nuxtjs.dev/posts/${id}`)
  //     return { post };
  //   } catch (err) {
  //     context.error(err);
  //   }
  // },
  // 结构context对象
  async asyncData ({params, $http, error}) {
    const id = params.id;
    try {
      // 使用$http模块需要安装@nuxt/http依赖包，且在nuxt.config.js的modules中增加配置'@nuxt/http'
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
      // const post = await $http.$get(`/api/user`)
      return { post };
    } catch (err) {
      // 自动跳转到layouts/error页面，可以直接传参err，也可以按照对象传参，设置不同的错误提示
      // error(err);
      error({message: err.message + '请稍后重试', statusCode: err.response.status})
    }
  },
  components: {

  },
  computed: {

  },
  mounted () {
    console.log('page params:', this.$route.query)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
