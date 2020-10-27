<template>
  <div class="container">
    嵌套路由子页面
    <h3 v-if="$fetchState.pending">fetch data pending ...</h3>
    <h3 v-else>fetch data finished</h3>
    <h3 v-if="$fetchState.error">fetch error</h3>
    <button @click="$fetch">fetch data</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [{name: 'ddd'}]
    }
  },
  components: {

  },
  computed: {

  },
  // fetch有this可以访问组件实例
  async fetch () {
    console.log('fetch:')
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) => {
      return res.json();
    });
  },
  // asyncData没有this无法访问组件实例,以context作为参数，会将其return数据与data的数据合并，data的同名变量会被覆盖
  // asyncData, plugins, middleware, nuxtServerInit 可以访问context对象的函数(context对象是函数的入参)
  async asyncData ({params, $http}) {
    // const posts = await $http.$get('https://api.nuxtjs.dev/posts')
    // return { posts }
    console.log('asyncData:')
  },
  activated () {
    // 没有生效
    // if (this.$fetchState.timestamp <= Date.now() - 3000) {
    //   this.$fetch();
    // }
  },
  mounted () {
    console.log('-----mounted:', this.posts);
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
