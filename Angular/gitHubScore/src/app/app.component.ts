import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists: boolean = null;
  score: number = 0;
  username: string = null;

  constructor(private dataservice: DataService){}

  calculateScore(form: NgForm) {
    this.username = form.value.username;

    this.dataservice.retrieveUser(this.username).subscribe( gituser => {
      this.userExists = true;
      this.score = gituser.public_repos + gituser.followers;
      console.log(this.score)
      form.reset();
    },
  (response: Response) => this.userExists = false
  );
  }
}
