<template>
  <div class="client">
    <div v-if="$fetchState.pending">组件mountains fetch 加载数据...</div>
    <div v-else-if="$fetchState.error">fetch加载数据出错</div>
    <div v-else>
      <p>组件mountains fetch 数据加载完毕</p>
      <div class="mountains">
        <div class="mountain" v-for="item in list" :key="item.title">
          <h3>{{item.title}}</h3>
          <img class="img" :src="item.image"/>
        </div>
      </div>
    </div>
    <BaseCustomButton text="自定义按钮"></BaseCustomButton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  components: {

  },
  computed: {

  },
  async fetch () {
    this.list = await fetch ('https://api.nuxtjs.dev/mountains').then((res) => {
      return res.json();
    });
    this.list = this.list.slice(0, 3);
  },
  mounted () {
    if (process.client) {
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.client {
  .mountains {
    display: flex;
    flex-wrap: wrap;
    .mountain {
      margin: 10px;
      .img {
        width: 100px;
      }
    }
  }
}
</style>
