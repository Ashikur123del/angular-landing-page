import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-feature-walkthrough',
  standalone: true,
  templateUrl: './feature-walkthrough.html',
  styleUrl: './feature-walkthrough.css'
})
export class FeatureWalkthrough {
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);
  
  // সঠিক এমবেড লিঙ্ক ব্যবহার করতে হবে
  private videoId = 'rCCVGi_h3nA';
  private embedUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`;

  videoUrl = signal<SafeResourceUrl | null>(null);
  isVideoVisible = signal<boolean>(false);

  openVideo() {
    if (isPlatformBrowser(this.platformId)) {
      this.videoUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl));
      this.isVideoVisible.set(true);
      document.body.style.overflow = 'hidden';
    }
  }

  closeVideo() {
    this.isVideoVisible.set(false);
    this.videoUrl.set(null);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }
}