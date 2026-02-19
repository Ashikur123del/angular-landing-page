import { Component, signal, computed } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { Cards } from "../../components/feature-component/cards/cards";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";
import { TutorialVideo } from "../../components/tutorial-video/tutorial-video";

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [Featuress, Cards, MoneyBackSlider, TutorialVideo], // CommonModule বাদ দেওয়া হয়েছে
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
})
export class Tutorial {
  
}