import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boxArray = [];
  

  addBox(color: string) {
    if (color === "blue") {
      console.log("clicked blue!")
      this.boxArray.push('Blue');
    } else if (color === "red") {
      this.boxArray.push('Red');
    } else if (color === "green") {
      this.boxArray.push('Green');
    } else if (color === "orange") {
      this.boxArray.push('Orange');
    } else if (color === "yellow") {
      this.boxArray.push('Yellow');
    } else if (color === "purple") {
      this.boxArray.push('Purple');
    } else if (color === "brown") {
      this.boxArray.push('Brown');
    } else if (color === "black") {
      this.boxArray.push('Black');
    } else if (color === "white") {
      this.boxArray.push('White');
    } else if (color === "grey") {
      this.boxArray.push('grey');
    }
  }

  reset(){
    this.boxArray = [];
  }
  
  ngOnInit() {
    
  }

}
