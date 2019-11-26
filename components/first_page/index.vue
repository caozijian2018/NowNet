<template>
    <div
        class="height_100 overflow_hidden first_page display_inline_block"
        :style="{width: $store.state.innerWidth + 'px'}"
    >
        <div
            class="width_70 height_100 margin_auto flex_align_center flex_jusify_space display_flex"
        >
            <div class="width_30">
                <h1 class="font_size_50 margin_bottom_15 transition4 transilateY1">Now Netmobi</h1>
                <div class="font_size_8 gray_1 line_height_27px transition4 transilateY2">
                    We produce impressive
                    online products for users
                    to use, explore, and love.
                </div>
            </div>
            <div class="width_50 right_logo_box position_relative overflow_hidden">
                <img
                    src="../../static/img/back2.jpg"
                    style="border-radius:200px"
                    class="height_100 full_div"
                    alt
                />
                <div :style="{transform: transfromStyle}" class="width_100">
                    <img
                        src="../../static/img/logo_left.png"
                        class="width_100 vertical_middle"
                        style="border: 0"
                        alt
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        transfromStyle:{

        }
    }
};
</script>
<style lang='less'>
</style>