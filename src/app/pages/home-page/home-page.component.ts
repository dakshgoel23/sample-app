import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
declare const bootstrap: any;
@Component({
  selector: 'app-home-page',
  imports: [RouterLink,AboutUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('#infoCarousel');
    new bootstrap.Carousel(carouselElement, {
      interval: 2000, // Auto-slide every 5 seconds
      wrap: true, // Loop back to the first slide
    });
  }
}
