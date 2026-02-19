import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-share-video-demo',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './share-video-demo.html',
  styleUrl: './share-video-demo.css',
})
export class ShareVideoDemo {
  @Input() sectionTitle = 'শিক্ষা প্রতিষ্ঠানের কমপ্লিট সলিউশন';
  @Input() thumbnailUrl = 'srt-2.png';
  @Input() videoLabel = 'এডুমান সফটওয়্যার';
  @Input() minHeight = 'auto';
  
  // বাটন কন্ট্রোল
  @Input() showButton: boolean = false; 
  @Input() buttonText: string = 'আরও দেখুন';
  @Input() buttonLink: string = '#';

  // নতুন: ভিডিও প্লে আইকন দেখাবেন কি না (ইমেজ প্রোমোর ক্ষেত্রে এটি false করবেন)
  @Input() isVideo: boolean = true; 
}