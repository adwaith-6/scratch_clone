import { ADD_LIST, SET_LIST } from "./types";

const initialState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      const updatedLists = state.midAreaLists.map((list) => {
        if (list.id === action.id) {
          return { ...list, comps: action.list };
        }
        return list;
      });
      return {
        ...state,
        midAreaLists: updatedLists,
      };

    case ADD_LIST:
      const newList = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      return {
        ...state,
        midAreaLists: [...state.midAreaLists, newList],
      };

    default:
      return state;
  }
};
