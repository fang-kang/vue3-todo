export interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

export interface IState {
  list: ITodo[];
}

export enum TODO_STATUS {
  WILLDO = "willdo",
  DOING = "doing",
  FINISHED = "finshed",
}
