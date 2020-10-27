<template>
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  components: {

  },
  computed: {

  },
  mounted () {

  },
  methods: {
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  color: #fff;
}
</style>
