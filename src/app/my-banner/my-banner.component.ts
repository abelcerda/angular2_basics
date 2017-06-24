import { Component, OnInit } from '@angular/core';
import { CommonLabelsService } from '../services';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-my-banner',
  templateUrl: './my-banner.component.html',
  styleUrls: ['./my-banner.component.css'],
  providers: [InfoService]
})
export class MyBannerComponent implements OnInit {
  public subtitle: string = '';

  constructor(public commonLabelsService: CommonLabelsService, public infoService: InfoService) { }

  ngOnInit() {
    this.subtitle = `${this.commonLabelsService.getSubtitle()} [created at: ${this.infoService.getDate()}]`;
  }

}
