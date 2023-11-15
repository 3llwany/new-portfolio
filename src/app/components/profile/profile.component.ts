import {Component, OnInit} from "@angular/core";
import {AssetsManager} from "app/shared/resources/assets_manager";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  assetsManager = AssetsManager

  constructor() {
  }

  ngOnInit(): void {


  }


}
