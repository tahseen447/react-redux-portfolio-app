import { combineReducers } from 'redux'
import studentReducer from './student_reducer'
import teacherReducer from './teacher_reducer'

const rootReducer = combineReducers({
  students: studentReducer,
  teachers: teacherReducer
})

export default rootReducer;
