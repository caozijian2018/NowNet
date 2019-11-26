<template>
    <div
        class="height_100 overflow_hidden second_page display_inline_block"
        :style="{width: $store.state.innerWidth + 'px'}"
    >
        <div
            class="width_70 height_100 margin_auto flex_align_center flex_jusify_space display_flex"
        >
            <div class="width_30">
                <h1 class="font_size_50 margin_bottom_15 second_page_h1">Our Slogon</h1>
            </div>
            <div class="position_relative font_size_8 gray_1 width_60 line_height_27px">
                <div class="display_flex flex_jusify_space">
                    <div class="width_30">
                        Technology First, User First.
                        <br> 
                        Our Mission
                        <br> 
                        Let worldwide users enjoy our products.
                        <br> 
                        Our Target
                        <br> 
                        To be a world-leading company.
                    </div>
                    <img src="../../static/img/office.jpeg" class="width_50 z_index100" alt />
                </div>
                <div class="text_center">
                    <img
                        src="../../static/img/girl.jpeg"
                        class="width_30 transiform_y_100px"
                        alt
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang='less'>
  .second_page {
        .transiform_y_100px {
            transform: translateY(-100px);
        }
        .second_page_h1 {
            background-color: #77787c;
            background: url("../../static/img/ice.jpeg") no-repeat;
            background-size: 900px auto;
            font-size: 68px;
            // line-height: 72px;
            -webkit-background-clip: text;
            background-position: 70% center;
            -webkit-text-fill-color: transparent;
            will-change: background-position;
            // color: #77787c;
        }
    }
</style>