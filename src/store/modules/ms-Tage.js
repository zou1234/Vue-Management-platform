export default {
  /**
   * @desc 标签数据
   */
  state: {
      allTage:[]
  },
  mutations:{
    GETNEWTAGE(state,newTage){
      sessionStorage.allTage = JSON.stringify(newTage)
      state.allTage = newTage
    }
  },
}
