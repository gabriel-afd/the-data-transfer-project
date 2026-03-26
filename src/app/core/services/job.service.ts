import { Injectable, signal } from '@angular/core';
import { Job } from '../model/Job';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs = signal<Job[]>([
    {
      id: uuid(),
      sourceConnectionId: 'conn-1',
      targetConnectionId: 'conn-2',
      tables: 'users, orders',
      route: 'SQL Prod → PG Cloud',
      mode: 'full',
      schema: 'exists',
      truncate: false,
      status: 'running',
      progress: 60
    },
    {
      id: uuid(),
      sourceConnectionId: 'conn-1',
      targetConnectionId: 'conn-2',
      tables: 'products',
      route: 'SQL Prod → PG Cloud',
      mode: 'incremental',
      schema: 'create',
      truncate: true,
      status: 'completed',
      progress: 100
    }
  ]);

  createJob(job: Omit<Job, 'id' | 'status' | 'progress'>){

    const newJob: Job = {
      id: uuid(),
      ...job,
      status: 'running',
      progress: 0
    };

    this.jobs.update(prev => [...prev, newJob]);
    this.simulateProgress(newJob.id);
  }

  private simulateProgress(jobId: string){
    const interval = setInterval(() => {
      this.jobs.update(jobs => {
        return jobs.map(job => {

          if (job.id !== jobId) return job;

          const newProgress = job.progress + 10;

          if (newProgress >= 100) {
            clearInterval(interval);
            return { ...job, progress: 100, status: 'completed' };
          }

          return { ...job, progress: newProgress };
        });
      });
    }, 500);
  }

}
