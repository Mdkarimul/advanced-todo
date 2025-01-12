export interface Todo {
    title:string,
    description:string
}

export interface Task {
    description: string;
    end_date: Timestamp;
    priority: "low" | "medium" | "high";
    remainder: boolean;
    start_date: Timestamp;
    status: "pending" | "in_progress" | "completed" | "dued";
    title: string;
  }
  
 export interface Timestamp {
    seconds: number;
    nanoseconds: number;
  }
  