import { Component, signal, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // ডাটা লিস্ট
  divisions = signal(['Dhaka', 'Chattogram', 'Rajshahi']);
  professions = signal(['Teacher', 'Student', 'Businessman', 'Others']);

  // জেলা ডাটাবেজ
  private allDistricts = {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj'],
    'Chattogram': ['Chattogram', 'Cox\'s Bazar', 'Feni'],
    'Rajshahi': ['Rajshahi', 'Bogura', 'Pabna']
  };

  // থানা ডাটাবেজ (Key হিসেবে জেলা ব্যবহার করা হয়েছে)
  private allThanas: Record<string, string[]> = {
    'Dhaka': ['Mirpur', 'Uttara', 'Gulshan', 'Dhanmondi', 'Motijheel'],
    'Gazipur': ['Sreepur', 'Kaliakair', 'Kapasia', 'Tongi'],
    'Narayanganj': ['Sadar', 'Rupganj', 'Sonargaon', 'Araihazar'],
    'Chattogram': ['Pahartali', 'Patenga', 'Hathazari', 'Kotwali'],
    'Cox\'s Bazar': ['Ukhia', 'Teknaf', 'Ramu', 'Chakaria'],
    // একইভাবে ৬৪ জেলার থানা এখানে অ্যাড করতে পারবেন
  };

  // মডেল সিগন্যাল (Two-way Binding)
  selectedDivision = model('All');
  selectedDistrict = model('All');
  selectedThana = model('All');
  selectedProfession = model('All');

  // বিভাগ বদলালে জেলা ফিল্টার হবে
  filteredDistricts = computed(() => {
    const division = this.selectedDivision();
    if (division === 'All') return [];
    return this.allDistricts[division as keyof typeof this.allDistricts] || [];
  });

  // জেলা বদলালে থানা ফিল্টার হবে
  filteredThanas = computed(() => {
    const district = this.selectedDistrict();
    if (district === 'All') return [];
    return this.allThanas[district] || [];
  });

  // ইভেন্ট হ্যান্ডলার (বিভাগ বদলালে নিচেরগুলো All হয়ে যাবে)
  onDivisionChange() {
    this.selectedDistrict.set('All');
    this.selectedThana.set('All');
  }

  // জেলা বদলালে থানা All হয়ে যাবে
  onDistrictChange() {
    this.selectedThana.set('All');
  }
}