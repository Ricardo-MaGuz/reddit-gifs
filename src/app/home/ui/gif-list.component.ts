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
  styles: [
    `
      div {
        margin: 1rem;
        filter: drop-shadow(0px 0px 6px #0e0c1ba8);
      }

      mat-toolbar {
        white-space: break-spaces;
      }

      p {
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-top: 4rem;
      }
    `,
  ],
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
