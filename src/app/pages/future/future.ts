import { Component } from "@angular/core";
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { OurServices } from "../../components/feature-component/our-services/our-services";
import { SolutionsSection } from "../../components/home-coponent/solutions-section/solutions-section";
import { LogoSlider } from "../../components/home-coponent/logo-slider/logo-slider";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";
import { Cards } from "../../components/feature-component/cards/cards";

@Component({
  selector: 'app-future',
  imports: [Featuress, OurServices, SolutionsSection, LogoSlider, MoneyBackSlider, Cards],
  templateUrl: './future.html',
  styleUrl: './future.css',
})
export class Future {

}
