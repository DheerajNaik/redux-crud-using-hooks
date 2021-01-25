const initialState = {
  data: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.payload)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((item) => item.id !== action.payload.id),
          { message: action.payload.message, id: action.payload.id },
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;
