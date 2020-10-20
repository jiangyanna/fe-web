<template>
  <div class="page-post">
    动态路由
  </div>
</template>

<script>
export default {
  data () {
    return {

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
      return { post };
    } catch (err) {
      error(err);
    }
  },
  components: {

  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
