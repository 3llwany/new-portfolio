import {Component, OnInit} from "@angular/core";
import {AssetsManager} from "app/shared/resources/assets_manager";
import { ProjectsComponent } from "../projects/projects.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
    standalone: true,
    imports: [BannerComponent, ProjectsComponent]
})
export class ProfileComponent implements OnInit {
  assetsManager = AssetsManager

  constructor() {
  }

  ngOnInit(): void {


  }


}
