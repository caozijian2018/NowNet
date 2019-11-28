<template>
    <div class="container">
        <nuxt />
    </div>
</template>

<script>
import Vue from "vue";
// import "../util/glo_request";
// import "../util/filter";
// import "../util/msg";
import "../util/es62es5";
// import scrollFun from "../util/watch_scroll";
import jquery from "jquery";
Vue.prototype.$jquery = jquery;
export default {
    mounted(){
        window.onresize=function(){
            history.go(0)
        }
    },
};
</script>

<style lang="less">
@import "../assets/css/iconfont/iconfont.css";
// @import "http://at.alicdn.com/t/font_843189_zrgmiohmyin.css";
@import "../assets/css/current_theme";
@import "../assets/css/current_app";
body{
    overflow: hidden;
}
.container {
    width: 100%;
}
</style>

