<template>
    <!-- template 里的dom必须由一个标签包起来 -->
    <div class="app">
        <Header></Header>
        <a href="/page2" class="center">查看单页</a>
        <div class="center">
            <router-link to="/router1">Go to router1</router-link>
            <router-link to="/router2">Go to router2</router-link>
            <router-link to="/">Go to index</router-link>
        </div>
        <router-view/>
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
  color: darkred;
  margin-top: 60px;
}
</style>
