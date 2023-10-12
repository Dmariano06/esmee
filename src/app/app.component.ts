import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TableauService } from './tableau.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private scrollSubscription: Subscription | undefined;
  public isScrolled = false;


  ngOnInit() {
    this.scrollSubscription = this.tableauService
      .getScrollTrigger()
      .subscribe((trigger) => {
        this.isScrolled = trigger;
      });
  }

  ngOnDestroy() {
    this.scrollSubscription!.unsubscribe();
  }
  title = 'esme';
  constructor(private renderer: Renderer2, private el: ElementRef, private tableauService: TableauService) {}

  scrollToComponentB() {
    const componentB = this.el.nativeElement.querySelector('#presentation');
    componentB.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToMoon() {
    const moon = this.el.nativeElement.querySelector('#moon');
    moon.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToSea() {
    const sea = this.el.nativeElement.querySelector('#vertical');
    sea.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToDesert() {
    const desert = this.el.nativeElement.querySelector('#hor');
    desert.scrollIntoView({ behavior: 'smooth' });
  }
}
