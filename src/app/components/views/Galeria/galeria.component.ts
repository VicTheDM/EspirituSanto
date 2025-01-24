import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-galeria:not(g)',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  images = [
    {
      src : '../../../../assets/iglesia/I8.jpg',
      tsrc: '../../../../assets/iglesia/I8.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      src : '../../../../assets/iglesia/I1.jpg',
      tsrc: '../../../../assets/iglesia/I1.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      src : '../../../../assets/iglesia/I2.jpg',
      tsrc: '../../../../assets/iglesia/I2.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      src : '../../../../assets/iglesia/I3.jpg',
      tsrc: '../../../../assets/iglesia/I3.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    },
    {
      src : '../../../../assets/iglesia/I4.jpg',
      tsrc: '../../../../assets/iglesia/I4.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    },
    {
      src : '../../../../assets/iglesia/I5.jpg',
      tsrc: '../../../../assets/iglesia/I5.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6'
    },
    {
      src : '../../../../assets/iglesia/I6.jpg',
      tsrc: '../../../../assets/iglesia/I6.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7'
    },
    {
      src : '../../../../assets/iglesia/I7.jpg',
      tsrc: '../../../../assets/iglesia/I7.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8'
    }
  ];
  responsiveOptions: any[] | undefined;
  displayCustom: boolean | undefined;

  activeIndex: number = 0;
  i: number = 0;
  constructor() {
    // this.galleryService.getImages().then((images) => (this.images = images));
  }
  async ngOnInit() {
    this.i = 0;
    console.log(this.images);
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1,
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1,
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1,
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1,
      },
  ];
  }
  getSlide() {
    return this.images[this.i].src;
  }

  getPrev() {
    this.i == 0 ? (this.i = this.images.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.images.length - 1 ? this.i++ : (this.i = 0);
  }

  
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
