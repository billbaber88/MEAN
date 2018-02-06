import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slot-machines',
  templateUrl: './slot-machines.component.html',
  styleUrls: ['./slot-machines.component.css']
})
export class SlotMachinesComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

 spin(sender: string){
  this._dataService.spin(sender);
 }

}
