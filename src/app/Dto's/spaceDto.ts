export interface SpaceCreateDto {
  stablishmentId: string;
  name: string;
  capacity: number;
  description?: string;
  price: number;
  priceEnum: number;
}
