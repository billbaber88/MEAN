import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.css']
})
export class VenusComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 0.907;
  }
}
