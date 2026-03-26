import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { JobService } from '../../../core/services/job.service';
import { ConnectionService } from '../../../core/services/connection.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-job-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent {

  private fb = inject(FormBuilder);
  private jobService = inject(JobService);
  private connectionService = inject(ConnectionService);
  private dialogRef = inject(MatDialogRef<JobFormComponent>);

  connections = this.connectionService.connections;

  form = this.fb.group({
    sourceConnectionId: ['', Validators.required],
    targetConnectionId: ['', Validators.required],
    tables: [''],
    mode: ['full', Validators.required],
    schema: ['create', Validators.required],
    truncate: [true],
  });

  save(){
    if(this.form.invalid) return;

    const { sourceConnectionId, targetConnectionId } = this.form.value;

    if (sourceConnectionId === targetConnectionId) {
      alert('Origem e destino não podem ser iguais');
      return;
    }

    const source = this.connections().find(c => c.id === sourceConnectionId);
    const target = this.connections().find(c => c.id === targetConnectionId);

    const route = `${source?.name} → ${target?.name}`;

    this.jobService.createJob({
      ...this.form.value,
      route
    } as any);

    this.dialogRef.close(true);

  }

  close() {
    this.dialogRef.close(false);
  }
}
