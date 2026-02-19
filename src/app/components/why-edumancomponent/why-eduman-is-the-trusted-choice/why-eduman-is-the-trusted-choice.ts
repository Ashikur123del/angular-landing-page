import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

interface Solution {
  icon: string;
  title: string;
  points: string[];
}


@Component({
selector: 'app-why-eduman-is-the-trusted-choice',
  standalone: true, // নিশ্চিত করুন এটি স্ট্যান্ডঅ্যালোন
  imports: [NgClass], // <--- এখানে NgClass অ্যাড করুন
  templateUrl: './why-eduman-is-the-trusted-choice.html',
  styleUrl: './why-eduman-is-the-trusted-choice.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhyEdumanIsTheTrustedChoice {

  @ViewChild('swiperRef') swiperRef!: ElementRef;

  slideNext(swiperEl: any) {
    swiperEl.swiper.slideNext();
  }

  slidePrev(swiperEl: any) {
    swiperEl.swiper.slidePrev();
  }

  solutions: Solution[] = [
    {
      icon: 'fas fa-shield-halved',
      title: 'জাভা- সিকিউর ল্যাঙ্গুয়েজ',
      points: [
        'আধুনিক নিরাপদ প্রোগ্রামিং কাঠামো',
        'দীর্ঘমেয়াদে নির্ভরযোগ্য পারফরম্যান্স',
        'সিস্টেম ক্র্যাশের ঝুঁকি কম',
        'তথ্য প্রক্রিয়াকরণে উচ্চ নির্ভুলতা',
        'ভবিষ্যৎ আপডেটের জন্য প্রস্তুত কাঠামো'
      ]
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'কুইক সাপোর্ট (WhatsApp)',
      points: [
        'সরাসরি যোগাযোগের সুবিধা',
        'দ্রুত সমস্যার সমাধান নিশ্চিতকরণ',
        'বাস্তব অভিজ্ঞ সাপোর্ট টিম',
        'নিয়মিত ব্যবহারকারী গাইডেন্স',
        'সেবায় ধারাবাহিক মনিটরিং',
      ]
    },
    {
      icon: 'fas fa-hand-holding-dollar',
      title: 'মানিব্যাক গ্যারান্টি',
      points: [
        'গ্যারান্টেড রিফান্ড',
        'ঝুঁকি একদম শূন্য',
        'ব্যবহারে সন্তুষ্ট না হলে, মানিব্যাক',
        'স্বচ্ছ শর্তে, মানিব্যাক গ্যারান্টি',
        'নিশ্চিন্তে ব্যবহার করুন, গ্যারান্টি এডুম্যানের'
      ]
    },
    {
      icon: 'fas fa-user-lock',
      title: 'গ্যারান্টেড ডেটা সিকিউরিটি',
      points: [
        'সংবেদনশীল তথ্যের পূর্ণ গোপনীয়তা রক্ষা',
        'অননুমোদিত প্রবেশ প্রতিরোধ ব্যবস্থা',
        'নিয়মিত ডেটা ব্যাকআপ সুবিধা',
        'তথ্য হারানোর ঝুঁকি শূন্যের কাছাকাছি',
        'দীর্ঘমেয়াদি নিরাপদ তথ্য সংরক্ষণ'
      ]
    }
  ];

}
