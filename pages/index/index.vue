<template>
    <div class="container display_flex flex_column" :style="{height:height_}">
        <!-- <video-head @showLogin="showLogin" class :class="{height0:is_scroll_bottom}"></video-head> -->
        <div
            v-loading.fullscreen.lock="fullscreenLoading"
            class="flex_1 overflow_scroll scroll_box"
            style
        >
            <!-- <login-box v-if="show_login" @close="show_login=false"></login-box> -->
            <nuxt-child :is-scroll-bottom="is_scroll_bottom"></nuxt-child>
        </div>
    </div>
</template>

<script>
import isScrollBottom from "../../util/is_scroll_bottom";
import bus from "../../util/bus";
import isPc from "../../util/get_pc_or_phone";


export default {
    components: {
    },
    data() {
        return {
            prev_scroll: 0,
            height_: "",
            show_login: false,
            is_scroll_bottom: false,
            fullscreenLoading: false
        };
    },
    mounted() {
        this.setHeightAndISPc();
        this.watchOnresize();
    },
    methods: {
         pc_phone() {
            this.$store.state.is_pc = isPc();
        },
        watchOnresize() {
            window.onresize = this.setHeightAndISPc;
        },
        setHeightAndISPc() {
            this.height_ = innerHeight + "px";
            this.$store.state.innerHeight = this.height_;
            this.pc_phone();

        }
    }
};
</script>

<style lang='less'>
</style>