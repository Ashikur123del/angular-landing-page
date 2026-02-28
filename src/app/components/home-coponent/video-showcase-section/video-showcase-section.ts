import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-video-showcase-section',
  standalone: true,
  templateUrl: './video-showcase-section.html',
  styleUrl: './video-showcase-section.css',
})
export class VideoShowcaseSection {
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);
  
  private videoId = 'rCCVGi_h3nA'; 
  
  private rawUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`;
  
  videoUrl: SafeResourceUrl | null = null;
  isVideoVisible = signal<boolean>(false);

  openVideo() {
  
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
    this.isVideoVisible.set(true);

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden'; 
    }
  }

  closeVideo() {
    this.isVideoVisible.set(false);
    this.videoUrl = null; 
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto'; 
    }
  }
}