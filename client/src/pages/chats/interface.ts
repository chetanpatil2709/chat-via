export interface IList {
  name: string;
  image: string;
  lastMsg: string;
  lastMsgTime: string;
}

export interface IPropsChatHeads {
  data: IList;
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
