<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page Not found</h1>
    <h1 v-else>An error occurred</h1>
    <h2>{{error.message}}</h2>
    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  data () {
    return {

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
