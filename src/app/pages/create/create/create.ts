import { Component } from '@angular/core';
import { Creates } from "../../../components/create-copmonent/creates/creates";
import { Contact } from "../../../components/create-copmonent/contact/contact";

@Component({
  selector: 'app-create',
  imports: [Creates, Contact],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {

}
