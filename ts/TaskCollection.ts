import { Task } from "./Task";

export class TaskCollection {
  private tasks: Task[] = []; // タスクを格納する配列

  add(task: Task) {
    this.tasks.push(task);
  }
}
