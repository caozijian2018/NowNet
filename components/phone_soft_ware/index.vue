<template>
    <div
        class="height_100 phone_soft_box display_inline_block overflow_hidden"
        :style="{ height: $store.state.is_pc ? 'height_100' : 'auto' }"
    >
        <!-- <div
            class="display_inline_block left_squre height_100 position_relative phone_none"
            style="width: 900px"
        >
            <div
                class="rotate_triangle height_100 width_100 display_flex position_absolute"
                style="bottom:0"
            >
                <div
                    class="height_100 flex_1 blue_back overflow_hidden display_flex flex_align_center"
                >
                    <h1
                        :style="{ transform: white_color_text_transform() }"
                        class="top_text_left font_size_40 font_weight_800 text_center width_100 white"
                    >Why Choose Us?</h1>
                </div>
                <div
                    class="height_100 flex_1 back_white overflow_hidden display_flex flex_align_center"
                >
                    <h1
                        :style="{ transform: orange_color_text_transform() }"
                        class="top_text_right font_size_40 font_weight_800 text_center width_100 orange"
                    >Why Choose Us?</h1>
                </div>
            </div>
        </div> -->
        <div
            class="height_100 overflow_hidden secret_box white display_inline_block"
            ref="fourth_path"
            :style="{ width: $store.state.innerWidth + 'px' }"
        >
            <div
                class="width_70 phone_width_90 height_100 margin_auto flex_align_center flex_center display_flex phone_block"
            >
                <div class="display_flex  z_index100 flex_jusify_space gray_1">
                        <div class="width_100 text_center transform_duration2 font_size_20 line_height_27px transilate-Y2">
                            We have innovative products and professional technical teams to <br>
                            bring development and transformation to the world. Putting the<br>
                            demand of users first, we embrace the latest trend in industry and<br>
                            keep abreast with the time.
                            <div class="margin_top_50px">
                                <h3 class="margin_bottom_2">
                                    Contact Us
                                </h3>
                                <div class="display_flex phone_block flex_jusify_space width_70 margin_auto">
                                    <div class="text_center width_30 phone_width_90">
                                        <img src="../../static/img/location.png" style="width: 50px" alt="">
                                        <div>
                                            No.8, 11th Floor, Wang Fai Industrial Building, 29,
                                            Luk Hop Street, San Po Kong, Kowloon, Hong Kong
                                        </div>
                                    </div>
                                    <div class="text_center width_30 phone_width_90">
                                        <img src="../../static/img/xinjian.png" style="width: 50px" alt="">
                                        <div>
                                            customer@nownetmobi.com
                                        </div>
                                    </div>
                                    <!-- <div class="text_center width_30">
                                        <img src="../../static/img/dianhua.png" style="width: 50px" alt="">
                                        <div>
                                            customer@nownetmobi.com
                                        </div>
                                    </div> -->
                                </div>
                            </div>
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
            scroll: 0,
            arr: [
                {
                    title: "Data Recovery App",
                    desc: "With our data recovery app, users can recover their lost data with simple clicks. What they need to do is to select the type and location of your data, after auto-scanning, and they can find their lost data recovered. ",
                    img_src: require("../../static/img/3.png")
                },
                {
                    title: "Data Transfer App",
                    desc: "With our data transfer app, users can transfer their mobile data freely and seamlessly between IOS and Android devices. Data transfer and date backup are realized simply without any difficulty. ",
                    img_src: require("../../static/img/1.png")
                },
                {
                    title: "Phone Managing App",
                    desc: "With our phone managing app, users can manage their phone memory and keep their phones clean, fast, safe. Safe and private phones are guaranteed for a higher efficiency, and it enjoys high reputation in the industry.",
                    img_src: require("../../static/img/4.png")
                },
                {
                    title: "Antivirus App",
                    desc: "With our antivirus app, high-risk applications in users’ phones can be detected easily from the perspective of Trojan viruses, extremely high power-consumption, extremely high traffic-consumption, malicious advertising, etc.",
                    img_src: require("../../static/img/2.png")
                }

            ],
        };
    },
    methods: {
        white_color_text_transform() {
            return (
                "skew(24deg) translateX(" +
                (50 + this.translatePersent / 2) +
                "%)"
            );
        },
        orange_color_text_transform() {
            return (
                "skew(24deg) translateX(" +
                (this.translatePersent / 2 - 50) +
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
.phone_soft_box {
    @media screen and (min-width: 1200px){
        .pc_transform{
            transform: translateX(-500px);
        }
    }
    .box_soft_desc{
        padding: 20px;
        border: 1px solid #999999;
        color: #666666;
        &:hover{
            background: #fff;
        }
    }
    .left_squre {
        background:white;
        // z-index: 10000;
    }
    .top_text_left {
        transform-origin: right top;
        transform: rotate(-24deg) translateX(50%);
    }
    .top_text_right {
        transform-origin: left top;
        transform: rotate(-24deg) translateX(-50%);
    }
    .top_text_right {
    }
    .rotate_triangle {
        transform-origin: center bottom;
        transform: translateX(-50%) skew(-24deg);
    }
    .orange {
        color: @orange;
    }
    .blue_back {
        background: @blue;
    }
    .gray_back {
        background: @app_gray;
    }
    .secret_box {
        background: #fff;
        .fourth_page_h1 {
            background-color: #77787c;
            background: url("../../static/img/mountains.jpeg") no-repeat;
            background-size: 900px auto;
            font-size: 40px;
            -webkit-background-clip: text;
            background-position: 20% center;
            -webkit-text-fill-color: transparent;
            will-change: background-position;
            // color: #77787c;
        }
    }
}
</style>
