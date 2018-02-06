import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.component.html',
  styleUrls: ['./neptune.component.css']
})
export class NeptuneComponent implements OnInit {
  @Input() weight;

  constructor() { }

  ngOnInit() {
  }

    ngOnChanges() {
      this.weight = this.weight * 1.125;
    }
}
