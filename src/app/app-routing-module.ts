import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './Employee/EmployeeComponent';
import { HomeComponent } from './Home/homeComponent';

const routes: Routes = [
    {
        path: 'employees', component: EmployeeComponent,
    },
    {
        path: '', component: HomeComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [EmployeeComponent, HomeComponent];