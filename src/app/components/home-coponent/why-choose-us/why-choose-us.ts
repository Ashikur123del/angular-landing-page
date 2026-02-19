import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  isBrowser: boolean;

  reasons = [
    {
      icon: 'fas fa-check-circle',
      text: 'দেশের সর্বাধিক ব্যবহৃত, পরীক্ষিত এবং নির্ভুল সফটওয়্যার'
    },
    {
      icon: 'fas fa-bolt',
      text: 'শিক্ষাপ্রতিষ্ঠানের প্রশাসনিক কার্যক্রম দ্রুত ও নির্ভুলভাবে সম্পন্ন করে'
    },
    {
      icon: 'fas fa-chart-line',
      text: 'প্রতিষ্ঠানের কাজের গতি বাড়ায় ২০০-৩০০ গুণ'
    },
    {
      icon: 'fas fa-user-clock',
      text: '৭০% ক্লারিক্যাল কাজের বোঝা কমায়'
    },
    {
      icon: 'fas fa-shield-halved',
      text: 'প্রায় ৫০% ভুল ও অসন্তোষ কমিয়ে দেয় স্বস্তি ও শান্তি'
    },
    {
      icon: 'fas fa-headset',
      text: 'নিমিত আপডেট ও ২৪/৭ নির্ভরযোগ্য কাস্টমার সাপোর্ট'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}