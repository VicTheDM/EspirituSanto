import { Injectable } from '@angular/core';
    
@Injectable()
export class ImagesService {
    getImagesData() {
        return [
    {
        itemImageSrc: './../assets/iglesia/I8.jpg',
        thumbnailImageSrc: './../assets/iglesia/I8.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: './../assets/iglesia/I1.jpg',
        thumbnailImageSrc: './../assets/iglesia/I1.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: './../assets/iglesia/I2.jpg',
        thumbnailImageSrc: './../assets/iglesia/I2.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: './../assets/iglesia/I3.jpg',
        thumbnailImageSrc: './../assets/iglesia/I3.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      },
      {
        itemImageSrc: './../assets/iglesia/I4.jpg',
        thumbnailImageSrc: './../assets/iglesia/I4.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      },
      {
        itemImageSrc: './../assets/iglesia/I5.jpg',
        thumbnailImageSrc: './../assets/iglesia/I5.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
      },
      {
        itemImageSrc: './../assets/iglesia/I6.jpg',
        thumbnailImageSrc: './../assets/iglesia/I6.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7'
      },
      {
        itemImageSrc: './../assets/iglesia/I7.jpg',
        thumbnailImageSrc: './../assets/iglesia/I7.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
      }
        ];
    }

    getImagesMini() {
        return Promise.resolve(this.getImagesData().slice(0, 5));
    }

    getImagesSmall() {
        return Promise.resolve(this.getImagesData().slice(0, 10));
    }

    getImages() {
        return Promise.resolve(this.getImagesData());
    }
};