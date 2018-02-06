import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.css']
})
export class UranusComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.889;
  }
}
