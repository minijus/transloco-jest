import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TranslocoDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transloco-jest';
}
