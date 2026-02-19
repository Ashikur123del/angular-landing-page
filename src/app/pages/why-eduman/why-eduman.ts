import { Component } from '@angular/core';
import { AboutUs } from "../../components/home-coponent/about-us/about-us";
import { SchoolMangmentVideo } from "../../components/why-edumancomponent/school-mangment-video/school-mangment-video";
import { WhyEdumanIsTheTrustedChoice } from "../../components/why-edumancomponent/why-eduman-is-the-trusted-choice/why-eduman-is-the-trusted-choice";
import { Cards } from "../../components/feature-component/cards/cards";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";
import { Featuress } from "../../components/feature-component/featuress/featuress";

@Component({
  selector: 'app-why-eduman',
  imports: [AboutUs, SchoolMangmentVideo, WhyEdumanIsTheTrustedChoice, Cards, MoneyBackSlider, Featuress],
  templateUrl: './why-eduman.html',
  styleUrl: './why-eduman.css',
})
export class WhyEduman {

}
