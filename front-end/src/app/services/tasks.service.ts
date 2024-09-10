import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModel } from 'src/models/tasks.model';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  createTask(task: TaskModel) {
    const taskData = task;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(`http://localhost:3000/tasks/create`, taskData, {
      headers,
    });
  }

  getTasks() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('http://localhost:3000/tasks/me', { headers });
  }
  updateStatus(taskId: number, status: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = { status };

    return this.http.patch(
      `http://localhost:3000/tasks/update/${taskId}`,
      body,
      { headers }
    );
  }

  deleteTask(taskId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete(`http://localhost:3000/tasks/delete/${taskId}`, {
      headers,
    });
  }

  updateTask(taskId: number, updatedTask: TaskModel) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(
      `http://localhost:3000/tasks/update/${taskId}`,
      updatedTask,
      { headers }
    );
  }
}
