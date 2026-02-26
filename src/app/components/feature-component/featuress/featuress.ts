import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-featuress',
  templateUrl: './featuress.html',
  styleUrl: './featuress.css',
})
export class Featuress {
  bgImage = input<string>('future.png');
  logoLeft = input<string>('lo.webp');
  @Input() logoRight: string = 'lo-1.webp';
  bannerText = input<string>('একই আস্থা, নতুন সম্ভাবনা');
  @Input() brandName: string = 'লিডসইউন';
  @Input() separator: string = 'নেটিজেন এখন';
  @Input() minHeight: string = '70vh'; // টাইপ string রাখাই ভালো
}