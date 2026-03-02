import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  isBrowser: boolean;
  selectedVideo = signal<string | null>(null); // ভিডিও স্টোর করার জন্য

  reasons = [
    { icon: 'fas fa-check-circle', text: 'দেশের সর্বাধিক ব্যবহৃত, পরীক্ষিত এবং নির্ভুল সফটওয়্যার' },
    { icon: 'fas fa-bolt', text: 'শিক্ষাপ্রতিষ্ঠানের প্রশাসনিক কার্যক্রম দ্রুত ও নির্ভুলভাবে সম্পন্ন করে' },
    { icon: 'fas fa-chart-line', text: 'প্রতিষ্ঠানের কাজের গতি বাড়ায় ২০০-৩০০ গুণ' },
    { icon: 'fas fa-user-clock', text: '৭০% ক্লারিক্যাল কাজের বোঝা কমায়' },
    { icon: 'fas fa-shield-halved', text: 'প্রায় ৫০% ভুল ও অসন্তোষ কমিয়ে দেয় স্বস্তি ও শান্তি' },
    { icon: 'fas fa-headset', text: 'নিমিত আপডেট ও ২৪/৭ নির্ভরযোগ্য কাস্টমার সাপোর্ট' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // ভিডিও ইউআরএল নিরাপদ করার ফাংশন
  get safeVideoUrl(): SafeResourceUrl | null {
    const rawUrl = this.selectedVideo();
    if (!rawUrl) return null;

    let videoId = '';
    if (rawUrl.includes('youtu.be/')) {
      videoId = rawUrl.split('youtu.be/')[1].split('?')[0];
    } else if (rawUrl.includes('v=')) {
      videoId = rawUrl.split('v=')[1].split('&')[0];
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  openVideo(url: string) {
    this.selectedVideo.set(url);
  }

  closeVideo() {
    this.selectedVideo.set(null);
  }
}