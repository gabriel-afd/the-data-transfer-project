export interface Job {
  id: string;
  sourceConnectionId: string;
  targetConnectionId: string;
  tables: string;
  route: string;
  mode: 'full' | 'incremental';
  schema: 'create' | 'exists';
  truncate: boolean;

  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
}
