<template>
    <div class="height_100 choose_us display_inline_block overflow_hidden">
        <div
            class="display_inline_block left_squre height_100 position_relative"
            style="width: 900px"
        >
            <!-- <img src="../../static/img/triangle.png" class="height_100" alt /> -->
            <div
                class="rotate_triangle height_100 width_100 display_flex position_absolute"
                style="bottom:0"
            >
                <div
                    class="height_100 flex_1 gray_back overflow_hidden display_flex flex_align_center"
                >
                    <h1
                        :style="{ transform: white_color_text_transform() }"
                        class="top_text_left font_size_50 font_weight_800 text_center width_100 orange"
                    >Why Choose Us?</h1>
                </div>
                <div
                    class="height_100 flex_1 blue_back overflow_hidden display_flex flex_align_center"
                >
                    <h1
                        :style="{ transform: orange_color_text_transform() }"
                        class="top_text_right font_size_50 font_weight_800 text_center width_100 white"
                    >Why Choose Us?</h1>
                </div>
            </div>
        </div>
        <div
            class="height_100 vertical_top overflow_hidden secret_box white display_inline_block"
            ref="fourth_path"
            :style="{ width: $store.state.innerWidth + 'px' }"
        >
            <div
                class="width_70 height_100 margin_auto flex_align_center flex_jusify_space display_flex"
            >
                <div class="width_30">
                    <h1
                        class="font_size_50 margin_bottom_15 fourth_page_h1 position_absolute transform_duration1 transilateX3"
                    >Why Choose Us?</h1>
                </div>
                <div class="position_relative font_size_8 width_60 line_height_27px">
                    <div class="display_flex flex_jusify_space">
                        <div class="width_100 transform_duration2 transilate-Y2">
                            <!-- <h1 class="margin_bottom_15">Digital Content</h1> -->
                            （1） Innovation and technology are the two major pillars of our
                            company. We rely on innovative products and professional technical
                            teams to bring development and transformation to the world. 
                            <br>
                            （2）Putting the demand of users first, we embrace the latest trend in
                            industry and keep abreast with the time. As a passionate company,
                            we always do everything we can to provide the best products to
                            users.
                            <!-- {{secret_page_scroll()}} -->
                        </div>
                    </div>
                    <div class="text_center transform_duration1 transilateY1 margin_top_10">
                        <img
                            src="../../static/img/secret.jpeg"
                            class="width_80 transiform_y_100px"
                            alt
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../../util/bus";
export default {
    props: {
        secretPageScroll: {
            type: Number
        },
        translatePersent: {
            type: Number
        }
    },
    data() {
        return {
            scroll: 0
        };
    },
    methods: {
        white_color_text_transform() {
            return (
                "skew(17deg) translateX(" +
                (50 + this.translatePersent / 2) +
                "%)"
            );
        },
        orange_color_text_transform() {
            return (
                "skew(17deg) translateX(" +
                (-50 + this.translatePersent / 2) +
                "%)"
            );
        },
        watchScroll() {
            bus.$on("scroll", v => {
                this.scroll = v;
            });
        }
        // secret_page_scroll() {
        //     return (this.scroll_left - this.$refs.secret.$el.offsetLeft)/this.$store.state.innerWidth
        // },
    },
    mounted() {
        this.watchScroll();
    }
};
</script>
<style lang="less">
@import "../../assets/css/current_theme";
.choose_us {
    background: @app_gray;
    .blue_back {
        background: @blue;
    }
    .top_text_left {
        transform-origin: right top;
        transform: rotate(-17deg) translateX(50%);
    }
    .top_text_right {
        transform-origin: left top;
        transform: rotate(-17deg) translateX(-50%);
    }
    .top_text_right {
    }
    .rotate_triangle {
        transform-origin: center top;
        // transform: translateX(50%) rotateZ(17deg);
        transform: translateX(50%) skew(-17deg);
    }
    .orange {
        color: @orange;
    }
    .blue_back {
        background: @blue;
    }
    .secret_box {
        background: @blue;
        .fourth_page_h1 {
            background-color: #77787c;
            background: url("../../static/img/mountains.jpeg") no-repeat;
            background-size: 900px auto;
            font-size: 68px;
            -webkit-background-clip: text;
            background-position: 20% center;
            -webkit-text-fill-color: transparent;
            will-change: background-position;
            // color: #77787c;
        }
    }
}
</style>
