import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { TestCaseComponent } from './test-case/test-case.component';


const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'test-case', component: TestCaseComponent },
  { path: '**', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
