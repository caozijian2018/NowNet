<template>
    <div
        class="height_100 white overflow_hidden fiveth_box display_inline_block"
        ref="fourth_path"
        :style="{width: $store.state.innerWidth + 'px', height: $store.state.is_pc ? 'height':'auto'}"
    >
        <div
            class="width_70 phone_width_90 height_100 margin_auto flex_align_center flex_jusify_space display_flex phone_block" 
        >
            <div class="width_30 phone_width_100 phone_margin">
                <h1 class="font_size_50 margin_bottom_15 fourth_page_h1">Our Products</h1>
            </div>
            <div class="position_relative font_size_8 width_60 phone_width_90 phone_margin line_height_27px">
                <div class="display_flex flex_jusify_space">
                    <div
                        class="width_100"
                    >
                        <h1 class="margin_bottom_15 transform_duration1 transilateX2 phone_transilateX2">
                            Digital Content
                        </h1>
                        <div class="transform_duration2 transilateY2 phone_transilate_X1">
                            With our high-quality content team, we are able to provide
                            premium subscription services to global mobile users. We have exclusive and 
                            attractive content and it is of various kinds, catering to the need of all kinds of users. 
                            Users can enjoy our hilarious videos, fitness videos, cooking videos, adult videos, music and games after they 
                            subscribe our services. Our services in total have brought pleasure and happiness to over 80,000 users in the world.
                        </div>
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 margin_top_10">
                    <img src="../../static/img/tree.jpg" class="width_80 transiform_y_100px" alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{

    }
};
</script>
<style lang='less'>
@import "../../assets/css/current_theme";
.fiveth_box{
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