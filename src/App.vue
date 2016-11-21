<template>
    <div>
        <div class="headband"></div>
        <main id="app">
            <blog-nav></blog-nav>
            <profile>
            </profile>
            <div id="content">
                <transition name="slide-down" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <foot></foot>
        </main>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import blogNav from './components/nav.vue';
    import profile from './components/profile.vue';
    import foot from './components/foot.vue';

    export default{
        data: function () {
            return {
                totalArticles: [],
                searchText: ''
            }
        },
        computed: {},
        methods: {
            ...mapActions([
                'getTag',
                'getCate',
                'fetchPageData'
            ]),
        },
        components: {
            blogNav,
            profile,
            foot
        }
    };
</script>

<style lang=less rel="stylesheet/less">
    @leftwidth: 240px;
    * {
        margin: 0;
        padding: 0;
        &::-webkit-scrollbar {
            width: 5px;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: #4dbc9b;
        }
    }

    body {
        font-family: Lato, 'PingFang SC', 'Microsoft YaHei', sans-serif;
        color: #555;
        font-size: 16px;
        line-height: 2;
        background-color: #F5F7F9;
        //background-color: #00ee00;
    }

    a {
        text-decoration: none;
        &:hover {
            color: #222;
        }
        &:visited {
            color: #555;
        }
        &:link {
            color: #555;
        }
        &:active {
            color: #555;
        }
    }

    .headband {
        height: 3px;
        background: rgb(34, 34, 34);
    }

    #app {
        position: relative;
        width: 960px;
        margin: 0 auto;
    }


    #content {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        padding: 80px 40px 40px 40px;
        width: 700px;
        background: #fff;
        min-height: 700px;
        box-shadow: 8px 8px 12px #888888;
        .slide-down-enter-active{
            opacity: 1;
            top: 0;
            transition: all 0.5s ease;
        }
        .slide-down-leave-active{
            opacity: 0;
        }
        .slide-down-enter {
            opacity: 0;
            top: -20px;
        }
    }
</style>
