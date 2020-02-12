<template>
<div class="height_100 probox overflow_scroll">
    <div class="white padding_top_30 padding_bottom_30">
        <div
            class="width_80 height_100 display_flex flex_center flex_column phone_width_90 margin_auto"
        >
            <h1 class="font_size_30 margin_top_20 margin_bottom_15">
                {{current.title}}
            </h1>
            <div class="display_flex flex_jusify_space width_100 phone_block">
                <div class="width_30 phone_width_100" v-for="item in current.img" :key="item">
                    <img :src="item" class="width_100" alt />
                </div>
            </div>
            <div class="indent10px margin_top_20 line_height_25px font_size_15">{{current.desc}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                {
                    title: "ketchupbox",
                    img: [
                        require("../../../static/img/products/1.png"),
                        require("../../../static/img/products/2.png"),
                        require("../../../static/img/products/1.png")
                    ],
                    desc:
                        "Ketchupbox is a premium recreation community platform. The service consists of multiple categories of funny contents, including videos, pictures, wallpapers and ringtones. Our service is enjoyed by over 20,000 users globally. "
                },
                {
                    title: "MyH5Game",
                    img: [
                        require("../../../static/img/products/4.png"),
                        require("../../../static/img/products/5.png"),
                        require("../../../static/img/products/6.png")
                    ],
                    desc: "MyH5Game is a premium entertainment mobile website dedicated to high-quality HTML 5 game, which currently consists of 60 games with different categories, including adventure, strategy, shooting, and others. Users will have excellent experience in MyH5Game."
                },
                {
                    title: "Secret Garden",
                    img: [
                        require("../../../static/img/products/7.png"),
                        require("../../../static/img/products/8.png"),
                        require("../../../static/img/products/9.png")
                    ],
                    desc: "Secret Garden provides high-quality pleasing beauty videos and pictures to subscribers. The service consists of various kinds of beautiful girls. Users can browse the content online and the content is updated regularly."
                },
            ]
        };
    },
    computed: {
        current(){
            var index = this.$route.query.index || 0;
            return this.news[index];
        },
    }
};
</script>
<style lang='less'>
.probox{
    background: #111;
}
</style>