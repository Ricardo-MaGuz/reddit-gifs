import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GifListComponent],
  template: `
    <app-gif-list [gifs]="redditService.gifs()" class="grid-container" />
  `,
  styles: [
    `
      mat-progress-spinner {
        margin: 2rem auto;
      }
    `,
  ],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
