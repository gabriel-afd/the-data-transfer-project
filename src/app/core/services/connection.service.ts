import { Injectable, signal } from '@angular/core';
import { Connection } from '../model/Connection';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  connections = signal<Connection[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.mockData();
  }

  private mockData(){
    this.connections.set([{

        id: uuid(),
        name: 'Produção SQL Server',
        type: 'sqlserver',
        host: '192.168.1.10',
        port: 1433,
        database: 'erp_prod',
        user: 'sa',
        status: 'online'
    },
    {
        id: uuid(),
        name: 'PostgreSQL Cloud',
        type: 'postgres',
        host: 'pg.myapp.com',
        port: 5432,
        database: 'main',
        user: 'admin',
        status: 'online'
    }
  ]);
  }

  addConnection(conn: Connection){
    this.connections.update(prev => [...prev, conn]);
  }
}
