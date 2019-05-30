export default function teacherReducer(
  state = [] , action
) {
  console.log(action.paylod)
  switch(action.type) {
    case 'FETCH_TEACHERS':
      console.log(state.teachers)
      return action.payload
      case 'LOADING_TEACHERS':
      console.log("loading teachers");
      return state;
    default:
    return state;
  }
}
