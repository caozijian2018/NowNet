<template>
    <div class="height_100 bbbox overflow_x_scroll nscrol" @scroll="scroll">
        <div class="head_position width_90 box_szing phone_width_100 phone_relative">
            <img src="../../../static/img/logo.png" alt />
        </div>
        <div class="height_100 display_flex height_100 boox" :style="{width: img_box_width+'px'}">
            <img src="../../../static/img/page1.png" ref="slogon" @load="fun" class="height_100" alt="">
            <img src="../../../static/img/page2.png" ref="third_path" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page3.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page4.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page5.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page6.png" @click="clickPro" @load="fun"  class="height_100 cursor" alt="">
            <img src="../../../static/img/page7.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page8.png" @load="fun"  style="margin-left: -1px" class="height_100" alt="">
            <img src="../../../static/img/page9.png" @load="fun"  class="height_100" alt="">
        </div>
        <!-- 滚动的 -->
        <div class="navigation_positoin width_70 phone_none cursor" >
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
                        class="transition4 text navtext_gray"
                        @click="scrollPage(index)"
                        :class="{orange_text: isScrolledThisItem(index) || selected_index == index}"
                    >{{item}}</div>
                </div>
            </div>
            <div
                class="bottom_orange_border position_absolute"
            ></div>
        </div>
    </div>
</template>

<script>
import scrollFunc from "../../../util/watch_scroll";
export default {
    mounted(){
        this.$nextTick(()=>{
            this.whatchScroll();
            this.setMaxwidth();
        })
    },
    data(){
        return {
            img_box_width: 0,
            most_scroll: 0,
            selected_index: 0,
            show_arr:[],
            navigation_arr: [
                "Home",
                "Mission",
                "Works",
                "Introduction",
                "Partners",
                // "Ketchupbox",
                "Products",
                "Phone Software",
                "Why Us",

                // "Contact Us"
            ]
        }
    },
    methods: {
        scrollPage(i) {
            this.selected_index = i;
            // console.log()
            var distance = document.querySelectorAll(".boox > img")[i].offsetLeft
            console.log(888)
            console.log(i)
            console.log(this.show_arr)
            this.$jquery(".bbbox").animate({ scrollLeft: distance }, 1000);
            this.$store.state.scroll = distance;
        },
        scroll(v) {
            var scroll_left = v.target.scrollLeft;
            var scroll_top = v.target.scrollTop;
            this.scroll_left = scroll_left;
            this.scroll_top = scroll_top;
            debugger
            // bus.$emit("scroll", scroll_left)
            // bus.$emit("scrollY", scroll_top)
            if(scroll_left > this.most_scroll) {
               this.most_scroll = scroll_left;
            }
            // this.$store.state.scroll = scrollLeft;
        },
        isScrolledThisItem(i) {
            try {
                return this.scroll_left >= document.querySelectorAll(".boox > img")[i].offsetLeft 
            } catch (error) {
                return false
            }
            },
        clickPro(v){
            console.log(v.offsetX)
            var clix = v.offsetX;
            var img_width = v.target.width;
            if(clix > 0 && clix < img_width/3){
                this.$router.push({path: "/productinfo?index=0"})
            }else if(clix > img_width / 3 && clix < (img_width*2/3)){
                this.$router.push({path: "/productinfo?index=1"})
            }else if(clix > (img_width*2/3) && clix < img_width){
                this.$router.push({path: "/productinfo?index=2"})
            }
        },
        fun(v){
            console.log(999)
            this.img_box_width += v.target.width;
        },
        setMaxwidth(){
           var imgs = document.querySelectorAll(".boox > img");
           for(var k in imgs){
               var img = imgs[k];
                var s = img.width;
           }
           console.log(990000)
           console.log(this.$refs.third_path.offsetLeft)
           this.show_arr = [
                0,
                // this.$refs.slogon.$el.offsetLeft,
                // this.$refs.third_path.$el.offsetLeft,
                // this.$refs.fourth_path.$el.offsetLeft,
                // this.$refs.fiveth_path.$el.offsetLeft,
                // this.$refs.products.$el.offsetLeft,
                // this.$refs.why_choose_us.$el.offsetLeft + 600,
                // this.$refs.soft_ware.$el.offsetLeft ,
            ];
        },
        whatchScroll(){
            var num = 0;
            window.onmousewheel = document.onmousewheel =  (e)=>{
                var is_to_top = scrollFunc(e)
                var scroll_left = this.$jquery(".bbbox")[0].scrollLeft;
                console.log(scroll_left)
                // e.preventDefault()
                if (is_to_top > 0){
                    scroll_left += is_to_top;
                    // this.$jquery(".index_box").css('scrollLeft', 3000+"px");
                }else{
                    scroll_left += is_to_top;
                }
                this.$jquery(".bbbox").animate({ scrollLeft: scroll_left }, 0);

            };
        },
    }
}

</script>
<style lang='less'>
@bottom_border_color: #ddd;
@orange: #fb6833;
@gray: gray;
@blue:rgba(29, 24, 107, 1.0);
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
            border-bottom: 1px solid #d3d3d3;
            &.border_bottom_transparent {
                border-bottom: 1px solid transparent;
            }
            .text {
                color: rgb(135,135,135);
            }
            .orange_text {
                color: @orange;
            }
        }
        position: fixed;
        left: 50%;
        bottom: 55px;
        z-index: 1002;
        transition: 0.4s;
        transform: translateX(-50%);
        .bottom_orange_border {
            height: 1px;
            background: @orange;
            bottom: 0;
        }
    }
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
</style>    