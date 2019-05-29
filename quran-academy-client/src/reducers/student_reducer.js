export default function studentReducer(
  state = {
    students: []
  }, action
) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
    console.log("fetching students", action.payload)
      return {...state, students: action.payload}
      case 'LOADING_STUDENTS':
      console.log("loading students")
    default:
    return state;
  }
}
