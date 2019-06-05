import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headache',
  templateUrl: './headache.component.html',
  styleUrls: ['./headache.component.css']
})
export class HeadacheComponent implements OnInit {

  TheDate = Date.now();
  public angcaracs:string [];

  constructor() { }
    
  ngOnInit() {
    this.angcaracs=[
      "Lunes",
      "Martes"
    ];
  }

}
