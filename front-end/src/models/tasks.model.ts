export class TaskModel {
  id: number;
  title!: string;
  description!: string;
  status: 'pending' | 'completed' | 'in_progress';
  dueDate!: string;
  color: string;
}
