import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.css']
})
export class MercuryComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.378;
  }
}
