import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featuress',
  standalone: true, // Angular 21 এ এটি ডিফল্ট
  imports: [NgClass, NgStyle],
  templateUrl: './featuress.html',
  styleUrl: './featuress.css',
})
export class Featuress {
  @Input() bgImage: string = 'sort-1.png';
  @Input() logoLeft: string = 'lo.webp';
  @Input() logoRight: string = 'lo-1.webp';
  @Input() bannerText: string = 'একই আস্থা, নতুন সম্ভাবনা';
  @Input() brandName: string = 'লিডসইউন';
  @Input() separator: string = 'নেটিজেন এখন';
  @Input() minHeight: string = '60vh'; // টাইপ string রাখাই ভালো
}