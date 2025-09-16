import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesProfileService {

  constructor() { }
  GetImages(){
    let i: any[] | undefined;
    i = [
     {
        itemImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/060a05d2-a202-404b-858a-cf78d07523cc.jpeg',
        thumbnailImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/060a05d2-a202-404b-858a-cf78d07523cc.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
     },
     {
      itemImageSrc: 'https://www.oond.com.br/assets/images/espacos/688_638461129213994908.jpg',
      thumbnailImageSrc: 'https://www.oond.com.br/assets/images/espacos/688_638461129213994908.jpg',
      alt: 'Description for Image 2',
      title: 'Title 1'
   },
   {
    itemImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/475104e5-5a29-4ee6-bca0-d40190201c36.jpeg',
    thumbnailImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/475104e5-5a29-4ee6-bca0-d40190201c36.jpeg',
    alt: 'Description for Image 3',
    title: 'Title 1'
 },
 {
  itemImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/ec29ed22-2d37-4468-b4dd-727da261f63f.jpeg',
  thumbnailImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/ec29ed22-2d37-4468-b4dd-727da261f63f.jpeg',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/af38cf98-da06-456e-8c41-e100b6e12b38.jpeg',
  thumbnailImageSrc: 'https://d1y4va1nna2r1p.cloudfront.net/spaces/af38cf98-da06-456e-8c41-e100b6e12b38.jpeg',
  alt: 'Description for Image 1',
  title: 'Title 1'
},

    ]
    return i
  }
}

