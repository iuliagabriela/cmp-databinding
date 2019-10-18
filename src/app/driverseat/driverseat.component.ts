import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driverseat',
  templateUrl: './driverseat.component.html',
  styleUrls: ['./driverseat.component.css']
})
export class DriverseatComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
