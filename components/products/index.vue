<template>
    <div
        class="height_100 overflow_hidden products display_inline_block"
        ref="fourth_path"
        :style="{ width: $store.state.innerWidth + 'px' }"
    >
        <div
            class="width_70 height_100 margin_auto flex_align_center flex_jusify_space display_flex"
        >
            <div class="width_30">
                <h1 class="font_size_50 margin_bottom_15 fourth_page_h1">Ketchupbox</h1>
            </div>
            <div class="position_relative font_size_8 width_60 line_height_27px">
                <div class="display_flex flex_jusify_space">
                    <div class="width_100 transform_duration1 gray_1 transilate-Y2">
                        <!-- <h1 class="margin_bottom_15">Digital Content</h1> -->
                        Ketchupbox is a premium subscription service. The service consists
                        of multiple categories of funny content, including funny videos,
                        funny pictures, wallpapers and ringtones. Our service has brought
                        happiness to over 20,000 users globally.
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 margin_top_10">
                    <img src="../../static/img/funny.jpeg" class="width_80 transiform_y_100px" alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {}
};
</script>
<style lang="less">
@import "../../assets/css/current_theme";
.products {
    background: #ffffff;
    .fourth_page_h1 {
        background-color: #77787c;
        background: url("../../static/img/mountains.jpeg") no-repeat;
        background-size: 900px auto;
        font-size: 68px;
        // line-height: 72px;
        -webkit-background-clip: text;
        background-position: 20% center;
        -webkit-text-fill-color: transparent;
        will-change: background-position;
        // color: #77787c;
    }
}
</style>
