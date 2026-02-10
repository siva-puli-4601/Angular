import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'about', component:AboutComponent},
  {path:'login',component:LoginComponent},
   {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  // { path: 'profile/:id', component: ProfileComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default
  { path: '**', redirectTo: 'home' } // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
