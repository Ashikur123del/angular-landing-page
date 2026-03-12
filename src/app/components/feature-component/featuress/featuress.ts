import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-featuress',
  templateUrl: './featuress.html',
  styleUrl: './featuress.css',
})
export class Featuress {
    bgImage = input<string>('future.png');
  @Input() minHeight: string = '70vh';
}