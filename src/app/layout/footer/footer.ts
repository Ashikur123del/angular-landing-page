import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink], // CommonModule এবং RouterLink যুক্ত করা হয়েছে
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer { 
  data = {
    about: {
      logo: 'mentor erp logo png.png',
      description: '৫+ বছরের অভিজ্ঞতা ও ১,০০০+ স্কুল, কলেজ ও মাদ্রাসার আস্থার প্রতীক মেন্টরইআরপি। বাংলাদেশের সবচেয়ে নির্ভরযোগ্য School & College Management Software—এখন আপনার শিক্ষা প্রতিষ্ঠান হবে সম্পূর্ণ Paperless, Cashless, নিরাপদ ও সিস্টেম-ড্রিভেন।',
      socials: [
        { platform: 'facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=61585379236867', bgColor: 'bg-[#3b5998]' },
        { platform: 'youtube', icon: 'fab fa-youtube', link: 'https://youtu.be/rCCVGi_h3nA?si=9biEWCOGp-6MJInZ', bgColor: 'bg-[#ff0000]' }
      ]
    },
    sections: [
      {
        title: 'গুরুত্বপূর্ণ লিঙ্কসমূহ',
        links: [
          { name: 'প্রাইভেসি পলিসি', path: '/privacy-policy' },
          { name: 'সহায়তা কেন্দ্র', path: '/support' },
          { name: 'শর্তাবলী', path: '/terms' },
          { name: 'মূল্য নীতিমালা', path: '/pricing' },
          { name: 'রিফান্ড নীতিমালা', path: '/refund-policy' }
        ]
      },
      {
        title: 'দ্রুত লিঙ্কসমূহ',
        links: [
          { name: 'মেন্টরইআরপি', path: '/' },
          { name: 'ফিচারস', path: '/features' },
          { name: 'মূল্য তালিকা', path: '/pricing' },
          { name: 'ব্লগ', path: '/blog' },
          { name: 'সাপোর্ট', path: '/support' }
        ]
      }
    ],
    contact: {
      title: 'কর্পোরেট হেড অফিস',
      address: 'চৌরঙ্গী সুপার মার্কেট, ৫ম তলা (লিফট - ৪), সাভার বাস স্ট্যান্ড, সাভার, ঢাকা - ১৩৪০',
      phones: ['01676761887', '01688667870'],
      legalTitle: 'লিগ্যাল ইনফরমেশন',
      legalDetails: [
        'ট্রেড লাইসেন্স - DRAD/DNAA/107273/2024',
        'ইনকর্পোরেশন - D-234567/2022',
        'টিআইএন নং - 57484674536467',
        'বিআইএন নং - ০০9394754647647'
      ]
    },
    copyright: 'কপিরাইট © লিডসউইন লিমিটেড কর্তৃক সর্বস্বত্ব সংরক্ষিত @ ২০২২-২০২৬'
  };
}