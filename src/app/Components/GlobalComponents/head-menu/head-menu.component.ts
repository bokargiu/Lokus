import { Component, OnInit } from '@angular/core';
import { PhotoDto } from 'src/app/Dto\'s/photoDto';
import { PhotoService } from 'src/app/Services/photo.service';


@Component({
  selector: 'app-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.css']
})
export class HeadMenuComponent implements OnInit {
  LokusPhoto!:string
  constructor(private _photoService:PhotoService){}
ngOnInit(): void {
  this.LokusPhoto = "data:image/png;base64,"
    this._photoService.getLokusImage().subscribe({
      next: (image) => {
        this.LokusPhoto += image.base64Data
        console.log(image.base64Data)
      }
      ,
      error: (err) => console.error(err)
    })
}
}
