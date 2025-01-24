import { Component, OnInit, ViewChild, model } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ImagesService } from '../../../../services/images.service';
import { GalleriaModule  } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-galeria:not(g)',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  imports: [Carousel,CommonModule, GalleriaModule],
  providers: [ImagesService],
})
export class GaleriaComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  displayCustom: boolean  = false;
  images = model([{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  }])
  // images = [{
  //   itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
  //   thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
  //   alt: 'Description for Image 1',
  //   title: 'Title 1'
  // }]
  
  responsiveOptions2: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  activeIndex: number = 0;
  i: number = 0;
  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.imageService.getImagesSmall().then((res) => this.images.set(res));
}

imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}
}