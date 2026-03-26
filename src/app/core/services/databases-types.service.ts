import { Injectable } from '@angular/core';
import { Database } from '../model/Database';

@Injectable({
  providedIn: 'root'
})
export class DatabasesTypesService {

  getDatabases(): Database[]{
    return [
      {
        name: 'SQL Server',
        description: 'Microsoft',
        icon: '/assets/icons/microsoft-sql-server-logo-svgrepo-com.svg',
        defaultPort: 1433
      },
      {
        name: 'PostgreSQL',
        description: 'Postgres',
        icon: '/assets/icons/postgresql-svgrepo-com.svg',
        defaultPort: 5432
      },
    ];

  }
}
