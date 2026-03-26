import { Routes } from '@angular/router';
import { ConnectionListComponent } from './features/connections/connection-list/connection-list.component';
import { JobListComponent } from './features/jobs/job-list/job-list.component';

export const routes: Routes = [

  { path: '', redirectTo: 'connections', pathMatch: 'full' },
  { path: 'connections', component: ConnectionListComponent },
  { path: 'jobs', component: JobListComponent }
];
