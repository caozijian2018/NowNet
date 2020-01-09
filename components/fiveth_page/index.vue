<template>
    <div
        class="height_100 white overflow_hidden fiveth_box display_inline_block"
        ref="fourth_path"
        :style="{
      width: $store.state.innerWidth + 'px',
      height: $store.state.is_pc ? 'height' : 'auto'
    }"
    >
        <div class="display_flex flex_align_center height_100">
            <div
                class="width_70 white phone_width_90 height_40 margin_auto flex_jusify_space display_flex phone_block phone_margin_top_20px"
            >
                <div class="width_45 phone_width_100 display_flex height_100 flex_jusify_space flex_column phone_margin">
                    <div class="display_flex flex_jusify_space transform_duration1 transilateX2">
                        <img src="../../static/img/newimg/3.jpg" class="width_45" alt />
                        <img src="../../static/img/newimg/4.jpg" class="width_45" alt />
                    </div>
                    <div class="phone_margin_top_20px margin_top_50px">
                        <h1 class="font_size_30 margin_bottom_15 transform_duration1 transilate-Y2">Exclusive content</h1>
                        <div class=" font_size_8 line_height_25px transform_duration1 transilateY2">
                            With our professional content team, we are able to provide premium
                            subscription services to global mobile users. We have exclusive and
                            attractive content and it is of various kinds, catering to the need
                            of all kinds of users.
                        </div>
                    </div>
                </div>
                <div class="width_45  phone_width_100 phone_margin_top_20px display_flex height_100 height_100 flex_column flex_jusify_space">
                    <div>
                        <h1 class="font_weight_800 margin_bottom_15 font_size_30 transform_duration1 transilateX3">Our partners</h1>
                        <div class="line_height_25px font_size_8 transform_duration1 transilateY2">
                            We work with the best of the best. We guarantee the exceptional quality of our services. 
                        </div>
                    </div>
                    <div class="phone_flex_1 margin_top_20 display_flex flex_jusify_space wrop text_center ">
                        <img
                            src="../../static/img/newimg/logo1.png"
                            class="width_40 transform_duration1 transilateX1"
                            alt
                        />
                        <img
                            src="../../static/img/newimg/logo2.png"
                            class="width_40 transform_duration1 transilateX2"
                            alt
                        />
                        <div class="">
                        </div>
                        <img
                            src="../../static/img/newimg/logo3.png"
                            class="width_40 transform_duration1 transilateX3"
                            alt
                        />
                        <img
                            src="../../static/img/newimg/logo4.png"
                            class="width_40 transform_duration1 transilateX4"
                            alt
                        />
                    </div>
                </div>

                <!-- <div class="width_30 phone_width_100 phone_margin">
                <h1 class="font_size_50 margin_bottom_15 fourth_page_h1">Digital Content</h1>
            </div>
            <div
                class="position_relative font_size_8 width_60 phone_width_90 phone_margin line_height_27px"
            >
                <div class="display_flex flex_jusify_space">
                    <div class="width_100">
                        <div class="transform_duration2 transilateY2 phone_transilate_X1">
                            With our high-quality content team, we are able to provide premium
                            subscription services to global mobile users. We have exclusive
                            and attractive content and it is of various kinds, catering to the
                            need of all kinds of users. Our services in total have brought
                            pleasure to over 80,000 users.
                        </div>
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 margin_top_10">
                    <img src="../../static/img/tree.jpg" class="width_80 transiform_y_100px" alt />
                </div>
                </div>-->
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
.fiveth_box {
    .width_100px {
        width: 150px;
    }
    background: @blue;
    .fourth_page_h1 {
        background-color: #77787c;
        background: url("../../static/img/mountains.jpeg") no-repeat;
        background-size: 900px auto;
        font-size: 40px;
        // line-height: 72px;
        -webkit-background-clip: text;
        background-position: 20% center;
        -webkit-text-fill-color: transparent;
        will-change: background-position;
        // color: #77787c;
    }
}
</style>
