import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.css']
})
export class SaturnComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.916;
  }
}
