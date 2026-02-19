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
      logo: 'logo-2.png',
      description: '১০+ বছরের অভিজ্ঞতা ও ৫,০০০+ স্কুল, কলেজ ও মাদ্রাসার আস্থার প্রতীক এডুমান। বাংলাদেশের সবচেয়ে নির্ভরযোগ্য School & College Management Software—এখন আপনার শিক্ষা প্রতিষ্ঠান হবে সম্পূর্ণ Paperless, Cashless, নিরাপদ ও সিস্টেম-ড্রিভেন।',
      socials: [
        { platform: 'facebook', icon: 'fab fa-facebook-f', link: '#', bgColor: 'bg-[#3b5998]' },
        { platform: 'youtube', icon: 'fab fa-youtube', link: '#', bgColor: 'bg-[#ff0000]' }
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
      address: '১/বি, কোয়ান্টাম এমারল্ড পয়েন্ট, গরীব-ই-নেওয়াজ এভিনিউ, সেক্টর-১১, উত্তরা, ঢাকা, বাংলাদেশ।',
      phones: ['01708444950', '01701269548'],
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