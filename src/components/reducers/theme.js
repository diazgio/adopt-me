export default function theme(state = "peru", action) {
  if(action.type === 'CHANGE_THEME') {
    return action.payload;
  } else {
    return state;
  }
}
