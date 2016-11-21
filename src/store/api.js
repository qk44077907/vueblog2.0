/**
 * Created by qiankn on 2016/11/16.
 */
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
export function fetchPageData(pageidx, {tag, cate, any, all}) {
    if (all) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                var pageData = []
                for (var i = 0; i++; i < 4) {
                    pageData.push(Object.assign({}, data[(pageidx - 1) * 4 + i]))
                }
                resolve(pageData)
            }, Math.random() * 1000)
        })
    }
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
