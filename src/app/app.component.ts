import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectionListComponent } from './features/connections/connection-list/connection-list.component';
import { ConnectionFormComponent } from './features/connections/connection-form/connection-form.component';
import { JobListComponent } from './features/jobs/job-list/job-list.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnectionListComponent, JobListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-data-transfer-project';
}
