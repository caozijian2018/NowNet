<template>
    <div class="index_box height_100 overflow_x_scroll width_100 nscrol position_relative" @scroll="scroll">
        <div class="head_position width_50">
            <img src="../../../static/img/logo.png" alt="">
        </div>
        <div class="height_100" :style="{width: $store.state.innerWidth*navigation_arr.length+'px'}">
            <!-- 首页 -->
            <div class="height_100 overflow_hidden first_page display_inline_block" :style="{width: $store.state.innerWidth + 'px'}">
                <div class="width_70 height_100 margin_auto flex_align_center flex_jusify_space display_flex">
                    <div class="width_30">
                        <h1 class="font_size_50 margin_bottom_15">
                            Now Netmobi 
                        </h1>
                        <div class="font_size_8 gray_1 line_height_27px ">
                            We produce impressive 
                            online products for users
                            to use, explore, and love.
                        </div>
                    </div>
                    <div class="width_50 right_logo_box position_relative" :style="{transform: first_page_transform_style() }">
                        <img src="../../../static/img/logo_left.png" class="width_100 vertical_middle" style="border: 0" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 下面的导航 文字和border分开 简单点 border 作为整个-->
        <div class="navigation_positoin width_45">
            <div class="display_flex flex_jusify_space">
                <div v-for="(item,index) in navigation_arr" class="transition4 flex_1 navigation_arr_div padding_bottom_15 position_relative" :key="item" :class="{border_bottom_transparent: index == navigation_arr.length-1}">
                    <div class="squre_point position_absolute transition4 animated " :class="{rubberBand: isScrolledThisItem(index), already_rolled: isScrolledThisItem(index)}"></div>
                    <div class="transition4 text" @click="scrollPage(index)" :class="{orange_text: isScrolledThisItem(index)}">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="bottom_orange_border position_absolute" :style="{width: scroll_left*100/($store.state.innerWidth*navigation_arr.length)+'%'}">
            </div>
        </div>
    </div>
</template>

<script>
import pcOrPhone from "../../../util/get_pc_or_phone";
export default {
    mounted(){
        this.init()
    },
    methods:{
        first_page_transform_style(){
            var rotate_constant = this.scroll_left > this.$store.state.innerWidth*0.7 ? this.$store.state.innerWidth * 0.7 : this.scroll_left;
            var rotate = rotate_constant / 300 > 1 ? rotate_constant / 300 : 1;
            console.log(rotate);
            return 'rotate('+rotate_constant / 20+'deg) scale('+ rotate +')'
        },
        scrollPage(i){
            var distance =  this.$store.state.innerWidth*i;
            var duration_time = Math.abs(i - this.preindex)*100
            this.$jquery(".index_box").animate({ scrollLeft: distance}, duration_time);
            this.preindex = i
        },
        isScrolledThisItem(i){
            return this.scroll_left >= this.$store.state.innerWidth*i;
        },
        scroll(v){
            var scroll_left = v.target.scrollLeft;
            console.log(scroll_left)
            this.scroll_left = scroll_left
            // :style="{transform:'rotate('+scroll_left+'deg) scale(2.5)' }"
            var deg =(scroll_left > this.$store.state.innerWidth ? this.$store.state.innerWidth * 0.7 : scroll_left) / 10;
            // this.$jquery(".right_logo_box").css("transform", 'rotate('+ deg +'deg)')
        },
        init(){
            this.setHeightAndPhoneOrPc()
            this.watchOnresize();
        },
        watchOnresize() {
            window.onresize = this.setHeightAndPhoneOrPc;
        },
        getAllPagesWidth(){

        },
        setHeightAndPhoneOrPc() {
            var height_ = innerHeight;
            var width_ = innerWidth
            this.$store.state.innerHeight = height_;
            this.$store.state.innerWidth = width_;
            this.$store.state.pc_or_phone = pcOrPhone();
        },
    },
    data() {
        return {
            scroll_left: 0,
            preindex: 0,
            navigation_arr: [
                "Home",
                "About",
                "Works",
                "Social",
                "Shop",
                "Services",
                "Contact"
            ]
        };
    }
};
</script>
<style lang='less'>
@bottom_border_color: #ddd;
@orange:orange;
@gray:gray;

.index_box {
    .first_page{
        .right_logo_box{
            background: url("../../../static/img/back2.jpg");
            background-size: 100%;
            
        }
    }
    // head
    .head_position{
        img{
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
        .navigation_arr_div{
            .squre_point{
                width: 4px;
                height: 4px;
                background: @gray;
                left: -2.5px;
                bottom: -2.5px;
                &.already_rolled{
                    background: @orange;
                    border-radius: 50%;
                }
            }
            border-bottom: 1px solid @gray;
            &.border_bottom_transparent{
                border-bottom: 1px solid transparent;
            }
            .text{
                color:#fff;
            }
            .orange_text{
                color: @orange;
            }
        }
        position: fixed;
        left: 50%;
        bottom: 30px;
        z-index: 1002;
        transition: 0.4s;
        transform: translateX(-50%);
        .bottom_orange_border{
            height: 1px;
            background: @orange;
            bottom: 0;
        }
    }
}
</style>