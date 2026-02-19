import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-smart-features',
  standalone: true,
  imports: [], // কোনো মডিউল দরকার নেই
  templateUrl: './smart-features.html',
  styleUrl: './smart-features.css',
})
export class SmartFeatures {
  isBrowser: boolean;

  features = [
    {
      icon: 'fa-solid fa-file-signature',
      title: '১.৫ কোটি',
      description: 'রেজাল্ট প্রসেস ও পাবলিশ'
    },
    {
      icon: 'fa-solid fa-calendar-check',
      title: '২ কোটি',
      description: 'অ্যাটেন্ডেন্স ও রিপোর্ট'
    },
    {
      icon: 'fa-solid fa-paper-plane',
      title: '৫ কোটি',
      description: 'এসএমএস নোটিফিকেশন'
    },
    {
      icon: 'fa-solid fa-award',
      title: '১০ বছরের',
      description: 'ডোমেইন এক্সপার্টিজ'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'স্ট্রং',
      description: 'সিকিউরিটি ও ব্যাকআপ'
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'এক্সপার্ট',
      description: 'সাপোর্ট ও টিউটোরিয়াল'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // চেক করে নেওয়া হচ্ছে আমরা ব্রাউজারে আছি কি না
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}