<template>
    <div
        class="height_100 overflow_hidden position_relative products display_inline_block"
        ref="fourth_path"
        :style="{
      width: $store.state.innerWidth + 'px',
      height: $store.state.is_pc ? 'height' : 'auto'
    }"
    >
        <!-- <div
            class="position phone_none position_absolute width_90 font_size_50 phone_transilateY2 transform_duration1"
        >
            <h1 class="display_inline_block fourth_page_h1">Products</h1>
        </div> -->
        <div class="height_100 width_90 margin_auto display_flex flex_column flex_center">
            <h1 class="fourth_page_h1">Products</h1>
            <h1
                class="display_inline_block phone_show margin_top_20 width_90 margin_auto margin_bottom_2 fourth_page_h1"
            >Products</h1>
            <div class="line_height_25px gray_1 font_size_15 width_70 phone_width_100 margin_top_20 margin_bottom_15">We aim at bringing premium and unique services to global mobile users. We are responsible for developing and marketing mobile content products. Our current products mainly include Ketchupbox, MyH5Game, and Secret Garden</div>
            <div class="margin_top_20 display_flex flex_jusify_space phone_block">
                <div class="width_30 phone_width_100" @click="jump(0)">
                    <img src="../../static/img/funny.jpeg" alt class="width_100" />
                    <div class="font_size_15 line_height_25px">
                        Ketchupbox
                    </div>
                </div>
                <div class="width_30 phone_width_100" @click="jump(2)">
                    <img src="../../static/img/secret.jpeg" alt class="width_100" />
                    <div class="font_size_15 line_height_25px">
                        Secret Garden
                    </div>
                </div>
                <div class="width_30 phone_width_100" @click="jump(1)">
                    <img src="../../static/img/com.png" alt class="width_100" />
                    <div class="font_size_15 line_height_25px">MyH5Game</div>
                </div>
            </div>
        </div>

        <!-- <div class="display_flex height_100 flex_column phone_block flex_center flex_align_center width_90 margin_auto">
            <div class="display_flex width_100 phone_block flex_jusify_space flex_align_center">
                <div class="width_23 phone_width_90 margin_bottom_2">
                    <img class="width_100" src="../../static/img/funny.jpeg" alt="">
                </div>
                <div class="width_23 phone_width_90 gray_1 font_size_15 line_height_25px margin_bottom_2">
                    <a href="http://ketchupbox.com/ ">Ketchupbox</a>  is a premium subscription service. The service consists
                            of multiple categories of funny content, including videos, pictures,
                            wallpapers and ringtones. Our service is enjoyed by over 20,000
                            users globally.
                </div>
                <div class="width_23 phone_width_90 margin_bottom_2">
                    <img class="width_100" src="../../static/img/secret.jpeg" alt="">
                </div>
                <div class="width_23 phone_width_90 gray_1 font_size_15 line_height_25px margin_bottom_2">
                    <a href="http://secretsgarden.net/">Secret Garden</a> provides high-quality pleasing beauty videos and
                                pictures to subscribers. The service consists of various kinds of
                                beautiful girls. Users can browse the content online and the
                                content is updated regularly.
                </div>
            </div>
            <div class="display_flex phone_block flex_align_center flex_center">
                <div class="width_23 phone_width_90 margin_bottom_2">
                    <img src="../../static/img/com.png" class="width_100" alt="">
                </div>
                <div class="width_23 phone_width_90 gray_1 margin_left_20 phone_margin_left_0 font_size_15 line_height_25px margin_bottom_2">
                    <a href="https://myh5game.net">MyH5Game</a> is a premium subscription service focused on high-quality HTML 5 game, which currently consists of 60 games with different categories, including adventure, strategy, shooting, and others. Users will have excellent experience in MyH5Game. 
                </div>
            </div>

        </div>-->
    </div>
</template>

<script>
export default {
    props: {},
    methods: {
        jump(index){
            this.$router.push({path: '/productinfo?index=' + index});
        }
    },
};
</script>
<style lang="less">
@import "../../assets/css/current_theme";
.products {
    a {
        color: orangered;
        cursor: pointer;
    }
    .width_23 {
        // width: 16%;
    }
    @media screen and (max-width: 800px) {
        .phone_positoin {
            position: relative;
            margin-top: 40px;
        }
    }
    .position {
        left: 40px;
        top: 100px;
    }
    background: rgba(248, 248, 249, 1);
    .fourth_page_h1 {
        background-color: #77787c;
        background: url("../../static/img/city.png") no-repeat;
        background-size: 900px auto;
        background-position-x: -100px;
        font-size: 42px;
        -webkit-background-clip: text;
        // background-position: 40% center;
        -webkit-text-fill-color: transparent;
        will-change: background-position;
    }
}
</style>
