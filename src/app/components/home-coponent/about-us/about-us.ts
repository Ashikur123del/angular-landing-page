import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  cards = [
    {
      icon: 'fa-solid fa-briefcase', // ১০ বছরের অভিজ্ঞতা
      title: '১০ বছরের বেশি',
      desc: 'শিক্ষা খাতের উন্নয়নের অভিজ্ঞতা'
    },
    {
      icon: 'fa-solid fa-school', // ৫০০০ প্রতিষ্ঠান
      title: '৫০০০+ প্রতিষ্ঠান',
      desc: 'প্রযুক্তি সেবা প্রদানের অভিজ্ঞতা'
    },
    {
      icon: 'fa-solid fa-chalkboard-user', // ৬০ হাজার শিক্ষক
      title: '৬০ হাজারের বেশি',
      desc: 'শিক্ষকদের প্রশিক্ষণ প্রদানের অভিজ্ঞতা'
    },
    {
      icon: 'fa-solid fa-users-viewfinder', // ৩০ লক্ষ ইউজার
      title: '৩০ লক্ষের বেশি',
      desc: 'শিক্ষার্থী ও অভিভাবকের সন্তুষ্টি'
    }
  ];
}