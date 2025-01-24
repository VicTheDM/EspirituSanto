import { Component, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ImagesService } from '../../../../services/images.service';

@Component({
  selector: 'app-inicio:not(i)',
  templateUrl: './inicio.component.html',
  imports: [Carousel],
  providers: [ImagesService],
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  images = [{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},]
  responsiveOptions: any[] | undefined;
  displayCustom: boolean | undefined;

  activeIndex: number = 0;
  i: number = 0;
  constructor(private imageService: ImagesService) {}

  async ngOnInit() {
    this.imageService.getImagesSmall().then((images) => {
      this.images = images;
  });

  this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

}
