import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edu-web-dynamics-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu-web-dynamics-list.html',
})
export class EduWebDynamicsList {
  
  pricingData = {
    title: 'শিক্ষা প্রতিষ্ঠানের ডায়নামিক ওয়েবসাইটের মূল্য',
    bannerText: 'কোডিং জানার প্রয়োজন নেই ওয়েবসাইট চালান সহজেই',
    integrationText: 'কোনপ্রকার ইনপুট ছাড়াই এডুমান সফটওয়্যার থেকে প্রয়োজনীয় ডাটা স্বয়ংক্রিয়ভাবে চলে আসবে',
    firstYearLabel: 'মূল্য (প্রথম বছর)',
    firstYearPrice: '২০,০০০ টাকা',
    renewalLabel: 'রিনিউয়াল চার্জ',
    renewalPrice: '১০,০০০ টাকা',
    domainLabel: 'ডোমেইন চার্জ',
    domainNote: 'থাকলে প্রয়োজন নেই / বাজার মূল্য অনুযায়ী প্রযোজ্য হবে',
    terms: 'শর্ত: ওয়েবসাইটের যাবতীয় তথ্য তৈরি ও আপলোডের দায়িত্ব ক্লায়েন্টের দায়িত্ব ও কর্তৃত্বে পরিচালিত হবে'
  };

  features = [
    { label: 'ডেডিকেটেড হোস্টিং', value: '২ জিবি', icon: 'fas fa-server' },
    { label: 'এডমিন প্যানেল এক্সেস', value: 'এক্সেস থাকবে', icon: 'fas fa-user-lock' },
    { label: 'সফটওয়্যার ইন্টিগ্রেশন', value: 'এডুমান', icon: 'fas fa-sync-alt' },
    { label: 'ডেভেলপার সাপোর্ট', value: '১২ মাস', icon: 'fas fa-code' },
    { label: 'কাস্টমার সাপোর্ট', value: '১২ মাস', icon: 'fas fa-headset' },
    { label: 'ভিজিটর ব্যান্ডউইথ', value: 'আনলিমিটেড', icon: 'fas fa-tachometer-alt' },
    { label: 'সার্ভিসের মেয়াদ', value: '৩৬৫ দিন', icon: 'fas fa-calendar-check' }
  ];

  onOrder() {
    alert('অর্ডার প্রক্রিয়া শুরু হচ্ছে...');
  }
}