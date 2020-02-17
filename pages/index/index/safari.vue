<template>
    <div class="height_100 bbbox overflow_x_scroll nscrol">
        <div class="head_position width_90 box_szing phone_width_100 phone_relative">
            <img src="../../../static/img/logo.png" alt />
        </div>
        <div class="height_100 display_flex height_100 boox" :style="{width: img_box_width+'px'}">
            <img src="../../../static/img/page1.png" @load="fun" class="height_100" alt="">
            <img src="../../../static/img/page2.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page3.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page4.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page5.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page6.png" @click="clickPro" @load="fun"  class="height_100 cursor" alt="">
            <img src="../../../static/img/page7.png" @load="fun"  class="height_100" alt="">
            <img src="../../../static/img/page8.png" @load="fun"  style="margin-left: -1px" class="height_100" alt="">
            <img src="../../../static/img/page9.png" @load="fun"  class="height_100" alt="">
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
        }
    },
    methods: {
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