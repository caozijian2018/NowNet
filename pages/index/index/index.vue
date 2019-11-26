<template>
    <div
        class="index_box height_100 overflow_x_scroll phone_flex phone_column width_100 nscrol position_relative"
        @scroll="scroll"
        :style="{height: $store.state.is_pc ? '100%' : $store.state.innerHeight+'px'}"
    >
        <div class="head_position width_50 phone_width_100 phone_relative">
            <img src="../../../static/img/logo.png" alt />
        </div>
        <div
            @scroll="scrollY"
            class="height_100 phone_flex_1 phone_overflow_y_scroll phone_height_auto  max_width_box"
            :style="{width: $store.state.is_pc ? max_width+'px' : ''}"
        >
            <first-page ref="home_page" :class="{transition_back:  most_scroll + (inner_width)> show_arr[0]}" :transfrom-style="first_page_transform_style()"></first-page>
            <second-page ref="slogon" :class="{transition_back: isTransitionBack(1)}"></second-page>
            <third-page ref="third_path" :third-left-page-position="(scroll_left - $store.state.innerWidth) * .1"></third-page>
            <fourth-page ref="fourth_path" :class="{transition_back:isTransitionBack(3)}"></fourth-page>
            <fiveth-page ref="fiveth_path" :class="{transition_back: isTransitionBack(4)}"></fiveth-page>
            <products ref="products" :class="{transition_back: isTransitionBack(5)}"></products>
            <secret-garden ref="secret" :translate-persent="secret_page_scroll()" :class="{transition_back: most_scroll > show_arr[6]}"></secret-garden>
            <!-- <phone-soft-ware ref="soft_ware"  :translate-persent="phone_soft_page_scroll()" :class="{transition_back: most_scroll > show_arr[7]}"></phone-soft-ware>
            <why-choose-us  :translate-persent="why_choose_page_scroll()" :class="{transition_back: most_scroll > show_arr[8]}" ref="why_choose_us"></why-choose-us>
            <contactus  :translate-persent="contact_page_scroll()" :class="{transition_back: most_scroll > show_arr[9]}" ref="contactus"></contactus> -->
        </div>
        <!-- 下面的导航 文字和border分开 简单点 border 作为整个-->
        <div class="navigation_positoin width_50 phone_none" >
            <div class="display_flex flex_jusify_space">
                <div
                    v-for="(item,index) in navigation_arr"
                    class="transition4 flex_1 navigation_arr_div padding_bottom_15 position_relative"
                    :key="item"
                    :class="{border_bottom_transparent: index == navigation_arr.length-1}"
                >
                    <div
                        class="squre_point position_absolute transition4 animated"
                        :class="{rubberBand: isScrolledThisItem(index), already_rolled: isScrolledThisItem(index)}"
                    ></div>
                    <div
                        class="transition4 text gray_1"
                        @click="scrollPage(index)"
                        :class="{orange_text: isScrolledThisItem(index)}"
                    >{{item}}</div>
                </div>
            </div>
            <div
                class="bottom_orange_border position_absolute"
                :style="{width: scroll_left*100/($store.state.innerWidth*navigation_arr.length)+'%'}"
            ></div>
        </div>
    </div>
</template>

<script>
import pcOrPhone from "../../../util/get_pc_or_phone";
import fourthPage from "../../../components/fourth_page";
import thirdPage from "../../../components/third_page";
import secondPage from "../../../components/second_page";
import firstPage from "../../../components/first_page";
import fivethPage from "../../../components/fiveth_page";
import products from "../../../components/products";
import secretGarden from "../../../components/secret_garden";
import phoneSoftWare from "../../../components/phone_soft_ware";
import whyChooseUs from "../../../components/why_choose_us";
import contactus from "../../../components/contactus";


import bus from "../../../util/bus"

export default {
    components:{
        thirdPage,
        fourthPage,
        secondPage,
        firstPage,
        fivethPage,
        products,
        secretGarden,
        phoneSoftWare,
        whyChooseUs,
        contactus
    },
    mounted() {
        this.init();
        this.$nextTick(() => {
            this.inner_width = this.$store.state.innerWidth / 2;
            console.log(this.$store.state.innerWidth);
            console.log(this.$store.state.innerHeight);

            this.inner_height = this.$store.state.innerHeight / 2;
            this.sortModuleOffset();
        });
    },
    methods: {
        isTransitionBack(i){
           return this.$store.state.is_pc ? (this.most_scroll + (this.inner_width)> this.show_arr[i]) : (this.most_scroll_y + (this.inner_height)> this.show_arr_scroll_y[i]);
        },
        sortModuleOffset() {
            var width = 0;
            for(var i=0; i< document.querySelectorAll(".max_width_box > div").length; i++){
                var dom = document.querySelectorAll(".max_width_box > div")[i]
                width += dom.offsetWidth
            }
            this.max_width = width + 3601;
            this.$nextTick(()=>{
            this.show_arr = [
                0,
                this.$refs.slogon.$el.offsetLeft,
                this.$refs.third_path.$el.offsetLeft,
                this.$refs.fourth_path.$el.offsetLeft,
                this.$refs.fiveth_path.$el.offsetLeft,
                this.$refs.products.$el.offsetLeft,
                this.$refs.secret.$el.offsetLeft,
                // this.$refs.soft_ware.$el.offsetLeft,
                // this.$refs.why_choose_us.$el.offsetLeft,
                // this.$refs.contactus.$el.offsetLeft

            ];
            this.show_arr_scroll_y = [
                0,
                this.$refs.slogon.$el.offsetTop,
                this.$refs.third_path.$el.offsetTop,
                this.$refs.fourth_path.$el.offsetTop,
                this.$refs.fiveth_path.$el.offsetTop,
                this.$refs.products.$el.offsetTop,
                this.$refs.secret.$el.offsetTop,
                // this.$refs.soft_ware.$el.offsetLeft,
                // this.$refs.why_choose_us.$el.offsetLeft,
                // this.$refs.contactus.$el.offsetLeft

            ];
            console.log(this.show_arr)
            })
        },
        first_page_transform_style() {
            var rotate_constant =
                this.scroll_left > this.$store.state.innerWidth * 0.7
                    ? this.$store.state.innerWidth * 0.7
                    : this.scroll_left;
            var rotate = rotate_constant / 250 > 1 ? rotate_constant / 250 : 1;
            return (
                "rotate(" + rotate_constant / 20 + "deg) scale(" + rotate + ")"
            );
        },
        secret_page_scroll() {
            return (this.scroll_left + (this.$store.state.innerWidth/2) - (this.show_arr[6]))/this.$store.state.innerWidth*100
        },
        phone_soft_page_scroll() {
            return (this.scroll_left + (this.$store.state.innerWidth/2) - (this.show_arr[7]))/this.$store.state.innerWidth*100
        },
        why_choose_page_scroll() {
            return (this.scroll_left + (this.$store.state.innerWidth/2) - (this.show_arr[8]))/this.$store.state.innerWidth*100
        },
        contact_page_scroll() {
            return (this.scroll_left + (this.$store.state.innerWidth/2) - (this.show_arr[9]))/this.$store.state.innerWidth*100
        },
        
        third_page_position() {
            return this.$nextTick(()=>{
                var position_x = (this.scroll_left - this.$refs.third_path.$el.offsetLeft) * .2
                return position_x;
            })
        },
        scrollPage(i) {
            console.log(i)
            var distance = this.show_arr[i]
            console.log(distance)
            // var duration_time = Math.abs(i - this.preindex)*300
            this.$jquery(".index_box").animate({ scrollLeft: distance }, 1000);
            this.preindex = i;
        },
        isScrolledThisItem(i) {
            return this.scroll_left >= this.$store.state.innerWidth * i;
        },
        scroll(v) {
            var scroll_left = v.target.scrollLeft;
            var scroll_top = v.target.scrollTop;
            this.scroll_left = scroll_left;
            this.scroll_top = scroll_top;
            bus.$emit("scroll", scroll_left)
            bus.$emit("scrollY", scroll_top)
            if(scroll_left > this.most_scroll) {
               this.most_scroll = scroll_left;
            }
            if(scroll_top > this.most_scroll_y){
                this.most_scroll_y = scroll_top;
            }
            var deg =
                (scroll_left > this.$store.state.innerWidth
                    ? this.$store.state.innerWidth * 0.7
                    : scroll_left) / 10;
        },
        scrollY(v){
            var scroll_top = v.target.scrollTop;
            this.scroll_top = scroll_top;
            console.log(scroll_top)
            bus.$emit("scrollY", scroll_top);
            if(scroll_top > this.most_scroll_y){
                this.most_scroll_y = scroll_top;
            }
        },
        init() {
            this.setHeightAndPhoneOrPc();
            this.watchOnresize();
        },
        watchOnresize() {
            window.onresize = this.setHeightAndPhoneOrPc;
        },
        getAllPagesWidth() {},
        setHeightAndPhoneOrPc() {
            var height_ = innerHeight;
            var width_ = innerWidth;
            this.$store.state.innerHeight = height_;
            this.$store.state.innerWidth = width_;
            this.$store.state.pc_or_phone = pcOrPhone();
        }
    },
    data() {
        return {
            most_scroll_y: 0,
            secret_position_x: 0,
            show_arr:[],
            inner_width: 0,
            inner_height: 0,
            most_scroll: 0,
            show_third_img: true,
            show_third_img_2: true,
            scroll_left: 0,
            scroll_top: 0,
            preindex: 0,
            max_width: 0,
            show_arr_scroll_y:[],
            navigation_arr: [
                "Home",
                "Slogon",
                "Works",
                "Company Introduction",
                "Products",
                "Ketchupbox",
                "Secret Garden",
                "Secret",
                "Phone Software",
                "Contact Us"
            ]
        };
    }
};
</script>
<style lang='less'>
@bottom_border_color: #ddd;
@orange: #fb6833;
@gray: gray;
@blue:rgba(29, 24, 107, 1.0);
.index_box {
    .button_app{
        padding: 20px;
        color: #fff;
        font-size: 20px;
        background: @orange;
        border-radius: 4px;
        
    }
    // head
    .head_position {
        img {
            width: 200px;
        }
        position: fixed;
        left: 50%;
        top: 30px;
        z-index: 1002;
        transform: translateX(-50%);
    }
    // 滚动
    .navigation_positoin {
        .navigation_arr_div {
            .squre_point {
                width: 4px;
                height: 4px;
                background: @gray;
                left: -2.5px;
                bottom: -2.5px;
                &.already_rolled {
                    background: @orange;
                    border-radius: 50%;
                }
            }
            border-bottom: 1px solid @gray;
            &.border_bottom_transparent {
                border-bottom: 1px solid transparent;
            }
            .text {
                color: #ddd;
            }
            .orange_text {
                color: @orange;
            }
        }
        position: fixed;
        left: 50%;
        bottom: 30px;
        z-index: 1002;
        transition: 0.4s;
        transform: translateX(-50%);
        .bottom_orange_border {
            height: 1px;
            background: @orange;
            bottom: 0;
        }
    }
    @media screen and (max-width: 800px){
        .head_position {
            height: 60px;
            padding: 0 10px;
            line-height: 60px;
            img {
                width: 100px;
                vertical-align: middle;
            }
            position: relative;
            box-shadow: 3px 5px 9px #ddd;
            top: 0px;
            left: 0;
            transform: translateX(0%);
        }
    }
}
</style>