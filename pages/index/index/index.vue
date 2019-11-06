<template>
    <div
        class="home_page height_100 overflow_scroll"
        :class="{'next_back': show_second_back}"
        @scroll="scroll"
    >
        <div
            class="first_page border_top_0 position_relative"
            :style="{'height':$store.state.innerHeight}"
        >
            <div class="width_80_pc margin_auto margin_top_3 display_flex flex_jusify_space">
                <img src="../../../static/img/lg.png" class="logoimg" alt />
                <!-- <div class="white">
                    <div class="font_weight_200 font_size_15">Have Question? Get Answers</div>
                    <span class="font_weight_600 font_size_30">+852 2529 0318</span>
                </div> -->
            </div>
            <div class="position_absolute pcs width_80_pc">
                <div
                    class="white font_weight_800 welcome text_center font_size_40"
                >Welcome to Mobile Network Technlolgy Co., Limited</div>
                <div class="text_center margin_top_4">
                    <!-- <div
                        class="margin_auto display_inline_block margin_top_10 nownet_button"
                    >Learn More</div> -->
                </div>
            </div>
        </div>
        <div
            class="second_page border_top_0 back_white"
            :style="{'height':$store.state.is_pc ? $store.state.innerHeight : '' }"
        >
            <div class="text_center margin_top_4">
                <div class="gray font_size_21">What We Do?</div>
                <div class="gray font_size_36 margin_top_20">FunnyU</div>
            </div>
            <div class="width_80_pc margin_auto">
                <div class="display_flex wrop margin_top_4 fours">
                    <div
                        class="introduce_div width_45 display_flex margin_bottom_2"
                        :class="{margin_left_5p: $store.state.is_pc && index%2==1}"
                        v-for="(item, index) in introarr"
                        :key="item.name"
                    >
                        <img :src="item.img" class="pc_show" style="width:60px;height:60px;" alt />
                        <div class="padding_left_1">
                            <h2 class="margin_bottom_15">{{item.name}}</h2>
                            <div class="gray line_height_25px">
                                {{item.txt}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text_center margin_top_4" style="border-bottom: 1px solid transparent">
                <div class="font_size_21 font_phone_40">How We Work</div>
                <div
                    class="margin_bottom_2 font_size_36 font_phone  font_weight_800 gray"
                >Based in Hong Kong, to serve global customers</div>
            </div>
        </div>
        <div class="third_page display_flex padding_top_20 padding_bottom_20" :style="{'height': $store.state.is_pc? '200px': ''}" ref="four_item">
            <div class="white width_80_pc margin_auto display_flex flex_jusify_space media_flex_row_800">
                <div v-for="item in num_arr" class="text_center" :key="item.num">
                    <div class="font_weight_800 font_size_40" :class="{margin_bottom_4: $store.state.is_pc,margin_bottom_1: !$store.state.is_pc }">{{item.num}}</div>
                    <div class="font_size_21">{{item.info}}</div>
                </div>
            </div>
        </div>
        <div class="back_white padding_top_30 padding_bottom_30 text_center">
            <div class="width_80_pc margin_auto">
                <h1 class="margin_top_3 margin_bottom_4">Why Choose Us</h1>
                <div class="margin_top_10 font_size_20 font_weight_400 line margin_bottom_15">
                    Innovation and technology are the two major pillars of our company. We rely on innovative products and professional technical teams to bring development and transformation to the world. 
                </div>
                <div class="margin_top_10 font_size_20 font_weight_400 line">
                    Putting the demand of users first, we embrace the latest trend in industry and keep abreast with the time. As a passionate company, we always do everything we can to provide the best products to users.
                </div>
            </div>
        </div>
        <div class="fiveth_div white text_center">
            <div class="padding_top_20 font_size_5">Need Help ?</div>
            <h1 class="font_size_40 margin_top_20">CONTACT WITH US</h1>
            <div class="width_80_pc margin_auto display_flex flex_jusify_space media_flex_row_800">
                <div class="border_white" :class="{width_30: $store.state.is_pc,width_100: !$store.state.is_pc}" v-for="item in address_arr" :key="item.name">
                    <div class="font_size_21">{{item.name}}</div>
                    <div class="margin_top_1">
                        {{item.txt}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../../../util/bus";
export default {
    mounted() {
        this.innerHeight = this.$store.state.innerHeight;
        this.setItemHeight();
        this.whatchScroll();
    },
    data() {
        return {
            innerHeight: "0px",
            address_arr: [{
                name: "Address",
                txt: "Address：No.8, 11/F, HongHui Industrial Building, No. 29, Liuhe Street, Xinpu Gang, Kowloon, Hong Kong "
            },
            {
                name: "E-Mail",
                txt: "customer@nownet.com"
            }
            ],
            introarr: [
                {
                    img: require("../../../static/img/pp2.png"),
                    txt: "FunnyU is a premium subscription service. The service consists of multiple categories of funny content, including funny videos, funny pictures, wallpapers and ringtones. Our service has brought happiness to over 20,000 users globally. http://humorboom.com",
                    name: "FunnyU "
                },
                {
                    img: require("../../../static/img/pp1.png"),
                    txt: "Secret Garden provides high-quality pleasing beauty videos and pictures to subscribers. The service consists of various kinds of beautiful girls, and it caters to the taste of all kinds of people. Users can browse the content online and the content is updated continuously. ",
                    name: "Secret Garden  "
                },
                {
                    img: require("../../../static/img/pp3.png"),
                    txt: "We provide free online mobile applications, which can help you recover your data, manage your phones and transfer data through devices. Our applications cover over 800,000 users in about 40 countries. ",
                    name: "Phone Software"
                }
            ],
            num_arr: [
                { num: 8, info: "services" },
                { num: "80000+", info: "users" },
                { num: "50+", info: "Partners" },
                { num: "70+", info: "countries" }
            ],
            four_item_offsetTop: 0,
            show_second_back: false
        };
    },
    methods: {
        scroll(v) {
            var scrollTop = v.target.scrollTop;
            bus.$emit("windowScroll", scrollTop);
        },
        setItemHeight() {
            this.$nextTick(() => {
                this.four_item_offsetTop = this.$refs.four_item.offsetTop;
            });
        },
        
        whatchScroll() {
            bus.$on("windowScroll", v => {
                console.log(v, this.four_item_offsetTop);
                if (v > this.four_item_offsetTop) {
                    this.show_second_back = true;
                } else {
                    this.show_second_back = false;
                }
            });
        }
    }
};
</script>
<style lang='less'>
.home_page {
    .line{
        line-height: 30px;
    }
    &.next_back {
        background-image: url("../../../static/img/back2.jpg");
    }
    background-image: url("../../../static/img/back1.jpg");
    background-size: 100%;
    .first_page {
        background: rgba(200, 200, 200, 0.5);
        .logoimg {
            width: 180px;
        }
    }
    .second_page {
        min-height: 700px;
    }
    .third_page {
        // height: 200px;
    }
    .fiveth_div {
        background: #82b541;
        .border_white {
            margin-top: 20px;
            border: 1px solid white;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
            line-height: 30px;
        }
        padding-bottom: 30px;
    }
}
@media screen and (max-width: 800px) {

    .home_page {
        .font_phone_40{
            font-size: 25px;
        }
        .font_phone{
            font-size: 16px;
            font-weight: 400;
        }
        .first_page{
            .welcome{
                font-size: 26px;
            }
        }
        .second_page{
            .fours{
                display: flex;
                flex-direction: column;
            }

        }
        &.next_back {
            background-image: url("../../../static/img/back2.jpg");
            background-size: 400%;
        }
        background-image: url("../../../static/img/back1.jpg");
        background-size: 400%;
        background-position-x: -700px;
    }
}
</style>