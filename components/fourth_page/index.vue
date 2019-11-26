<template>
    <div
        class="height_100 overflow_hidden phone_margin_top_60px fourth_page display_inline_block"
        ref="fourth_path"
        :style="{width: $store.state.innerWidth + 'px'}"
    >
        <div
            class="width_70 height_100 phone_width_90 margin_auto flex_align_center flex_jusify_space display_flex phone_block"
        >
            <div class="width_30 phone_width_90 phone_margin">
                <h1 class="font_size_50 margin_bottom_15 fourth_page_h1 transform_duration1 transilateY2 phone_transilateX2">Company Introduction</h1>
            </div>
            <div class="position_relative font_size_8 gray_1 width_60 phone_width_90 phone_margin line_height_27px">
                <div class="display_flex flex_jusify_space">
                    <div
                        class="width_100 transform_duration1 transilate-Y2 phone_transilate_X2"
                    >
                        Nownetmobi is an Internet-based technology-driven innovative company.
                        Its founders are from Qinghua University, Hong Kong University of Science and Technology
                        and China University of Technology, and have working experience in Google, Tencent and other major companies.
                        We know the Internet users well, and users’ demand is our first priority. Nownetmobi emphasizes the importance of technology.
                        With technology, we are able to provide colorful applications and content to netizens wordwide.
                    </div>
                </div>
                <div class="text_center transform_duration1 transilateY1 phone_transilateX1">
                    <img src="../../static/img/tree.jpg" class="width_80 transiform_y_100px" alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{

    }
};
</script>
<style lang='less'>
.fourth_page{
        .fourth_page_h1 {
            background-color: #77787c;
            background: url("../../static/img/tree.jpg") no-repeat;
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