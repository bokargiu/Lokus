// src/app/models/stablishment.model.ts
export interface StablishmentResponseDto {
  id: string;
  name: string;
  virtualName: string;
  description: string;
  contact: string;
  companyId: string;
  galleries: StablishmentGalleryDto[];
}

export interface StablishmentGalleryDto {
  id: string;
  url: string;
}

export interface CompanyDto {
  nameCompany: string;
  cnpj: string;
  contactOther: string;
  username: string;
  password: string;
  email: string;
  stablishments: StablishmentResponseDto[];
}
