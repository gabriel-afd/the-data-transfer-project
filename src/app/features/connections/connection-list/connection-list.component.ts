import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ConnectionService } from '../../../core/services/connection.service';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConnectionFormComponent } from '../connection-form/connection-form.component';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-connection-list',
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule, MatDialogModule, MatIcon],
  templateUrl: './connection-list.component.html',
  styleUrl: './connection-list.component.scss'
})
export class ConnectionListComponent {

  private connectionService = inject(ConnectionService);
  private dialog = inject(MatDialog);

  connections = this.connectionService.connections;

  displayedColumns = ['name','type','host','database','status'];

  openNewConnectionDialog(): void {
    this.dialog.open(ConnectionFormComponent, {
      width: '720px',
      maxWidth: '95vw',
      autoFocus: false
    });
  }

}
