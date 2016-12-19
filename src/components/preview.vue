<template>
    <div class="preview" :key="$route.path">
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
    import {mapMutations,mapState} from 'vuex'
    import {fetchPreview} from '../store/api'
    export default {
        data() {
            return {
                error: null
            }
        },
        computed: {
                ...mapState([
                        'articles',
                        'pages'
                ])
        },
        beforeRouteEnter (to, from, next) {
            fetchPreview(to.params.page)
                    .then(data=> {
                        next(vm=> {
                            console.log('路由守卫生效');
                            vm.SET_LIST(data);
                        })
                    })
                    .catch((error)=> {
                        console.log(error.toString())
                        next(false);
                    })
        },
        methods: {
            changePage(n) {
                this.$route.params.page = n;
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            ...mapMutations([
                'SET_LIST'
            ])
        },
        watch: {
            /*$route () {
                fetchPreview(this.params.page)
                        .then(data=> {
                            next(vm=> {
                                console.log('路由守卫生效');
                                vm.SET_LIST(data);
                            })
                        })
                        .catch((error)=> {
                            next(false);
                        })
            }*/
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