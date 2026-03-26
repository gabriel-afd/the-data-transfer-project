import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { JobService } from '../../../core/services/job.service';
import { JobFormComponent } from '../job-form/job-form.component';
import { MatButton } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";


@Component({
  selector: 'app-job-list',
  imports: [CommonModule, MatDialogModule, MatProgressBarModule, MatButton, MatIconModule, MatTableModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {

  private jobService  = inject(JobService);
  private dialog = inject(MatDialog);

  jobs = this.jobService.jobs;

  openDialog(){
    this.dialog.open(JobFormComponent, {
      width: '720px',
      maxWidth: '95vw',
      autoFocus: false
    });
  }
}
