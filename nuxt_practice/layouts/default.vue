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
              <Menu-item name="2-2">选项二</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                导航三
              </template>
              <Menu-item name="3-1">选项一</Menu-item>
              <Menu-item name="3-2">选项二</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <Nuxt />
        </i-col>
      </Row>
    </div>
    <!-- <Nuxt /> -->
  </div>
</template>

<style>
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
