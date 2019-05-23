export default function teacherReducer(
  state = {
    teachers: []
  }, action
) {
  switch(action.type) {
    case 'LOADING_TEACHERS':
    case 'FETCH_TEACHERS':
    default:
    return state;
  }
}
