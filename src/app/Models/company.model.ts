export interface CardCompany {
    nome:string,
    preco : number
}

export interface Place {
  id: number;
  name: string;
  description: string;
  reservations: Reservation[];
}

export interface Reservation {
  id: number;
  placeId: number;
  date: string;      // yyyy-mm-dd
  startTime: string; // hh:mm
  endTime: string;   // hh:mm
  reservedBy?: string;
}

export interface TimeBlock {
  start: string;    // "08:00"
  end: string;      // "09:00"
  reservedBy?: string; // se estiver ocupado
}