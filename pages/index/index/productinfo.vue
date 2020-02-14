<template>
<div class="height_100 probox overflow_hidden back23">
        <img class="width_100" :src="current" alt="">
        <img src="../../../static/img/left1.png"  @click="back()" style="width: 100px;left: 20px; top:20px;position:absolute" class="cursor" alt="">
    <!-- <div class="white padding_top_30 padding_bottom_30">
        <div
            class="width_80 height_100 display_flex flex_center flex_column phone_width_90 margin_auto"
        >
            <h1 class="font_size_30 margin_top_20 margin_bottom_15">
                {{current.title}}
            </h1>
            <div class="display_flex flex_jusify_space width_100 phone_block">
                <div class="width_30 phone_width_100" v-for="item in current.img" :key="item">
                    <img :src="item" class="width_80" alt />
                </div>
            </div>
            <div class="indent10px margin_top_20 line_height_27px font_size_21">{{current.desc}}</div>
        </div>
    </div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                require("../../../static/img/products/k.jpg"),
                require("../../../static/img/products/m.jpg"),
                require("../../../static/img/products/s.jpg"),

            ]
        };
    },
    methods:{
        back(){
            this.$router.push({path: "/"})
            // history.back()
        },
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
.back23{
    background: rgba(35, 35, 35, 1.0);
}
</style>