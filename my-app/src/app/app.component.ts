import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route:Router, private navigate:ActivatedRoute)
  {

  }
  ngOnInit() {
  const id = this.navigate.snapshot.paramMap.get('id');
  console.log(id);
}


// this.router.navigate(['/profile'], {
//   queryParams: { role: 'admin', active: true }
// });

// /profile?role=admin&active=true


// this.route.queryParams.subscribe(params => {
//   console.log(params['role']);
// });



  getProfile()
  {
    this.route.navigate(["/profile"]);
  }
  title = 'my-app';
}
