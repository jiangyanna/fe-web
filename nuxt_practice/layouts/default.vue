<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1">导航</Menu-item>
        <Menu-item name="2">导航</Menu-item>
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <i-col span="5">
          <Menu name="1-2" active-key="1-2" width="auto" :open-keys="['1']">
            <Submenu name="1">
              <template slot="title">
                导航一
              </template>
              <Menu-item name="1-1">
                <!-- 通过nuxtlink渲染的页面都是客户端渲染的 process.client为true
                  NuxtLink添加no-prefetch属性或设置:prefetch="false" 禁止某个链接的资源预加载-->
                <NuxtLink to="/">Home page</NuxtLink>
              </Menu-item>
              <Menu-item name="1-2">
                <NuxtLink to="/about">About</NuxtLink>
              </Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                导航二
              </template>
              <Menu-item name="2-1">
                <nuxt-link to="/error">error</nuxt-link>
              </Menu-item>
              <Menu-item name="2-2">
                <NuxtLink to="/posts">posts</NuxtLink>
              </Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                导航三
              </template>
              <Menu-item name="3-1">
                <NuxtLink to="/assets">Assets</NuxtLink>
              </Menu-item>
              <Menu-item name="3-2">选项二</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <Nuxt/>
        </i-col>
      </Row>
    </div>
    <!-- <Nuxt /> -->
  </div>
</template>

<style>
/* 当前激活的链接设置样式 类名：nuxt-link-active 设置激活链接名字样式，如果激活的是/about 则首页和about都会显示激活样式
   也可以在nuxt.config.js中修改激活链接的默认类名： router: { linkActiveClass: 'my-customer-active-link'}
   精确匹配激活链接设置样式 nuxt-link-exact-active 如果激活的是/about 则只有about会显示激活样式  类名 对应nuxt.config.js的属性名为linkExactActiveClass
   prefetch加载的链接设置样式(可直观查看哪些链接是prefetch加载的) linkPrefetchedClass默认是禁用状态，须在配置文件nuxt.config.js中设置类名开启
 */

/* .nuxt-link-active {
  font-weight: bold;
  color: red;
} */
.nuxt-link-prefetched{
  color: orangered;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  margin: 0px auto;
  width: 420px;
}
.layout-content {
  margin: 15px;
  min-height: 200px;
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
}
</style>
