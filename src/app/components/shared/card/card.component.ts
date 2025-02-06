import { Component, Input } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { SocialLinks } from '../../../constants/types';
import { AdviceContent, AdviceObject } from '../../../constants/constants';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    BlockComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() linkList: SocialLinks[] = [];
  @Input() content: any
  @Input() advice: string = ''

  constructor(){}



}
