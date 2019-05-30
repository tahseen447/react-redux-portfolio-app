export default function teacherReducer(
  state = [] , action
) {
  switch(action.type) {
    case 'FETCH_TEACHERS':
      return action.payload
    case 'LOADING_TEACHERS':
      return state;
    case 'UPDATE_STUDENT_SUCCESS':
      return state.concat(action.payload);
    default:
    return state;
  }
}
