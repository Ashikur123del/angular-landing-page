import { Component } from '@angular/core';
import { Hero } from "../../components/home-coponent/hero/hero";
import { AboutUs } from "../../components/home-coponent/about-us/about-us";
import { VideoShowcaseSection } from "../../components/home-coponent/video-showcase-section/video-showcase-section";
import { SmartFeatures } from "../../components/home-coponent/smart-features/smart-features";
import { PricingSection } from "../../components/home-coponent/pricing-section/pricing-section";
import { ManagementServices } from "../../components/home-coponent/management-services/management-services";
import { SolutionsSection } from "../../components/home-coponent/solutions-section/solutions-section";
import { FeatureWalkthrough } from "../../components/home-coponent/feature-walkthrough/feature-walkthrough";
import { WhyChooseUs } from "../../components/home-coponent/why-choose-us/why-choose-us";
import { LogoSlider } from "../../components/home-coponent/logo-slider/logo-slider";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";

@Component({
  selector: 'app-home',
  imports: [Hero, AboutUs, VideoShowcaseSection, SmartFeatures, PricingSection, ManagementServices, SolutionsSection, FeatureWalkthrough, WhyChooseUs, LogoSlider, MoneyBackSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
