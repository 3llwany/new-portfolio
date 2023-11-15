import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "app/components/profile/profile.component";

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
	// {
	//   path: 'page',
	//   loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
	// }

	{
		path: "profile",
		component: ProfileComponent,
	},
];
