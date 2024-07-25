import { Component } from '@angular/core';

export interface task {
  id: number;
  content: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  inputValue = '';
  newValue = '';
  cnt = 0;
  tasks: task[] = [];
  showEditInput = false;

  addTask() {
    if (this.inputValue.length) {
      this.tasks.push({
        id: this.cnt,
        content: this.inputValue,
      });
      this.cnt++;
      this.inputValue = '';
    }
  }

  deleteTask(curTask: task) {
    this.tasks = this.tasks.filter((task) => task.id !== curTask.id);
  }
  showEdit() {
    this.showEditInput = true;
  }
  editTask(curTask: task, newValue: string) {
    if (newValue.length) {
      this.tasks.map((task) => {
        if (task.id === curTask.id) task.content = newValue;
      });
      this.newValue = '';
      this.showEditInput = false;
    }
  }
}
