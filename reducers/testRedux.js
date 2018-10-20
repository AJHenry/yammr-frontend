import { TEST_REDUX } from '../config/constants';

const initialState = {
  test_count: 0,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_REDUX:
      return { ...state, test_count: state.test_count++ };
    default:
      return state;
  }
};
