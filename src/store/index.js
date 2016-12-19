/**
 * Created by qiankn on 2016/8/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {fetchPreview, getCate, getTag, getNum} from './api'

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
        fetchPreview: (page,success,fail) => {
            fetchPreview(pageidx)
                .then(
                    data => {commit('SET_LIST', data);success();},
                    error=>{fail(error)}
                )
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
        SET_LIST: (state, data) => {
            state.articles = data.articles;
            state.tags=data.tags;
            state.cates=data.cates;
            state.totalNum=data.totalNum;
            state.pages=data.pages
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

