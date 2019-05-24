export default function studentReducer(
  state = {
    students: []
  }, action
) {
  switch(action.type) {
    case 'LOADING_STUDENTS':
    console.log("loading students")
    case 'FETCH_STUDENTS':
    console.log("fetching students", action.payload)
      return {...state, students: action.payload}
    default:
    return state;
  }
}
