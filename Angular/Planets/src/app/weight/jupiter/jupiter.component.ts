import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.css']
})
export class JupiterComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.weight = this.weight * 2.364;
  }
}
