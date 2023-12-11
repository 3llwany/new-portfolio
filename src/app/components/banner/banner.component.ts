import {Component, OnInit} from '@angular/core';
import {AssetsManager} from "app/shared/resources/assets_manager";
import {ISocialLinks, SOCIALLINKS} from "app/components/banner/social-links";
import {DeviceDetectorService} from "ngx-device-detector";
import {CounterComponent} from '../counter/counter.component';
import {NgFor, NgClass,} from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [NgClass, CounterComponent, NgFor]
})
export class BannerComponent implements OnInit {
  assetsManager = AssetsManager;
  socialLinks: ISocialLinks[]

  constructor(public deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.socialLinks = SOCIALLINKS;
  }

}
