import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
islogin:boolean;
 constructor(private route: ActivatedRoute, private router: Router) {
  this.router.events.subscribe((event) => {
    if (event.constructor.name === "NavigationEnd") {
      this.islogin =!(window.location.pathname.indexOf('login') >= 0 || window.location.pathname.length<=1);
      console.log(this.islogin);
    }
  })
  }
}