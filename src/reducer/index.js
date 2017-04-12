import { combineReducers } from 'redux';
import User from './user';
import History from './history';
import Job from './job';
import Company from './company';
import Collection from './collection';
import Resume from './resume';

const rootReducer = combineReducers({
  User,
  History,
  Job,
  Company,
  Collection,
  Resume
});

export default rootReducer;
