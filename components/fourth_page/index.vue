<template>
    <div
        class="height_100 overflow_hidden phone_margin_top_60px fourth_page display_inline_block"
        ref="fourth_path"
        :style="{
      width: $store.state.innerWidth + 'px',
      height: $store.state.is_pc ? 'height' : 'auto'
    }"
    >
        <div
            class="width_90 height_100 phone_width_90 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
        >
            <div class="flex_1">
                <h1 class="page_h1 transform_duration1 transilateX2">Introduction</h1>
                <div
                    class="transform_duration1 transilateX3 font_size_8 gray_1 transform_duration1 phone transilate-Y2 phone_transilateX2"
                >
                    Nownetmobi is an Internet-based technology-driven
                    innovative company. We know the Internet users well, and users’ demand
                    is our first priority.
                </div>
            </div>
            <div class="flex_1 phone_flex phone_margin_top_20px transform_duration1 transilateX2">
                <div class="phone_flex_1">
                    <img
                        src="../../static/img/prod.png"
                        class="vertical_middle"
                        style="width:25px;"
                        alt
                    />
                    COUNTRIES
                    <div class="orange font_size_60 font_weight_800 phone_font_size_30px">50+</div>
                </div>
                <div class="margin_top_72px phone_flex_1 phone_margin_top_0">
                    <img
                        src="../../static/img/use.png"
                        class="vertical_middle"
                        style="width:25px;"
                        alt
                    />
                    USERS
                    <div class="orange font_size_60 font_weight_800 phone_font_size_30px">200,000+</div>
                </div>
            </div>
            <div class="flex_2 transform_duration1 transilateY1">
                <img src="../../static/img/newimg/2.jpg" class="width_100" alt />
            </div>
            <!-- <div class="width_30 phone_width_90 phone_margin">
                <h1
                    class="font_size_50 margin_bottom_15 fourth_page_h1 transform_duration1 transilateY2 phone_transilateX2"
                >Company Introduction</h1>
            </div>
            <div
                class="position_relative font_size_8 gray_1 width_60 phone_width_90 phone_margin line_height_27px"
            >
                <div class="display_flex flex_jusify_space">
                    <div class="width_100 transform_duration1 transilate-Y2 phone_transilate_X2">
                        Nownetmobi is an Internet-based technology-driven innovative
                        company. We know the Internet users well, and users’ demand is our
                        first priority. Nownetmobi emphasizes the importance of technology.
                        With technology, we are able to provide superb applications and
                        content to netizens wordwide.
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 phone_transilateX1">
                    <img src="../../static/img/tree.jpg" class="width_80 transiform_y_100px" alt />
                </div>
            </div>-->
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
.fourth_page {
    .orange {
        color: @orange;
    }
    .page_h1 {
        background-color: #77787c;
        background: url("../../static/img/ice.jpeg") no-repeat;
        background-size: 900px auto;
        font-size: 42px;
        // line-height: 72px;
        -webkit-background-clip: text;
        background-position: 40% center;
        -webkit-text-fill-color: transparent;
        will-change: background-position;
        // color: #77787c;
    }
}
</style>
