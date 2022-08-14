import ACTION from '../actions/actionTypes';

const initialState = {
  transactions: [],
  isFetching: false,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION.GET_TRANSACTIONS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION.GET_TRANSACTIONS_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        isFetching: false,
        transactions: [...data],
      };
    }
    case ACTION.GET_TRANSACTIONS_ERROR: {
      const { err } = action;

      return {
        ...state,
        isFetching: false,
        error: err,
      };
    }

    default:
      return state;
  }
};

export default transactionsReducer;
