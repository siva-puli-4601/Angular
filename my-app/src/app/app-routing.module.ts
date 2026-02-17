import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'about', component:AboutComponent},
  {path:'dashboard',component:DashboardComponent,

    children:
    [
      {path:'profile', component:ProfileComponent},
      {path:'settings',component:SettingsComponent},
      {path:"",redirectTo:'profile',pathMatch:'full'}
    ]

    
  },

  // { path: 'profile/:id', component: ProfileComponent },

  // { path: '', redirectTo: 'home', pathMatch: 'full' }, // default
  { path: '**', redirectTo: 'home' } // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
