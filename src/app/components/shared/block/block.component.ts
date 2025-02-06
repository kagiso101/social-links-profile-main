import { Component, Input } from '@angular/core';
import { SocialLinks } from '../../../constants/types';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input() linkList: SocialLinks[] = []

  redirect(link: any): void {
    window.open(link, '_blank');
  }


}
