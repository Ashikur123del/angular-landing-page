import { Component } from '@angular/core';
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { ShareVideoDemo } from "../../components/share-compo/share-video-demo/share-video-demo";
import { Cards } from "../../components/feature-component/cards/cards";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";

@Component({
  selector: 'app-graphical-view',
  imports: [Featuress, ShareVideoDemo, Cards, MoneyBackSlider],
  templateUrl: './graphical-view.html',
  styleUrl: './graphical-view.css',
})
export class GraphicalView {

}
