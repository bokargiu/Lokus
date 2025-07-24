import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PhotoService {

    constructor () {}

    getImages(){
        return [
            {
                itemImageSrc: 'https://t4.ftcdn.net/jpg/03/26/12/23/360_F_326122335_RKvTXMb4RYkIzk94ZoPjkZQe2CUOVnen.jpg',
                alt: 'Description for Image 1',
                title: 'Imagem 1'
            },
             {
                itemImageSrc: 'https://thumbs.dreamstime.com/b/portrait-meeting-training-business-asian-woman-sitting-boardroom-team-seminar-happy-smile-workshop-female-364197319.jpg',
                alt: '',
                title: 'Imagem 2'
            }

        ]
    }
}
