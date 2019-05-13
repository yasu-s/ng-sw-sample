import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-sample';
  version = '';

  constructor(private appService: AppService) { }

  onClick(): void {
    this.appService.getVersion().subscribe(d => {
      this.version = d;
    });
  }
}
