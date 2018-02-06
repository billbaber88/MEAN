import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pluto',
  templateUrl: './pluto.component.html',
  styleUrls: ['./pluto.component.css']
})
export class PlutoComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.067;
  }
}
