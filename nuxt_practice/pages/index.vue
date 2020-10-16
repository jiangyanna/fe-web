<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="title">
        nuxt_practice
      </h2>
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
import Logo from '~/components/Logo.vue'
export default {
  name: 'homepage',
  components: {
    Logo
  },
  data () {
    return {
      user: null
    }
  },
  async fetch () {
    // this.user = await fetch (
    //   'http://localhost:3000/api/user'
    // ).then((res) => {
    //   console.log('---res:', res.json());
    //   res.json()
    // });
  },
  mounted () {
    // console.log('this.user:', this.user);
    console.log('process.isClient:', process.client)
    this.getUserInfo();
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/api/user',
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
  font-size: 100px;
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
