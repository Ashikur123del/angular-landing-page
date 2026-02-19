import { Component, signal } from '@angular/core';

interface PricingSection {
  title: string;
  badgeTitle?: string;
  priceText: string;
  buttonText: string;
  image: string;
  features: string[]; 
}

@Component({
  selector: 'app-blogs',
  imports: [],     
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {

  sections = signal<PricingSection[]>([
    {
      title: 'বাংলাদেশের শিক্ষাক্ষেত্রে ডিজিটাল রূপান্তরঃ এডুম্যানের দশ বছরের অভিজ্ঞতা ও ভবিষ্যতের পথচলা',
      priceText: 'By Eduman | Bangladesh’s Leading School Management Software',
      buttonText: 'বিস্তারিত পড়ুন',
      image: 'iMAGE-05.png',
      features: ['বাংলাদেশের শিক্ষা ব্যবস্থা দ্রুতগতিতে এক নতুন ডিজিটাল যুগে পদার্পণ করেছে। প্রশাসনিক কাজের স্বচ্ছতা, শিক্ষক-শিক্ষার্থীর তথ্য ব্যবস্থাপনা, অভিভাবক…']
    },
    {
      title: 'অভিভাবক-শিক্ষক-শিক্ষার্থী যোগাযোগে এডুম্যানঃ আধুনিক, দ্রুত ও দায়িত্বশীল সমাধান',
      priceText: 'বাংলাদেশের শিক্ষাপ্রতিষ্ঠানগুলোতে বহু বছর ধরে একটি বড় চ্যালেঞ্জ দাঁড়িয়ে আছে-',
      buttonText: 'বিস্তারিত পড়ুন',
      image: 'iMAGE-12.png',
      features: ['অভিভাবক, শিক্ষক ও শিক্ষার্থীর মধ্যে সময়মতো, সঠিক ও কার্যকর তথ্য আদান-প্রদান না হওয়া…']
    },
    {
      title: 'এডুম্যান: স্মার্ট ব্যবস্থাপনার মাধ্যমে সময় ও ব্যয়ের সাশ্রয়',
      priceText: 'বাংলাদেশের বহু শিক্ষা প্রতিষ্ঠানে প্রতিদিন যে সমস্যাটি সবচেয়ে বেশি দেখা যায় তা হলো-',
      buttonText: 'বিস্তারিত পড়ুন',
      image: 'iMAGE-10.png',
      features: ['ম্যানুয়াল প্রক্রিয়ায় সময় অপচয়, ভুলের পুনরাবৃত্তি, এবং প্রশাসনিক অদক্ষতা…']
    },
    {
      title: 'ভবিষ্যতের শিক্ষায় রূপান্তরমুখী ব্যবস্থাপনায় এডুম্যানের ভূমিকা',
      priceText: 'বিশ্বজুড়ে শিক্ষা খাত এখন দ্রুত একটি নতুন যুগে পা দিচ্ছে- যেখানে প্রতিটি সিদ্ধান্ত হবে তথ্যনির্ভর, স্বয়ংক্রিয় এবং বিশ্লেষণভিত্তিক।',
      buttonText: 'বিস্তারিত পড়ুন',
      image: 'iMAGE-04.png',
      features: ['ভবিষ্যতের এই রূপান্তরে নেতৃত্ব দিতে হলে শুধু ডিজিটাল হওয়াই যথেষ্ট নয়; প্রয়োজন দূরদৃষ্টি, সিস্টেম, এবং স্মার্ট অটোমেশন…']
    },
  ]);
}




 
