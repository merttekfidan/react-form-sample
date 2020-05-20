function rootReducer(state, action) {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
      };

    default:
      return { state };
  }
}

export default rootReducer;
