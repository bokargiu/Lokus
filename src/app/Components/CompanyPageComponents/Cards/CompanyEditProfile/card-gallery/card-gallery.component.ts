import { Component, OnInit, Input } from '@angular/core';
import { StablishmentGalleryService, StablishmentGalleryDto } from 'src/app/Services/stablishment-gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit {

  @Input() stablishmentId!: string; 
  images: StablishmentGalleryDto[] = [];
  slots = Array.from({ length: 10 }); // 10 slots

  constructor(private galleryService: StablishmentGalleryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.stablishmentId) { // pega da rota só se não recebeu como input
      this.route.params.subscribe(params => {
        this.stablishmentId = params['id'];
        this.loadImages();
      });
    } else {
      this.loadImages();
    }
  }

  loadImages(): void {
    if (!this.stablishmentId) return;
    this.galleryService.getImages(this.stablishmentId).subscribe({
      next: res => this.images = res,
      error: err => console.error('Erro ao carregar imagens', err)
    });
  }

  onFileSelected(event: any, slotIndex: number): void {
    const file = event.target.files[0];
    if (!file) return;

    if (this.images.length >= 10) {
      alert('Limite de 10 imagens atingido');
      return;
    }

    this.galleryService.uploadImage(this.stablishmentId, file).subscribe({
      next: () => this.loadImages(),
      error: err => console.error('Erro ao enviar imagem', err)
    });
  }

  deleteImage(imageId: string): void {
    if (!imageId) return;

    this.galleryService.deleteImage(imageId).subscribe({
      next: () => this.loadImages(),
      error: err => console.error('Erro ao deletar imagem', err)
    });
  }

  salvar(): void {
    alert('Alterações salvas! (ainda precisa integrar ao perfil do stablishment)');
  }



}

