<template>
    <div
        class="height_100 overflow_hidden position_relative products display_inline_block"
        ref="fourth_path"
        :style="{
      width: $store.state.innerWidth + 'px',
      height: $store.state.is_pc ? 'height' : 'auto'
    }"
    >
        <div class="position phone_none position_absolute width_90 font_size_50 phone_transilateY2 transform_duration1 ">
            <h1 class="display_inline_block fourth_page_h1 ">
                Products
            </h1>
        </div>
        <h1 class="display_inline_block phone_show margin_top_20 width_90 margin_auto margin_bottom_2 fourth_page_h1 ">
            Products
        </h1>
        <div class="display_flex height_100 phone_block  flex_jusify_space flex_align_center width_90 margin_auto">
            <div class="width_23 phone_width_90 margin_bottom_2">
                <img class="width_100" src="../../static/img/funny.jpeg" alt="">
            </div>
            <div class="width_23 phone_width_90 gray_1 font_size_15 line_height_25px margin_bottom_2">
                Ketchupbox is a premium subscription service. The service consists
                        of multiple categories of funny content, including videos, pictures,
                        wallpapers and ringtones. Our service is enjoyed by over 20,000
                        users globally.
            </div>
            <div class="width_23 phone_width_90 margin_bottom_2">
                <img class="width_100" src="../../static/img/secret.jpeg" alt="">
            </div>
            <div class="width_23 phone_width_90 gray_1 font_size_15 line_height_25px margin_bottom_2">
                Secret Garden provides high-quality pleasing beauty videos and
                            pictures to subscribers. The service consists of various kinds of
                            beautiful girls. Users can browse the content online and the
                            content is updated regularly.
            </div>
        </div>
        <!-- <div
            class="width_70 phone_width_90 height_100 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
        >
            <div class="width_30 phone_width_90 phone_margin">
                <h1
                    class="font_size_50 margin_bottom_15 fourth_page_h1 transform_duration1 phone phone_transilate_X2"
                >Ketchupbox</h1>
            </div>
            <div
                class="position_relative font_size_8 width_60 phone_margin phone_width_90 line_height_27px"
            >
                <div class="display_flex flex_jusify_space">
                    <div
                        class="width_100 gray_1 transform_duration1 phone transilate-Y2 phone_transilateX2"
                    >
                        
                        Ketchupbox is a premium subscription service. The service consists
                        of multiple categories of funny content, including videos, pictures,
                        wallpapers and ringtones. Our service is enjoyed by over 20,000
                        users globally.
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 margin_top_10">
                    <img src="../../static/img/funny.jpeg" class="width_80 transiform_y_100px" alt />
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {}
};
</script>
<style lang="less">
@import "../../assets/css/current_theme";
.products {
    @media screen and (max-width:800px){
        .phone_positoin{
            position: relative;
            margin-top: 40px;
        }
    }
    .position{
        left: 40px;
        top:100px;
    }
    background:rgba(248, 248, 249, 1.0);
    .fourth_page_h1 {
        background-color: #77787c;
    background: url('../../static/img/city.png') no-repeat;
    background-size: 900px auto;
    font-size: 42px;
    -webkit-background-clip: text;
    background-position: 40% center;
    -webkit-text-fill-color: transparent;
    will-change: background-position;
    }
}
</style>
