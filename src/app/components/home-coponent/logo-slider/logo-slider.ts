import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [],
  templateUrl: './logo-slider.html',
  styleUrl: './logo-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogoSlider implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  slides = [
    { image: 'c1.jpg', title: 'লোগো ১' },
    { image: 'c2.jpg', title: 'লোগো ২' },
    { image: 'c3.jpg', title: 'লোগো ৩' },
    { image: 'c4.png', title: 'লোগো ৪' },
    { image: 'c5.png', title: 'লোগো ৫' },
    { image: 'c6.png', title: 'লোগো ৬' },
    { image: 'c7.png', title: 'লোগো ৭' },
    { image: 'c8.png', title: 'লোগো ৮' },
    { image: 'c9.png', title: 'লোগো ৯' },
    { image: 'c10.png', title: 'লোগো ১০' },
    // Duplicate slides for smooth looping
    { image: 'c1.jpg', title: 'লোগো ১' },
    { image: 'c2.jpg', title: 'লোগো ২' },
    { image: 'c3.jpg', title: 'লোগো ৩' },
    { image: 'c4.png', title: 'লোগো ৪' },
    { image: 'c5.png', title: 'লোগো ৫' },
    { image: 'c6.png', title: 'লোগো ৬' },
    { image: 'c7.png', title: 'লোগো ৭' },
    { image: 'c8.png', title: 'লোগো ৮' },
    { image: 'c9.png', title: 'লোগো ৯' },
    { image: 'c10.png', title: 'লোগো ১০' }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.swiperRef?.nativeElement) {
      const swiperEl = this.swiperRef.nativeElement;
      // Initialize Swiper after Angular has finished hydration
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }
    }
  }

  goPrev(swiperEl: any) {
    if (swiperEl?.swiper) {
      swiperEl.swiper.slidePrev();
    }
  }

  goNext(swiperEl: any) {
    if (swiperEl?.swiper) {
      swiperEl.swiper.slideNext();
    }
  }
}