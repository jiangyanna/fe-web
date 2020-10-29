<template>
  <div class="btn">{{text}}</div>
</template>

<script>
// 嵌套目录组件
export default {
  props: {
    text: String
  },
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
.btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid blue;
}
</style>
