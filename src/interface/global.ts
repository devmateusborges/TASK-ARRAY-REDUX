export interface Task {
  method: "new" | "update" | "delete";
  type: "toStart" | "toProgress" | "toClosed";
  id: string;
  task: string;
}
