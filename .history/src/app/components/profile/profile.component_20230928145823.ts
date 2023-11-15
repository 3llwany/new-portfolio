import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
	socialLinks = [
		{
			url: "https://www.facebook.com/3llwaNy",
			btn: "btn-facebook",
			icon: "fa fa-facebook",
		},
		{
			url: "https://twitter.com/3llwaNy",
			btn: "btn-twitter",
			icon: "fa fa-twitter",
		},
		{
			url: "mailto:sayedelwany03@gmail.com",
			btn: "btn-google",
			icon: "fa fa-google",
		},
		{
			url: "https://api.whatsapp.com/send?phone=01117731605",
			//	url: "https://wa.me/+201117731605",
			btn: "btn-success",
			icon: "fa fa-whatsapp",
		},
		{
			url: "https://github.com/3llwany",
			btn: "btn-dark",
			icon: "fa fa-github",
		},
	];
}
