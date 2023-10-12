import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private scrollTrigger = new Subject<boolean>();

  setScrollTrigger(trigger: boolean) {
    this.scrollTrigger.next(trigger);
  }

  getScrollTrigger() {
    return this.scrollTrigger.asObservable();
  }
}