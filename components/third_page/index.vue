<template>
    <div v-if="$store.state.is_pc"
        class="height_100 third_page white display_inline_block"
        :style="{transform: 'translateX('+ -(thirdLeftPagePosition + 50)+'px)' }"
    >
        <!-- <img src="../../../static/img/triangle.png" class="height_100" alt /> -->
        <div class="height_100">
            <!-- <img src="../../static/img/triangle.png" class="height_100" alt /> -->
            <div
                :style="{width: $store.state.innerWidth + 'px'}"
                style="margin-left:-1px"
                class="flex_1 height_100 margin_auto flex_align_center flex_center display_flex"
            >
                <div class="height_100 back_blue display_flex width_80 margin_auto" style="padding-right: 300px">
                    <div
                        class="back_blue rotate_triangle height_100 width_30"
                    >
                    </div>
                    <div class="width_50 display_flex flex_column flex_align_center flex_center">
                        <h1 class="font_size_50 margin_bottom_15 font_size_100 z_index100 margin_bottom_2">Works
                            <div class="font_size_20">
                                Nownetmobi’s core concern is the works that we offer to users.
                                Our works shape our identity. Through our works we can
                                touch users in a variety of ways… 
                            </div>
                        </h1>
                        
                        <!-- <div class="button_app display_inline_block align_self_start"></div> -->
                    </div>
                    <div class="width_50 font_size_8 display_flex flex_align_center">
                        <div class="display_flex flex_align_center width_100 flex_jusify_space">
                            <img src="../../static/img/n.jpg" class="width_100 scalse2" alt="">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div v-else class="margin_top_70px phone_skew_box display_flex flex_center flex_align_center width_100 position_relative">
        <div class="button white">
            contact Us
        </div>
    </div>
</template>

<script>
export default {
    props: {
        thirdLeftPagePosition:{
            type: Number,
            default: 0
        },
        thirdRightPagePosition:{
            type: Number,
            default: 0
        },
    }
};
</script>
<style lang='less'>
    // 第三页
    @import "../../assets/css/current_theme";
    .phone_skew_box{

        transform:skew(0 , -12deg);
        .button{
            transform:skew(0 , 12deg);
            border-radius: 4px;
            padding: 10px 20px;
            background: @orange;
        }
        height: 300px;
        background-image: url('../../static/img/ice.jpeg');
        background-position: 50% 50%;
        background-size: 200%;
    }
    .third_page {
        .full_div{
            left: 1px;
            right: 1px;
        }
        .rotate_triangle {
            transform-origin:left top;
            transform: skew(-16deg);
        }
        .back_blue{
            background: rgba(34, 21, 109, 1.0);
        };
    }
</style>