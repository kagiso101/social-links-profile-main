import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { SocialLinks } from '../../constants/types';
import { AdviceContent, AdviceObject, LinkInfo } from '../../constants/constants';
import { AdviceService } from '../../services/advice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [
    CardComponent,
    HttpClientModule
  ],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent implements OnInit {
  linkList = LinkInfo
  content = AdviceContent
  //set type
  advice: string = ''

  constructor(
    private adviceService: AdviceService
  ) { }

  ngOnInit(): void {
    for(let i = 0 ; i < 10 ; i++){
      this.adviceService.getAdvice().subscribe((res : AdviceObject) => {
        console.log(res);
        this.advice = res?.slip?.advice
      })
    }


  }

}
