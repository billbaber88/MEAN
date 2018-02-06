import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.377;
  }
}
