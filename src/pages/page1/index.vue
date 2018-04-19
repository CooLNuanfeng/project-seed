<template>
    <div class="center">
        <img class="logo" src="@/assets/images/logo.png">
        <img src="./images/cat.jpg" alt="">
        <p class="signal-html mt100">这是一个单页Html页面</p>
        <a href="../">返回首页</a>
    </div>
</template>

<script>
export default {
  name: 'SignalHtml'
}
</script>

<style scoped>
    .signal-html {
        text-align: center;
        color: royalblue;
    }
    .logo {
        margin: 20px auto;
        display: block;
        width: 100px;
    }   
</style>

