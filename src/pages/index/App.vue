<template>
    <!-- template 里的dom必须由一个标签包起来 -->
    <div class="app">
        <img class="logo" src="@/assets/images/logo.png">
        <Header></Header>
        <a href="/page2" class="center">查看单页</a>
        <div class="center mt50">
            <router-link to="/router1">Go to router1</router-link>
            <router-link to="/router2">Go to router2</router-link>
            <router-link to="/">Go to index</router-link>
        </div>
        <div class="content-font">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
export default {
  name: 'App',
  data: function() {
      return {
          msg: 'Hello! This is Index page!!'
      }
  },
  components: {
      Header,
      Footer
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#333;
  margin-top: 60px;
}
.content-font {
    font-size: 40px;
}
.mt50 {
    margin-top: 50px;
}
.logo {
    width: 100px;
}
</style>
