import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConnectionService } from '../../../core/services/connection.service';
import { MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid';
import { DatabasesTypesService } from '../../../core/services/databases-types.service';
import { Database } from '../../../core/model/Database';

@Component({
  selector: 'app-connection-form',
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './connection-form.component.html',
  styleUrl: './connection-form.component.scss'
})
export class ConnectionFormComponent {

  private fb = inject(FormBuilder);
  private connectionService = inject(ConnectionService);
  private databaseService = inject(DatabasesTypesService);
  private dialogRef = inject(MatDialogRef<ConnectionFormComponent>);

  databases = signal<Database[]>([]);

  ngOnInit(): void {
    this.databases.update(this.databaseService.getDatabases);
  }

  form = this.fb.group({
    name: ['', Validators.required],
    type: ['sqlserver', Validators.required],
    host: ['localhost',Validators.required],
    port: [1433, Validators.required],
    database: ['', Validators.required],
    user: [''],
  });

  selectDatabase(database: Database): void {
    if (database.defaultPort) {
      this.form.patchValue({ port: database.defaultPort });
    }
  }

  save(){
    if (this.form.invalid) return;

    this.connectionService.addConnection({
      id: uuid(),
      ...this.form.value,
      status: 'online'
    } as any);

    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close(false);
  }
}
