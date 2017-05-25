import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//  template: `
  //<app-server> </app-server> 
  //<app-server> </app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Testserver";
  programmerName ="";
  allowProgrammerName = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  details = "";
  detailsActivated = false;
  clickCount = [];
  counter: number = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  createServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  displayDetails(){
    this.detailsActivated = true;
    this.details = "Secret Pasword: = tuna";
    this.clickCount.push(this.counter + " Button clicked at: " + new Date());
    this.counter += 1;
  }

  updateServerName(event: any){
   this.serverName = (<HTMLInputElement>event.target).value;
  }

onUpdateInput(event: Event){
  this.allowProgrammerName = this.programmerName === "" ? false: true;
}

  resetProgrammerName(event: any) {
    this.programmerName = "";
  }

  getColor(index){
    return index >= 5 ? 'blue' : 'green';
  }

}