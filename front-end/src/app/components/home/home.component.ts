import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskModel } from 'src/models/tasks.model';
import { UserModel } from 'src/models/users.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  task!: TaskModel;
  user!: UserModel;
  isFormVisible = false;
  lastCreatedTaskId: number | null = null;
  constructor(
    private auth: AuthService,
    private router: Router,
    private taskService: TasksService
  ) {}

  tasks: TaskModel[] = [];
  colors: string[] = ['#fec971', '#fe9b72', '#e4ef8f', '#b693fd', '#00d4fe'];

  ngOnInit(): void {
    this.task = new TaskModel();
    this.user = new UserModel();

    this.loadTasks();
    this.getDataUser();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.taskService.createTask(this.task).subscribe(
      (data: TaskModel) => {
        // Asignar color a la nueva tarea
        const newTask = {
          ...data,
          color: this.colors[this.tasks.length % this.colors.length],
        };

        // Guardar el ID de la última tarea creada
        this.lastCreatedTaskId = newTask.id;

        // Agregar la nueva tarea a la lista de tareas
        this.tasks.push(newTask);

        // Limpiar el formulario y ocultar el formulario de creación
        this.task = new TaskModel(); // Reinicia el formulario
        this.isFormVisible = false;
      },
      (err) => {
        console.log('Error al crear la tarea:', err);
      }
    );
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks: TaskModel[]) => {
      this.tasks = tasks.map((task, index) => ({
        ...task,
        color: this.colors[index % this.colors.length],
      }));
    });
  }

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  isPending = false;
  isComplete = false;
  isInProgress = false;

  updateStatus(task: TaskModel, status: string) {
    let formattedStatus;
    switch (status) {
      case 'Pending':
        formattedStatus = 'pending';
        break;
      case 'Completed':
        formattedStatus = 'completed';
        break;
      case 'In Progress':
        formattedStatus = 'in_progress';
        break;
      default:
        formattedStatus = status.toLowerCase().replace(' ', '_');
    }

    this.taskService.updateStatus(task.id, formattedStatus).subscribe(
      (response) => {
        task.status = formattedStatus;
        console.log('Estado actualizado:', task.status);
      },
      (error) => {
        console.error('Error updating task status', error);
      }
    );
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        // Elimina la tarea de la lista localmente si la solicitud es exitosa
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      (error) => {
        console.error('Error deleting task', error);
      }
    );
  }

  onUpdateTask(form: NgForm): void {
    const updatedTask: any = {
      title: this.task.title,
      description: this.task.description,
      dueDate: this.task.dueDate,
    };

    this.taskService.updateTask(this.task.id, updatedTask).subscribe(
      (response) => {
        this.loadTasks(); // Recarga las tareas para reflejar los cambios.
        form.reset();
      },
      (error) => {
        console.error('Error al actualizar la tarea', error);
      }
    );
  }

  openEditModal(task: TaskModel): void {
    this.task = { ...task }; // Carga los datos de la tarea en el formulario.
  }

  // para agregar animacion a la ultima tarea creada
  isNewTask(task: TaskModel): boolean {
    return this.lastCreatedTaskId === task.id;
  }

  // data del usuario en sesion
  getDataUser() {
    this.auth.getProfile().subscribe(
      (profileData: UserModel) => {
        this.user.name = profileData.name;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }
}
