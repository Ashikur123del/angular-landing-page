import { Component } from '@angular/core';

@Component({
  selector: 'app-management-services',
  standalone: true,
  imports: [],
  templateUrl: './management-services.html',
  styleUrl: './management-services.css',
})
export class ManagementServices {
  features = [
    { title: 'ডিজিটাল অ্যাটেনডেন্স', icon: 'fa-calculator' },
    { title: 'ডিজিটাল ফিস কালেকশন', icon: 'fa-mobile-screen-button' },
    { title: 'অটোমেটেড অ্যাকাউন্টিং', icon: 'fa-file-invoice-dollar' },
    { title: 'লে আউট এন্ড সার্টিফিকেট', icon: 'fa-desktop' },
    { title: 'বাল্ক SMS সার্ভিস ও নোটিফিকেশন', icon: 'fa-comment-sms' },
    { title: 'রেজাল্ট প্রসেসিং ও পাবলিশিং', icon: 'fa-clipboard-check' },
    { title: 'ডায়নামিক রুটিন ম্যানেজমেন্ট', icon: 'fa-calendar-days' },
    { title: 'কুইক ইনফরমেশন সিস্টেম', icon: 'fa-magnifying-glass-chart' },
    { title: 'স্টুডেন্ট ও টিচার প্রোফাইল', icon: 'fa-id-card' },
    { title: 'সহজবোধ্য টিউটোরিয়াল', icon: 'fa-play-circle' },
    { title: 'ইউজার কমিউনিটি সাপোর্ট', icon: 'fa-headset' },
    { title: 'সার্টিফিকেশন ও রেফারেল প্রোগ্রাম', icon: 'fa-certificate' }
  ];
}