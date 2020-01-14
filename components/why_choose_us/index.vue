<template>
    <div
        class="height_100 choose_us display_inline_block overflow_hidden"
        :style="{ height: $store.state.is_pc ? 'height_100' : 'auto' }"
    >
        <div
            class="display_inline_block left_squre height_100 position_relative phone_none"
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
                    >Phone Software </h1>
                </div>
                <div
                    class="height_100 flex_1 blue_back overflow_hidden display_flex flex_align_center"
                >
                    <h1
                        :style="{ transform: orange_color_text_transform() }"
                        class="top_text_right font_size_50 font_weight_800 text_center width_100 white"
                    >Phone Software</h1>
                </div>
            </div>
        </div>
        <div
            class="height_100 vertical_top overflow_hidden secret_box white display_inline_block"
            ref="fourth_path"
            :style="{ width: $store.state.innerWidth + 'px' }"
        >
            <div
                class="width_70 phone_width_90 height_100 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
            >
                <!-- <div class="width_30 phone_width_90 phone_margin">
                    <h1
                        class="phone_block font_size_50 margin_bottom_15 fourth_page_h1 transform_duration1 transilateY3"
                    >Phone Software</h1>
                    <div class="font_size_8 line_height_25px gray_1">
                        We have a tech team that is devoted to mobile phone applications.
                        Our target is to make our applications available and useful for all
                        netizens.
                    </div>
                </div> -->
                <div class="width_30 phone_width_90 phone_margin">
                    &nbsp;
                </div>
                <div
                    class="position_relative font_size_8 width_65 phone_width_90 phone_margin wrop display_flex flex_jusify_space phone_block line_height_27px"
                >

                    <div class="box_soft_desc width_48 box_szing phone_width_100 margin_top_20" v-for="(item) in arr"   :key="item.title">
                        <div class="green margin_bottom_15">
                            <img :src="item.img_src" class="vertical_middle" style="width:30px;" alt="">
                            <span class="font_size_20">
                                {{item.title}}
                            </span>
                        </div>
                        <div style="font-size: 14px">
                            {{item.desc}} 
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div
                class="width_70 phone_width_90 height_100 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
            >
                <div class="width_30 phone_width_90 phone_margin">
                    <h1
                        class="display_none phone_block font_size_50 margin_bottom_15 fourth_page_h1 margin_top_20 transform_duration1 transilateX3"
                    >Phone Software</h1>
                </div>
                <div
                    class="position_relative font_size_8 width_60 phone_width_90 phone_margin line_height_27px"
                >
                    <div class="display_flex flex_jusify_space">
                        <div class="width_100 transform_duration2 transilate-Y2">
                            We have innovative products and professional technical teams to <br>
                            bring development and transformation to the world. Putting the<br>
                            demand of users first, we embrace the latest trend in industry and<br>
                            keep abreast with the time.

                            <div class="margin_top_20">
                                <h3 class="margin_bottom_2">
                                    Contact Us
                                </h3>
                                <div>
                                    No.8, 11th Floor, Wang Fai Industrial Building, 29,<br> 
                                    Luk Hop Street, San Po Kong, Kowloon, Hong Kong<br>
                                    <a href="" style="color: skyblue">E-Mail: customer@nownetmobi.com</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
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
