/**
 * Created by qiankn on 2016/11/16.
 */
import axios from 'axios'
import data from './mockData'
//返回某个标签的种类及数量，形式为对象
function filterAttr(name) {
    var temp = {};
    for (var i = 0; i < data.length; i++) {
        var tmp = data[i][name];
        if (!temp.hasOwnProperty(tmp)) {//hasOwnProperty用来判断一个对象是否有你给出名称的属性或对象
            temp[tmp] = 1;
        }
        else {
            temp[tmp]++;
        }
    }
    return temp;
}
export function fetchPreview(pageidx) {
    return axios.get(`http://192.168.1.71:8081/api/preview/${pageidx}`)
}
export function getCate() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(filterAttr('cate'))
        }, Math.random() * 1000)
    })
}
export function getTag() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(filterAttr('tag'))
        }, Math.random() * 1000)
    })
}
export function getNum() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(data.length)
        }, Math.random() * 1000)
    })
}
