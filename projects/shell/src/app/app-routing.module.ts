import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginContainerComponent,
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3004/loginEntry.js',
            exposedModule: './login-module',
          }).then(m => m.LoginModule),
      },
      {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
            loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:3002/dashboardEntry.js',
              exposedModule: './dashboard-module',
            }).then(m => m.DashboardModule),
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
