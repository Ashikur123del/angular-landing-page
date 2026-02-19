import { NgClass } from '@angular/common';
import { Component,} from '@angular/core';


interface PricingFeature {
  text: string;
  status: 'check' | 'cross';
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  gradient: string;
  shadow: string;
  btnText: string;
  isFeatured?: boolean;
  priceColor: string;
  features: PricingFeature[];
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
 
 
  pricingPlans: PricingPlan[] = [
    {
      name: 'সিলভার',
      price: '৫',
      gradient: 'from-[#ff782d] to-[#ff5100]',
      shadow: 'shadow-orange-200',
      priceColor: 'text-orange-600',
      btnText: 'অর্ডার করুন',
      features: [
        { text: 'স্টুডেন্ট-টিচার রেজিস্ট্রেশন', status: 'check' },
        { text: 'কুইক ইনফরমেশন সিস্টেম', status: 'check' },
        { text: 'ডিজিটাল অ্যাটেনডেন্স সিস্টেম', status: 'check' },
        { text: 'বাল্ক SMS ও নোটিফিকেশন', status: 'check' },
        { text: 'ডিজিটাল ফিস কালেকশন', status: 'check' },
        { text: 'ফান্ড ভিত্তিক অটো অ্যাকাউন্টিং', status: 'check' },
        { text: 'লে-আউট ও সার্টিফিকেট', status: 'check' },
        { text: 'এক্সাম রেজাল্ট ও পাবলিশিং', status: 'check' },
        { text: 'সরাসরি হেড অফিসের সাপোর্ট', status: 'check' },
        { text: 'স্থানীয় প্রতিনিধির ঘরোয়া সাপোর্ট', status: 'cross' },
        { text: 'ডিজিটাল লিডারশিপ ট্রেনিং', status: 'cross' },
        { text: 'রোল-ওয়াইজ ইউজার ট্রেনিং', status: 'cross' },
        { text: 'সফটওয়্যার সম্পূর্ণ বাস্তবায়ন', status: 'cross' }
      ]
    },
    {
      name: 'গোল্ড',
      price: '১০',
      isFeatured: true,
      gradient: 'from-[#3368fa] to-[#1e2171]',
      shadow: 'shadow-blue-200',
      priceColor: 'text-blue-600',
      btnText: 'অর্ডার করুন',
      features: [
        { text: 'স্টুডেন্ট-টিচার রেজিস্ট্রেশন', status: 'check' },
        { text: 'কুইক ইনফরমেশন সিস্টেম', status: 'check' },
        { text: 'ডিজিটাল অ্যাটেনডেন্স সিস্টেম', status: 'check' },
        { text: 'বাল্ক SMS ও নোটিফিকেশন', status: 'check' },
        { text: 'ডিজিটাল ফিস কালেকশন', status: 'check' },
        { text: 'ফান্ড ভিত্তিক অটো অ্যাকাউন্টিং', status: 'check' },
        { text: 'লে-আউট ও সার্টিফিকেট', status: 'check' },
        { text: 'এক্সাম রেজাল্ট ও পাবলিশিং', status: 'check' },
        { text: 'সরাসরি হেড অফিসের সাপোর্ট', status: 'check' },
        { text: 'স্থানীয় প্রতিনিধির ঘরোয়া সাপোর্ট', status: 'check', highlight: true },
        { text: 'ডিজিটাল লিডারশিপ ট্রেনিং', status: 'cross' },
        { text: 'রোল-ওয়াইজ ইউজার ট্রেনিং', status: 'cross' },
        { text: 'সফটওয়্যার সম্পূর্ণ বাস্তবায়ন', status: 'cross' }
      ]
    },
    {
      name: 'প্লাটিনাম',
      price: '২০',
      gradient: 'from-[#10b981] to-[#047857]',
      shadow: 'shadow-emerald-200',
      priceColor: 'text-emerald-600',
      btnText: 'বিস্তারিত জানুন',
      features: [
        { text: 'স্টুডেন্ট-টিচার রেজিস্ট্রেশন', status: 'check' },
        { text: 'কুইক ইনফরমেশন সিস্টেম', status: 'check' },
        { text: 'ডিজিটাল অ্যাটেনডেন্স সিস্টেম', status: 'check' },
        { text: 'বাল্ক SMS ও নোটিফিকেশন', status: 'check' },
        { text: 'ডিজিটাল ফিস কালেকশন', status: 'check' },
        { text: 'ফান্ড ভিত্তিক অটো অ্যাকাউন্টিং', status: 'check' },
        { text: 'লে-আউট ও সার্টিফিকেট', status: 'check' },
        { text: 'এক্সাম রেজাল্ট ও পাবলিশিং', status: 'check' },
        { text: 'সরাসরি হেড অফিসের সাপোর্ট', status: 'check' },
        { text: 'স্থানীয় প্রতিনিধির ঘরোয়া সাপোর্ট', status: 'check' },
        { text: 'ডিজিটাল লিডারশিপ ট্রেনিং', status: 'check', highlight: true },
        { text: 'রোল-ওয়াইজ ইউজার ট্রেনিং', status: 'check', highlight: true },
        { text: 'সফটওয়্যার সম্পূর্ণ বাস্তবায়ন', status: 'check', highlight: true }
      ]
    }
  ];
}