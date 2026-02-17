import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task, TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   tasks: Task[] = [];
  loading = false;
  errorMsg = '';
  constructor(private route:Router, private navigate:ActivatedRoute, private service:TaskService)
  {

  }
  ngOnInit() {
    this.loadTasks();
//   const obs$ = new Observable<number>((observer) => {
//   console.log('Observable started');

//   observer.next(1);
//   observer.next(2);
//   observer.next(3);

//   observer.complete();
// });

// obs$.subscribe({
//   next: value => console.log('Received:', value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });
}

loadTasks() {
    this.loading = true;

    this.service.getTasks().subscribe({
      next: data => {
        this.tasks = data.slice(0, 5);
        this.loading = false;
      },
      error: err => {
        this.errorMsg = err;
        this.loading = false;
      },
      complete: () => console.log('API completed')
    });
  }


// this.router.navigate(['/profile'], {
//   queryParams: { role: 'admin', active: true }
// });

// /profile?role=admin&active=true


// this.route.queryParams.subscribe(params => {
//   console.log(params['role']);
// });



  // getProfile()
  // {
  //   this.route.navigate(["/profile"]);
  // }
  // title = 'my-app';


  

}
