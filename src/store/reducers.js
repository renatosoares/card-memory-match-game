import { CLOSE_CARDS, LOCK, OPEN_CARD, SET_MATCH } from "./actions";

const initialState = {
  isLocked: false,
  cards: [
    { id: 1, key: 1, name: "Card 1", isActive: false, hasMatch: false },
    { id: 2, key: 2, name: "Card 2", isActive: false, hasMatch: false },
    { id: 3, key: 3, name: "Card 3", isActive: false, hasMatch: false },
    { id: 1, key: 4, name: "Card 1", isActive: false, hasMatch: false },
    { id: 2, key: 5, name: "Card 2", isActive: false, hasMatch: false },
    { id: 3, key: 6, name: "Card 3", isActive: false, hasMatch: false },
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCK:
      return {
        ...state,
        isLocked: true,
      };
    case OPEN_CARD: {
      const cards = state.cards.slice();

      cards[action.index].isActive = true;

      return {
        ...state,
        cards,
      };
    }
    case SET_MATCH: {
      const cards = state.cards.slice();

      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      return {
        ...state,
        cards,
      };
    }
    case CLOSE_CARDS: {
      const cards = state.cards.slice();

      cards[action.index1].isActive = false;
      cards[action.index2].isActive = false;

      return {
        ...state,
        isLocked: false,
        cards,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;