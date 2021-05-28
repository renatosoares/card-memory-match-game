import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  cards: [
    { id: 1, key: 1, name: "Card 1" },
    { id: 2, key: 2, name: "Card 2" },
    { id: 3, key: 3, name: "Card 3" },
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      const cards = state.cards.slice();
      const index = cards.findIndex((c) => c.key === action.key);

      if (index > -1) {
        cards[index].isActive = true;
      }

      return {
        ...state,
        cards,
      };
    default:
      return state;
  }
};

const store = createStore(gameReducer, composeWithDevTools());

export default store;
