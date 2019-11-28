import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import rootReducer from './reducers/root';

export const store = createStore();
export const persistor = persistStore(store);