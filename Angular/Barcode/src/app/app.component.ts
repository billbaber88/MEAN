import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boxArray = [];

  // y<10 because it's filling in 10 boxes. 
  fill() {
    for (let y = 0; y < 25; y++){
      const randNum = (Math.floor(Math.random() * 9)) + 1;
      if (randNum === 1) {
        this.boxArray.push('olive');
      } else if (randNum === 2) {
        this.boxArray.push('salmon');
      } else if (randNum === 3) {
        this.boxArray.push('yellow');
      } else if (randNum === 4) {
        this.boxArray.push('brown');
      } else if (randNum === 5) {
        this.boxArray.push('lightgreen');
      } else if (randNum === 6) {
        this.boxArray.push('crimson');
      } else if (randNum === 7) {
        this.boxArray.push('teal');
      } else if (randNum === 8) {
        this.boxArray.push('gray');
      } else if (randNum === 9) {
        this.boxArray.push('purple');
      } else if (randNum === 10) {
        this.boxArray.push('plum');
      }
    }
  }

  addUno() {
    for (let y = 0; y < 1; y++){
      const randNum = (Math.floor(Math.random() * 9)) + 1;
      if (randNum === 1) {
        this.boxArray.push('Blue');
      } else if (randNum === 2) {
        this.boxArray.push('Red');
      } else if (randNum === 3) {
        this.boxArray.push('Green');
      } else if (randNum === 4) {
        this.boxArray.push('Orange');
      } else if (randNum === 5) {
        this.boxArray.push('Yellow');
      } else if (randNum === 6) {
        this.boxArray.push('Purple');
      } else if (randNum === 7) {
        this.boxArray.push('Black');
      } else if (randNum === 8) {
        this.boxArray.push('pink');
      } else if (randNum === 9) {
        this.boxArray.push('Pink');
      } else if (randNum === 10) {
        this.boxArray.push('Tan');
      }
    }
  }

  ngOnInit() {
    this.fill();
  }

  add() {
    this.addUno();
  }

}
