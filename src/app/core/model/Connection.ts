export interface Connection {

  id: string;
  name: string;
  type: 'sqlserver' | 'postgres';
  host: string;
  port: number;
  database: string;
  user: string;
  status: 'online' | 'offline';
}
