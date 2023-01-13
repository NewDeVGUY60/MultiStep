import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {};

  firstPage:boolean = false;

  ngOnInit() {
    if (this.router.url.startsWith("/user-information" || "")) {
      this.firstPage = true
    }else{
      this.firstPage = false
    }
  }
}
