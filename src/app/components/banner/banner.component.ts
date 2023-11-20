import {Component, OnInit} from '@angular/core';
import {AssetsManager} from "app/shared/resources/assets_manager";
import {ISocialLinks, SOCIALLINKS} from "app/components/banner/social-links";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
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
