import { Component, inject, PLATFORM_ID } from '@angular/core';
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
  
  private videoId = 'niuuUXu-U14'; 
  private rawUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
  
  videoUrl: SafeResourceUrl | null = null;
  isVideoVisible: boolean = false;

  openVideo() {
    if (isPlatformBrowser(this.platformId)) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
      this.isVideoVisible = true;
      document.body.style.overflow = 'hidden'; 
    }
  }

  closeVideo() {
    this.isVideoVisible = false;
    this.videoUrl = null; 
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto'; 
    }
  }
}