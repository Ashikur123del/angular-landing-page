import { Component } from '@angular/core';
import { Supports } from "../../components/support-component/supports/supports";
import { Featuress } from "../../components/feature-component/featuress/featuress";
import { ShareVideoDemo } from "../../components/share-compo/share-video-demo/share-video-demo";

@Component({
  selector: 'app-support',
  imports: [Supports, Featuress, ShareVideoDemo],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support {

}
