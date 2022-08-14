const initialState = {
  transactions: [],
  isFetching: false,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default transactionsReducer;
