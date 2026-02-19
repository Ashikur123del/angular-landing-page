import { Component } from '@angular/core';
import { ShareVideoDemo } from "../../share-compo/share-video-demo/share-video-demo";
import { RouterLink } from "@angular/router";
import { SupprotsAIHelpDesk } from "../supprots-ai-help-desk/supprots-ai-help-desk";
import { SupportDesk } from "../support-desk/support-desk";
import { EdumanCustomerSupport } from "../eduman-customer-support/eduman-customer-support";
import { SupportFaq } from "../support-faq/support-faq";
import { SlideLogoItem } from "../../Pricing-coponent/slide-logo-item/slide-logo-item";

@Component({
  selector: 'app-supports',
  imports: [ShareVideoDemo, RouterLink, SupprotsAIHelpDesk, SupportDesk, EdumanCustomerSupport, SupportFaq, SlideLogoItem],
  templateUrl: './supports.html',
  styleUrl: './supports.css',
})
export class Supports {

}
