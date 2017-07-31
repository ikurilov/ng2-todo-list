import uuid_v4 from 'uuid/v4';
export class Todo {
  id: string;
  constructor(public text, public completed = false) {
    this.id = uuid_v4();
  }
}
