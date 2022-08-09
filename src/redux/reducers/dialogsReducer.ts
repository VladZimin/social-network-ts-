import { ActionsTypes, DialogsPageType } from "../state";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

export type DialogsActionsType =
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof updateMessageText>;

const initialState = {
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine! U?" },
    { id: 4, message: "Good!" },
  ],
  dialogsData: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Vlad" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Viktor" },
    { id: 5, name: "Vadim" },
    { id: 6, name: "Kolya" },
  ],
  newMessageText: "",
};

export const dialogsReducer = (
  state: DialogsPageType = initialState,
  { type, payload }: ActionsTypes
) => {
  switch (type) {
    case SEND_MESSAGE:
      state.messagesData.push({ id: 5, message: payload });
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = payload;
      return state;
    default:
      return state;
  }
};

export const sendMessage = (payload: string) =>
  ({
    type: SEND_MESSAGE,
    payload,
  } as const);
export const updateMessageText = (payload: string) =>
  ({
    type: UPDATE_MESSAGE_TEXT,
    payload,
  } as const);