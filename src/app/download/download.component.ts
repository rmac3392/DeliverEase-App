import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent implements OnInit {
  ngOnInit() {
    const link = document.createElement('a');
    link.href = 'assets/myapp.apk';  // The file in your assets folder
    link.download = 'myapp.apk';     // Forces the download
    document.body.appendChild(link);
    link.click();  // Triggers the download
    document.body.removeChild(link);  
  }
}
