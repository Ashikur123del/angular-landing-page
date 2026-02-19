import { Component, input } from '@angular/core';

interface SupportFeature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-supprots-ai-help-desk',
  standalone: true,
  imports: [],
  templateUrl: './supprots-ai-help-desk.html',
  styleUrl: './supprots-ai-help-desk.css',
})
export class SupprotsAIHelpDesk {
  // মেইন টাইটেল ইনপুট
  mainTitle = input<string>('দ্রুত সমাধান ও নিরবচ্ছিন্ন সাপোর্ট');
  
  // বাম পাশের কার্ডের লিস্ট ইনপুট
  features = input<SupportFeature[]>([
    { 
      title: 'সরাসরি হেড অফিস থেকে সাপোর্ট', 
      description: 'তৃতীয় পক্ষ নয়- এডুম্যানের সব সাপোর্ট আসে আমাদের হেড অফিস থেকে। যা নিশ্চিত করে স্বচ্ছতা ও দ্রুত সমাধান।' 
    },
    { 
      title: 'অভিজ্ঞ ও প্রশিক্ষিত টিম', 
      description: '১০ বছরের বেশি অভিজ্ঞতা সম্পন্ন টিম আপনার প্রতিষ্ঠানের সব সিস্টেম পরিচালনা করতে সাহায্য করে।' 
    },
    { 
      title: 'দ্রুত রেসপন্স ও সহায়তা', 
      description: 'ফোন, হোয়াটসঅ্যাপ বা ইমেইল- যেভাবেই যোগাযোগ করুন, আমরা সাথে সাথেই সাপোর্ট দিয়ে থাকি।' 
    },
    { 
      title: 'নিরাপদ ডেটা ও সিস্টেম রিলায়েবিলিটি', 
      description: 'ডেটা লস বা সিস্টেম ডাউন রিস্ক নিরসনে আমাদের রয়েছে ২৪/৭ মনিটরিং ব্যবস্থা।' 
    }
  ]);

  // ডান পাশের সেকশনের জন্য ইমেজ ইনপুট
  rightImage = input<string>('ss-1.png'); 
}