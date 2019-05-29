export default function teacherReducer(
  state = {
    teachers: []
  }, action
) {
  console.log(action.paylod)
  switch(action.type) {
    case 'FETCH_TEACHERS':
      console.log(state.teachers)
      return {...state, teachers: action.payload}
      case 'LOADING_TEACHERS':
      console.log("loading teachers");
    default:
    return state;
  }
}
