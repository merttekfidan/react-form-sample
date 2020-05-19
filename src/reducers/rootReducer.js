function rootReducer(state, action) {
  switch (action.type) {
    case "TEST":
      return { title: action.title };
    default:
      return { state };
  }
}

export default rootReducer;
