import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chores',
  templateUrl: './card-chores.component.html',
  styleUrl: './card-chores.component.css'
})
export class CardChoresComponent {
  tasks: { text: string; done: boolean }[] = [];

  ngOnInit() {
  const saved = localStorage.getItem('tasks');
  this.tasks = saved ? JSON.parse(saved) : [{ text: '', done: false }];
  }

   onTaskInput(index: number) {
    const task = this.tasks[index];

      if (index === this.tasks.length - 1 && task.text.trim() !== '') {
        this.tasks.push({ text: '', done: false });
      }
       this.saveTasks();
  }

    
    removeTask(index: number) {
    if (this.tasks.length > 1) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }

    saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}

