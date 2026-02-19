import { Component } from '@angular/core';

interface PricingSection {
  title: string;
  badgeTitle?: string;
  priceText: string;
  buttonText: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-pricing-list',
  standalone: true,
  imports: [],
  templateUrl: './pricing-list.html',
  styleUrl: './pricing-list.css',
})
export class PricingList {
  sections: PricingSection[] = [
    {
      title: 'অ্যাটেনডেন্স ডিভাইস ইন্টিগ্রেশন',
      priceText: 'ডিভাইস প্রতি এককালীন ১০০০ টাকা মাত্র',
      buttonText: 'সুনির্দিষ্ট ডিভাইসের মডেল',
      image: 'mm-1.png',
      features: [
        'রিয়েল-টাইম স্বয়ংক্রিয় উপস্থিতি নিশ্চিত করে',
        'সাশ্রয়ী মূল্যে ও নির্ভুল তথ্যের নিশ্চয়তা',
        'নির্ভুল রিপোর্ট ও প্রশাসনিক কাজে সাহায্য করে'
      ]
    },
    {
      title: 'মাস্ক/মাস্কিং SMS গেটওয়ে ইন্টিগ্রেশন',
      priceText: 'এককালীন গেটওয়ে চার্জ ৫০০০ টাকা মাত্র',
      buttonText: 'অর্ডার করুন',
      image: 'mm-2.png',
      features: [
        'প্রতিষ্ঠানের নিজস্ব নামে SMS পাঠানোর সুবিধা দেয়',
        'অফিসিয়াল ও নির্ভরযোগ্য যোগাযোগ নিশ্চিত করে',
        'অভিভাবক-শিক্ষক-শিক্ষার্থীর যোগাযোগ দ্রুত ও সাশ্রয়ী হয়'
      ]
    },
    {
      title: 'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
      priceText: 'এককালীন গেটওয়ে চার্জ ৫০০০ টাকা মাত্র',
      buttonText: 'অর্ডার করুন',
      image: 'mm-3.png',
      features: [
        'নিরাপদ ও স্বয়ংক্রিয় অনলাইন ফি আদায় ব্যবস্থা নিশ্চিত করে',
        'তাৎক্ষণিক পেমেন্ট কনফার্মেশন ও নির্ভুল হিসাব প্রদান করে',
        'আদায় প্রক্রিয়া সহজ হয় এবং সময় ও প্রশাসনিক চাপ কমায়'
      ]
    }
  ];
}