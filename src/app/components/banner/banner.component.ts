import {Component, OnInit} from '@angular/core';
import {AssetsManager} from "app/shared/resources/assets_manager";
import {ISocialLinks, SOCIALLINKS} from "app/components/banner/social-links";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  assetsManager = AssetsManager;
  socialLinks: ISocialLinks[]

  constructor() {
  }

  ngOnInit(): void {
    this.socialLinks = SOCIALLINKS;
  }

}
