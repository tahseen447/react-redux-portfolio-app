export default function studentReducer(
  state = [] , action
) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return action.payload ;
    case 'LOADING_STUDENTS':
      return state;
    case 'UPDATE_STUDENT_SUCCESS' :
        let index = state.findIndex((obj => obj.id === action.payload.id));
        return [...state.slice(0, index), action.payload, ...state.slice(index+1)];
    default:
    return state;
  }
}
