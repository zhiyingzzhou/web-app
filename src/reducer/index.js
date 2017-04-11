import { combineReducers } from 'redux';
import User from './user';
import History from './history';
import Job from './job';
import Company from './company';
import Collection from './collection';

const rootReducer = combineReducers({
  User,
  History,
  Job,
  Company,
  Collection
});

export default rootReducer;
