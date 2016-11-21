<template>
    <div id="content-cate">
        <ul>
            <li v-for="(val, key) in cates">
                <router-link  class="cates"
                    :to="{ name: 'filtered', params: { filterField: 'cate',filterName:key,count:1 }}">
                    {{key}}</router-link>
                <span class="num">({{val}})</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
                cates(){
return this.$store.state.cates
                }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    #content-cate {
        position: relative;
        .cates {
            color: #555;
            text-decoration: none;
            border-bottom: 1px solid #999;
            word-wrap: break-word;
            &:hover {
                border-bottom-color: #222;
            }
        }
        .num{
            color: #bbb;
        }
    }
</style>