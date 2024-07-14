import { Component, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gi-player.component';

@Component({
  standalone: true,
  selector: 'app-gif-list',
  template: `
    @for (gif of gifs(); track gif.permalink){
    <div>
      <app-gif-player
        [src]="gif.src"
        [thumbnail]="gif.thumbnail"
      ></app-gif-player>
    </div>
    }
  `,
  imports: [GifPlayerComponent],
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
