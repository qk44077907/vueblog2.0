/**
 * Created by qiankn on 2016/8/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {fetchPageData, getCate, getTag, getNum} from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: [],
        pages:0,
        tags: {},
        cates: {},
        totalNum: 0
    },

    actions: {
        // ensure data for rendering given list type
        fetchPageData: ({commit}) => {
            fetchPageData(pageidx)
                .then(articles => commit('SET_LIST', articles))
        },
        getCate: ({commit})=> {
            getCate()
                .then(cates => commit('SET_CATE', cates))
        },
        getTag: ({commit})=> {
            getTag()
                .then(tags => commit('SET_TAG', tags))
        },
        getNum: ({commit})=> {
            getNum()
                .then(num => commit('SET_NUM', num))
        },
    },

    mutations: {
        SET_LIST: (state, articles) => {
            state.articles = articles
        },
        SET_CATE: (state, cates) => {
            state.cates = cates
        },
        SET_TAG: (state, tags) => {
            state.tags = tags
        },
        SET_NUM: (state, num) => {
            state.totalNum = parseInt(num);
        },
    }
})

export default store

