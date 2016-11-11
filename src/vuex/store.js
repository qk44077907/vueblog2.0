/**
 * Created by qiankn on 2016/8/2.
 */
const state = {
    // When the app starts, count is set to 0
    count: 0
}

const mutations = {
    // A mutation receives the current state as the first argument
    // You can make any modifications you want inside this function
    INCREMENT (state, amount) {
        state.count = state.count + amount
    }
}