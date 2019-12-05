import { mainTheme } from '../theme';

export default function themeReducer(state = { theme: mainTheme }, action) {
  console.log(action.type);

  switch (action.type) {
    case 'CHANGE_THEME':
      console.log('asdasdasd');
      console.log(action.theme.maincolor);
      return { theme: action.theme };
    default:
      return state;
  }
}
