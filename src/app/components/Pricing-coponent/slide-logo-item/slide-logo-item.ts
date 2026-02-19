import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slide-logo-item',
  imports: [],
  templateUrl: './slide-logo-item.html',
  styleUrl: './slide-logo-item.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideLogoItem {
    @ViewChild('swiperRef') swiperRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  cards = [
    { title: 'শিক্ষা ব্যবস্থাপনার সকল সমাধান', img: 'iMAGE-04 (1).png' },
    { title: 'রকেটের গতিতে প্রতিষ্ঠান পরিচালনা', img: 'iMAGE-04.png' },
    { title: 'ফি কালেকশন হবে ডিজিটাল', img: 'iMAGE-05.png' },
    { title: 'আধুনিক ব্যবস্থাপনা', img: 'iMAGE-12.png' },
    { title: 'আধুনিক ব্যবস্থাপনা', img: 'iMAGE-12.png' },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.swiperRef?.nativeElement) {
      const swiperEl = this.swiperRef.nativeElement;
      Object.assign(swiperEl, {
        zoom: true, // Example config, mostly handled in HTML
      });

      // Initialize if method exists, otherwise it might be auto-initialized or not upgraded yet
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }
    }
  }
}
