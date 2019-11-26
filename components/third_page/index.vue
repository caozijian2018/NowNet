<template>
    <div v-if="$store.state.is_pc"
        class="height_100 third_page white display_inline_block"
        :style="{transform: 'translateX('+ -(thirdLeftPagePosition + 200)+'px)' }"
    >
        <!-- <img src="../../../static/img/triangle.png" class="height_100" alt /> -->
        <div class="height_100 display_flex">
            <!-- <img src="../../static/img/triangle.png" class="height_100" alt /> -->
            <div
                class="back_blue rotate_triangle height_100" style="width:400px"
            >
            </div>
            <div
                :style="{width: $store.state.innerWidth + 'px'}"
                class="flex_1 height_100 margin_auto flex_align_center flex_center display_flex"
            >
                <div class="width_30 display_flex flex_column">
                    <h1 class="font_size_50 margin_bottom_15 font_size_100 align_self_start">Works</h1>
                    <div class="button_app display_inline_block align_self_start">xxx</div>
                </div>
                <div class="width_50 font_size_8 line_height_27px">
                    <div class="display_flex flex_jusify_space">
                        <div class="flex_1 overflow_hidden position_relative third_page_back">
                            <img
                                src="../../static/img/ice.jpeg"
                                class="height_100 full_div"
                                alt
                                :style="{transform: 'translateX('+ -(thirdLeftPagePosition + 200)+'px)' }"
                            />
                            <img
                                src="../../static/img/n.png"
                                class="width_100 position_relative vertical_middle z_index100"
                            />
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
        .rotate_triangle {
            transform-origin:left top;
            transform: skew(-16deg);
        }
        background: @blue;
        .back_blue{
            background: @blue
        };
    }
</style>