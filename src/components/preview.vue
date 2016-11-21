<template>
    <div class="preview">
        <section id="posts" class="posts-expand">
            <article v-for="article in articles">
                <header class="post-header">
                    <h1 class="post-title">
                        <a>
                            {{article.title}}
                        </a>
                    </h1>
                    <div class="post-meta">
                        <span class="post-date">
                            发表于 {{article.date}}
                        </span>
                        |
                        <span class="post-cate">
                            分类于
                            <a :to="{name:'sortByCate',params:{catename:article.cate,page:1}}">
                                {{article.cate}}
                            </a>
                        </span>
                    </div>
                </header>
                <div class="post-body">{{article.content}}</div>
                <footer>
                    <div class="post-end"></div>
                </footer>
            </article>
        </section>
        <nav class="pagination">
            <router-link class="extend prev"
                         rel="prev"
                         :to="{name:$route.name, params: { page:  parseInt($route.params.page)-1 }}"
                         v-show="$route.params.page!=1">
                <i class="fa fa-angle-left"></i>
            </router-link>
            <router-link class="page-number"
                         v-for="n in pages"
                         :to="{name:$route.name, params: { page: n}}"
                         :class="{ 'current': n==$route.params.page}">
                {{n}}
            </router-link>
            <router-link class="extend next"
                         rel="next"
                         :to="{ name:$route.name, params: { page: parseInt($route.params.page)+1 }}"
                         v-show="$route.params.page!=pages">
                <i class="fa fa-angle-right"></i>
            </router-link>
        </nav>
    </div>
</template>

<script>
    function getArticles(config,callback) {
        callback(null,{
            articles:[
                {
                    title: '文章一',
                    date: '2016-04-06',
                    tag: 'ES6',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                },
                {
                    title: '文章二',
                    date: '2016-04-05',
                    tag: '杂谈',
                    cate: '生活感悟',
                    content: '工具类社交产品之间是互补的，而大社交是互斥的。在大社交下，产品需要抢夺同一批用户，用户有非此即彼的关系；而在工具类社交下，没有非此即彼的关系，一个人本身就是多样化的组成。他喜欢音乐，也可以喜欢篮球，同时还可以是个编程高手，那么他工作遇到难题在程序员的圈子里活跃，周末在篮球的圈子里活跃，地铁上听听歌看看大家的评论，回到家打开蘑菇街网购一件衣服。不同的工具性社交产品，就是用户不同的场景'
                },
                {
                    title: '文章三',
                    date: '2016-04-02',
                    tag: 'Vue',
                    cate: '学习笔记',
                    content: 'Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的库。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架；如果你对使用 Vue.js 开发大型应用更感兴趣，查看构建大型应用。'
                },
                {
                    title: '文章四',
                    date: '2016-03-31',
                    tag: '前端',
                    cate: '学习笔记',
                    content: 'ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁。function f(x,y){return {x,y};}// 等同于function f(x,y){return {x:x,y:y};}上面是属性简写的例子，方法也可以简写var o = {method() {return "Hello!";}};// 等同var o = {method: function() {return "Hello!";}};'
                }
            ],
            pages:3
        })
    }
    export default {
        data() {
            return {
                articles: [],
                pages: null,
                error: null
            }
        },
        computed:{
        },
        beforeRouteEnter (to, from, next) {
            getArticles({name: to.name, page: to.params.page}, (err, {articles, pages})=> {
                if (err) {
                    next(false)
                }
                else {
                    next(vm=> {
                        vm.articles = articles
                        vm.pages = pages
                        console.log('路由守卫生效');
                    })
                }
            })
        },
        methods: {
            changePage(n) {
                this.$route.params.page = n;
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        },
        watch: {
            $route (to, from) {
                console.log('监听到路由变化')
                this.articles = null
                getArticles({name: this.$route.name, page: this.$route.params.page}, (err, {articles, pages}) => {
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.articles = articles
                        this.pages = pages
                    }
                })
            }
        }
    }
</script>

<style lang=less rel="stylesheet/less">
    .preview {
        text-align: center;
        position: relative;
        .posts-expand {
            .post-title {
                font-size: 26px;
                // word-break: break-word;
            }
            .post-meta {
                margin: 3px 0 60px 0;
                color: #999;
                font-size: 12px;
                a {
                    border-bottom: 1px solid #999;
                }
            }
            .post-body {
                text-align: justify;
            }
            .post-end {
                display: block;
                margin: 80px auto 60px;
                width: 8%;
                height: 1px;
                background: #ccc;
                text-align: center
            }
        }
        .pagination {
            margin: 120px 0 40px;
            text-align: center;
            border-top: 1px solid #eee;
            a {
                border-top: 1px solid #eee;
                transition-property: border-color;
                transition-duration: 0.2s;
                display: inline-block;
                position: relative;
                top: -1px;
                margin: 0 10px;
                padding: 0 10px;
                line-height: 30px;
                &:hover {
                    border-top-color: #222;
                    color: #222;
                }
            }
            a.current {
                color: #fff;
                background: #ccc;
                border-top-color: #ccc;
            }
        }
    }
</style>