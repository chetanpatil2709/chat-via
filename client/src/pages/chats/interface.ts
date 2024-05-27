export interface IUserDetails {
  _id?: unknown;
  username?: string;
  profilePic?: string;
  lastMsg?: string;
  lastMsgTime?: string;
}
export interface IAllChats {
  status: number;
  users?: IUserDetails[] | [] | undefined;
}
export interface IMessage {
  msg?: string;
  sender?: boolean;
  time?: string;
}
export interface IMessageProps {
  data: IMessage;
}

export interface IGroupList {
  name: string;
}
export interface IPropsGroupHeads {
  data: IGroupList;
}
