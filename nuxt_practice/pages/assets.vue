<template>
  <div class="assets">
    <!-- 
      nuxt.config.js中引入assets目录下资源： css: ['~/assets/css/main.css']。引入scss文件需要安装node-sass和sass-loader
      vue文件中引入assets目录下的资源： ~/assets/
      css中（无论是assets目录下的css文件还是vue文件的css）引入assets目录下的资源(少了一层斜杠/)：~assets 
    -->
    <img src="~/assets/images/nuxtchild-err.png"/>
    <!-- 使用require动态引入图片 -->
    <img class="asset" :src="require(`~/assets/images/${imgname}`)"/>
    <div class="img"></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgname: 'nuxtchild-err.png'
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
.assets {
  .img {
    height: 40px;
    background: url('~assets/images/nuxtchild-err.png');
    background-size: cover;
  }
}
</style>
