import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "app/components/profile/profile.component";

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    //  {
    //     path: 'pages',
    //     loadChildren: () => import('../../pages/content-pages/content-pages.module').then(m => m.ContentPagesModule)
    // }
    // {
    //     path: "",
    //     component: ProfileComponent,
    // },
];
