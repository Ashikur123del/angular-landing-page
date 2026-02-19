import { Component } from '@angular/core';
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { Cards } from "../../components/feature-component/cards/cards";
import { PricingList } from "../../components/Pricing-coponent/pricing-list/pricing-list";
import { EduWebDynamicsList } from "../../components/Pricing-coponent/edu-web-dynamics-list/edu-web-dynamics-list";
import { Faq } from "../../components/Pricing-coponent/faq/faq";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";
import { SlideLogoItem } from "../../components/Pricing-coponent/slide-logo-item/slide-logo-item";

@Component({
  selector: 'app-price-list',
  imports: [Featuress, Cards, PricingList, EduWebDynamicsList, Faq, MoneyBackSlider, SlideLogoItem],
  templateUrl: './price-list.html',
  styleUrl: './price-list.css',
})
export class PriceList {

}
