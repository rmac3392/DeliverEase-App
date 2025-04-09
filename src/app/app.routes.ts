import { Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'download', component: DownloadComponent },
];
