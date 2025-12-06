import { Component } from '@angular/core';
import {HoverHighlightDirective} from '../../directives/hover-highlight.directive';

@Component({
  selector: 'app-contact-me',
  imports: [
    HoverHighlightDirective
  ],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {

}
