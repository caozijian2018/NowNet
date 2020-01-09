<template>
    <div
        class="height_100 phone_height_auto overflow_hidden second_page display_inline_block"
        :style="{width: $store.state.innerWidth + 'px'}"
    >
        <div
            class="width_80 phone_width_90 height_100 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
        >
            <div class="width_30 phone_width_90 phone_margin phone_center_text">
                <h1 class="font_size_50 margin_bottom_15 second_page_h1">Our Mission</h1>
            </div>
            <div class="position_relative font_size_8 gray_1 phone_width_90 phone_margin line_height_27px">
                <div class="display_flex flex_jusify_space transform_duration1 transilate-Y2 phone_block">
                    <div class="width_40 phone_width_90 phone_margin">
                          To be one of the world’s leading 
                        content provider and application developer,
                        using the intelligence of the all staff
                        to help bring change to people’s life and reflect
                        the value of our company.
                    </div>
                    <div class="width_50 phone_width_90 phone_margin z_index100 transform_duration1 transilate-Y3">
                        <img src="../../static/img/mac.png" class="width_60" alt />
                    </div>
                </div>
                <div class="text_center margin_top_300px phone_margin_top_0">
                    <img
                        src="../../static/img/out.png"
                        class="width_40 phone_width_90 transiform_y_100px transform_duration2 transilateY3"
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
      .margin_top_300px{
          margin-top: -100px;
      }
        .second_page_h1 {
            background-color: #77787c;
            background: url("../../static/img/city.png") no-repeat;
            background-size: 900px auto;
            font-size: 88px;
            // line-height: 72px;
            -webkit-background-clip: text;
            background-position: 20% center;
            -webkit-text-fill-color: transparent;
            will-change: background-position;
            // color: #77787c;
        }
    }
</style>
