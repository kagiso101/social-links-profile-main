import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdviceObject } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(
    private http: HttpClient,

  ) { }

  getAdvice() {
    //TODO : add api calls to a file
    const url = 'https://api.adviceslip.com/advice'
    return this.http.get<AdviceObject>(url)
  }
}
