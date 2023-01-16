import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(private route: ActivatedRoute, private router: Router) { };

  ngOnInit(): boolean {
    if (this.router.url.startsWith("/user-information" || "")) {
      return false

    } else {
      return true
    }
  }


  backLink():void {
    if (this.router.url === "/selection-plan") {
      this.router.navigate(['/user-information'], { relativeTo: this.route.parent });
    }

    if (this.router.url === "/pick-add-ons") {
      this.router.navigate(['/selection-plan'], { relativeTo: this.route.parent });
    }

    if (this.router.url === "/finishing-up") {
      this.router.navigate(['/pick-add-ons'], { relativeTo: this.route.parent });
    }
  }


  nextLink():void {
    if (this.router.url === "/user-information") {
      this.router.navigate(['/selection-plan'], { relativeTo: this.route.parent });
    }

    if (this.router.url === "/selection-plan") {
      this.router.navigate(['/pick-add-ons'], { relativeTo: this.route.parent });
    }

    if (this.router.url === "/pick-add-ons") {
      this.router.navigate(['/finishing-up'], { relativeTo: this.route.parent });
    }

  }

  

}

