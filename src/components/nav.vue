<template>
    <div id="blog-nav">
        <div class="meta">
            <a class="title" :to="{ path: '/' }">
                {{title}}
            </a>
            <p class="subtitle">
                {{subtitle}}
            </p>
        </div>
        <div class="nav">
            <ul id="menu" class="menu">
                <li class="menu-item"
                    :class="{ 'active': $route.name=='preview'}">
                    <router-link :to="'/'" rel="section">
                        <i class="fa fa-home fa-fw"></i>
                        首页
                    </router-link>
                </li>
                <li class="menu-item"
                    :class="{ 'active': $route.name=='archive'}">
                    <router-link :to="{ name: 'archive',params:{count:1}}" rel="section">
                        <i class="fa fa-archive fa-fw"></i>
                        归档
                    </router-link>
                </li>
                <li class="menu-item"
                    :class="{ 'active': $route.name=='cates'}">
                    <router-link  :to="{ name: 'cates'}" rel="section">
                        <i class="fa fa-th fa-fw"></i>
                        分类
                    </router-link>
                </li>
                <li class="menu-item"
                    :class="{ 'active': $route.name=='tags'}">
                    <router-link :to="{ name: 'tags'}" rel="section"><i class="fa fa-tags fa-fw"></i>
                        标签
                    </router-link>
                </li>
                <li class="menu-item"
                    :class="{ 'active': $route.name=='about'}">
                    <router-link :to="{ name: 'about'}" rel="section">
                        <i class="fa fa-user fa-fw"></i>
                        关于
                    </router-link>
                </li>
                <li class="menu-item menu-item-search"
                    @click="focus">
                    <router-link :to="{ name: 'search',params:{searchText:'1',page:1}}" class="st-search-show-outputs">
                        <i class="fa fa-search fa-fw"></i>
                        搜索
                        <input @keyup.enter="search" v-model="searchText" id="searchInput">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                title: '钱堃的博客demo',
                subtitle:'此处应该有一段文艺的签名 (｀･ω･´)',
                searchText:''
            }
        },
        computed:{
        },
        methods: {
            focus() {
                var input=document.querySelector("#searchInput");
                input.className='focus';
                input.focus();
            },
            blur() {
                var input=document.querySelector("#searchInput");
                input.className='';
                input.value='';
            },
            search () {
            }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    @leftwidth:240px;
    #blog-nav {
        width: @leftwidth;
        float: left;
        margin-right: 20px;
        box-shadow: 8px 8px 12px #888888;
        .meta {
            background: #222222;
            text-align: center;
            padding: 20px 0;
            color: #fff;
            .title {
                display: inline-block;
                vertical-align: top;
                line-height: 36px;
                font-size: 20px;
                font-weight: normal;
                text-decoration: none;
                color: #fff;
            }
            .subtitle {
                font-size: 13px;
                color: #ddd;
            }
        }
        .nav {
            background-color: #FFFFFF;
            ul {
                list-style: none;
                padding-top: 20px;
                padding-bottom: 16px;
                padding-left: 0;
                text-align: center;
                a {
                    display: block;
                    font-size: 13px;
                    text-transform: capitalize; //首字母大写
                    border-bottom: 1px solid transparent;
                    color: #555;
                    text-decoration: none;
                    position: relative;
                    box-sizing: border-box;
                    padding: 5px 20px;
                    text-align: left;
                    line-height: inherit;
                    transition-property: background-color;
                    transition-duration: 0.2s;
                    transition-timing-function: ease-in-out;
                    transition-delay: 0s;
                    .fa {
                        margin-right: 6px;
                    }
                    &:hover{
                        color: #222;
                        background: #f9f9f9;
                        border-bottom-color: #fff;
                    }
                }
                .active{
                    background: #f9f9f9;
                    a:after{
                        content: " ";
                        position: absolute;
                        top: 50%;
                        margin-top: -3px;
                        right: 15px;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background-color: #bbb;
                    }
                }
                #searchInput{
                    transition: all 0.5s ease;
                    opacity: 0;
                    width: 0px;
                    height: 18px;
                    &.focus{
                        opacity: 1;
                        width: 65%;
                    }
                }
            }
        }
    }
</style>