import { Component, OnInit } from '@angular/core';
import { DataService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public data: any = {};
  public errorMessage: any;

  constructor( public dataService: DataService) {  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(
        data => this.data = data,
        error =>  this.errorMessage = <any>error);
  }
}
