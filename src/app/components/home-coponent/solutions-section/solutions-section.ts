import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

interface Solution {
  icon: string;
  title: string;
  points: string[];
}

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  imports: [],
  templateUrl: './solutions-section.html',
  styleUrl: './solutions-section.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SolutionsSection {

  @ViewChild('swiperRef') swiperRef!: ElementRef;

  slideNext(swiperEl: any) {
    swiperEl.swiper.slideNext();
  }

  slidePrev(swiperEl: any) {
    swiperEl.swiper.slidePrev();
  }

  solutions: Solution[] = [
    {
      icon: 'fas fa-fingerprint',
      title: 'ডিজিটাল অ্যাটেনডেন্স সিস্টেম',
      points: [
        'আইডি কার্ডের নিখুঁত ও রেডি ডাটা',
        'যেকোন তথ্যই তাৎক্ষণিক রেডি!',
        'ডিভাইস টু সার্ভারে সরাসরি ডাটা',
        'তাৎক্ষণিক প্রয়োজনীয় রিপোর্ট',
        'উপস্থিতি/অনুপস্থিতির এসএমএস'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'অনলাইনে ফিস কালেকশন',
      points: [
        'এসএমএসে ডিউ এলার্ট তাগাদা',
        'যেকোন চ্যানেলেই পেমেন্ট সুবিধা',
        'অটো ফান্ড ডিস্ট্রিবিউশন হয়ে যায়',
        'সফটওয়্যারে ফিস ডিউ রিপোর্ট',
        'ব্যাংক সেটেলমেন্ট ও রিকন্সিলিয়েশন'
      ]
    },
    {
      icon: 'fas fa-calculator',
      title: 'স্মার্ট অ্যাকাউন্টিং সিস্টেম',
      points: [
        'অ্যাকাউন্টিংয়ের এক্সপার্ট লাগবে না',
        'এন্ট্রি এক জায়গায়, রিপোর্ট সবখানে',
        'আয়-ব্যয়, দায়-সম্পদ সহ সবকিছু',
        'হিসাব মেলানোর ঝামেলা কমায়',
        'ফিস কালেকশনের সাথে ইন্টিগ্রেটেড'
      ]
    },
    {
      icon: 'fas fa-file-alt', // আইকন পরিবর্তন করা হয়েছে
      title: 'অটোমেটেড রেজাল্ট সিস্টেম',
      points: [
        'মার্কশিট ও প্রগ্রেস রিপোর্ট জেনারেশন',
        'অটোমেটেড জিপিএ ক্যালকুলেশন',
        'প্যারেন্টস অ্যাপে রেজাল্ট পাবলিশ',
        'সহজে ইনপুট দেওয়ার ব্যবস্থা',
        'মেধা তালিকা তৈরি করা'
      ]
    }
  ];
}