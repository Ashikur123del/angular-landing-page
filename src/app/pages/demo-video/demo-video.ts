import { Component } from '@angular/core';
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { ShareVideoDemo } from "../../components/share-compo/share-video-demo/share-video-demo";
import { Cards } from "../../components/feature-component/cards/cards";
import { MoneyBackSlider } from "../../components/home-coponent/money-back-slider/money-back-slider";

@Component({
  selector: 'app-demo-video',
  imports: [Featuress, ShareVideoDemo, Cards, MoneyBackSlider],
  templateUrl: './demo-video.html',
  styleUrl: './demo-video.css',
})
export class DemoVideo {

}
