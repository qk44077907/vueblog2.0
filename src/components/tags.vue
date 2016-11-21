<template>
    <div id="content-tag">
        <router-link v-for="(val, key) in tags"
           :to="{ name: 'filtered', params: { filterField: 'tag',filterName:key,count:1 }}"
           class="tags"
           :class="{ 'large': val>5}">
            {{key}}
        </router-link>
    </div>
</template>

<script>
    export default {
        computed:{
            tags(){
                return this.$store.state.tags
            }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    #content-tag {
        text-align: center;
        position: relative;
        .tags {
            display: inline-block;
            margin: 10px;
            text-decoration: none;
            border-bottom: 1px solid #999;
            word-wrap: break-word;
            font-size: 12px;
            color: #ccc;
            &:hover{
                border-bottom-color: #222;
            }
            &.large{
                font-size: 30px;
                color: #111;
            }
        }
    }
</style>