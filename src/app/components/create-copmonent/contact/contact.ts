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
  divisions = signal([
    'Barishal', 'Chattogram', 'Dhaka', 'Khulna', 
    'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet'
  ]);

  professions = signal(['Teacher', 'Student', 'Businessman', 'Others']);

  private allDistricts: Record<string, string[]> = {
    'Barishal': ['Barguna', 'Barishal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
    'Chattogram': ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cumilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
    'Dhaka': ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
    'Khulna': ['Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'],
    'Mymensingh': ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur'],
    'Rajshahi': ['Bogura', 'Joypurhat', 'Naogaon', 'Natore', 'Chapainawabganj', 'Pabna', 'Rajshahi', 'Sirajganj'],
    'Rangpur': ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
    'Sylhet': ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet']
  };

  private allThanas: Record<string, string[]> = {
    'Natore': ['Natore Sadar', 'Baraigram', 'Bagatipara', 'Lalpur', 'Singra', 'Gurudaspur', 'Naldanga'],
    'Dhaka': ['Mirpur', 'Uttara', 'Gulshan', 'Dhanmondi', 'Motijheel', 'Savar', 'Dhamrai', 'Keraniganj'],
    'Gazipur': ['Sreepur', 'Kaliakair', 'Kapasia', 'Tongi', 'Gazipur Sadar'],
    'Bogura': ['Bogura Sadar', 'Sherpur', 'Shajahanpur', 'Dhunat', 'Adamdighi', 'Shibganj'],
    'Rajshahi': ['Boalia', 'Motihar', 'Rajpara', 'Shah Makdum', 'Paba', 'Godagari', 'Tanore', 'Bagmara'],
    'Chattogram': ['Pahartali', 'Patenga', 'Hathazari', 'Kotwali', 'Sitakunda', 'Patiya', 'Anwara'],
    'Sylhet': ['Sadar', 'Beanibazar', 'Golapganj', 'Fenchuganj', 'Balaganj'],
  };

  selectedDivision = model('All');
  selectedDistrict = model('All');
  selectedThana = model('All');
  selectedProfession = model('All');

  filteredDistricts = computed(() => {
    const division = this.selectedDivision();
    if (division === 'All') return [];
    return this.allDistricts[division] || [];
  });

  filteredThanas = computed(() => {
    const district = this.selectedDistrict();
    if (district === 'All') return [];
    // এখানে জেলা অনুযায়ী থানা রিটার্ন করবে
    return this.allThanas[district] || []; 
  });

  onDivisionChange() {
    this.selectedDistrict.set('All');
    this.selectedThana.set('All');
  }

  onDistrictChange() {
    this.selectedThana.set('All');
  }
}