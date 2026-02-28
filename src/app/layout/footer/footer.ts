import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer { 
  data = {
    about: {
      logo: 'footer-logo.png',
      description: '১০+ বছরের অভিজ্ঞতা ও ৫,০০০+ স্কুল, কলেজ ও মাদ্রাসার আস্থার প্রতীক এডুমান। বাংলাদেশের সবচেয়ে নির্ভরযোগ্য School & College Management Software—এখন আপনার শিক্ষা প্রতিষ্ঠান হবে সম্পূর্ণ Paperless, Cashless, নিরাপদ ও সিস্টেম-ড্রিভেন।',
      socials: [
        { platform: 'facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=61585379236867', bgColor: 'bg-[#3b5998]' },
        { platform: 'youtube', icon: 'fab fa-youtube', link: 'https://youtu.be/rCCVGi_h3nA?si=9biEWCOGp-6MJInZ', bgColor: 'bg-[#ff0000]' }
      ]
    },
    sections: [
      {
        title: 'গুরুত্বপূর্ণ লিঙ্কসমূহ',
        links: ['প্রাইভেসি পলিসি', 'সহায়তা কেন্দ্র', 'শর্তাবলী', 'মূল্য নীতিমালা', 'রিফান্ড নীতিমালা']
      },
      {
        title: 'দ্রুত লিঙ্কসমূহ',
        links: ['কেন এডুমান', 'ফিচারস', 'মূল্য তালিকা', 'ব্লগ', 'সাপোর্ট']
      }
    ],
    contact: {
      title: 'কর্পোরেট হেড অফিস',
      address: 'চৌরঙ্গী সুপার মার্কেট, ৫ম তলা (লিফট - ৪), সাভার বাস স্ট্যান্ড, সাভার, ঢাকা - ১৩৪০',
      phones: ['01676761887', '01688667870'],
      legalTitle: 'লিগ্যাল ইনফরমেশন',
      legalDetails: [
        'ট্রেড লাইসেন্স - TRAD/DNCC/107273/2022',
        'ইনকর্পোরেশন - C-178375/2022',
        'টিআইএন নং - ৫৯১৭৪৫৭১৪২৪',
        'বিআইএন নং - ০০৬৪১৭৭৪৮-০১০২'
      ]
    },
    copyright: 'কপিরাইট @ লিডসউইন লিমিটেড কর্তৃক সর্বস্বত্ব সংরক্ষিত @ ২০২২-২০২৬'
  };
}