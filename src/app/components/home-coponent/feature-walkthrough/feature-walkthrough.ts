import { Component, inject, PLATFORM_ID, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-feature-walkthrough',
  standalone: true,
  imports: [], 
  templateUrl: './feature-walkthrough.html',
  styleUrl: './feature-walkthrough.css',
})
export class FeatureWalkthrough {
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);
  
  private rawUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  
  videoUrl: SafeResourceUrl | null = null;
  isVideoVisible: boolean = false; // displayStyle এর বদলে boolean ব্যবহার করা ভালো

  openVideo() {
    // শুধুমাত্র ব্রাউজারে ইউআরএল সেট হবে
    if (isPlatformBrowser(this.platformId)) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
      this.isVideoVisible = true;
      document.body.style.overflow = 'hidden'; // ভিডিও চলাকালীন স্ক্রল বন্ধ
    }
  }

  closeVideo() {
    this.isVideoVisible = false;
    this.videoUrl = null; 
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto'; // স্ক্রল চালু
    }
  }
}