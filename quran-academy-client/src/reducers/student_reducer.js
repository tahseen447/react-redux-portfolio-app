export default function studentReducer(
  state = {
    students: []
  }, action
) {
  switch(action.type) {
    case 'LOADING_STUDENTS':
    case 'FETCH_STUDENTS':
    default:
    return state;
  }
}
