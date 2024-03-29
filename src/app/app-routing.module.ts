import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        // component: HomeComponent,
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    { 
        path: '**', 
        loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
