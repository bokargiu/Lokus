export interface CardCompany {
    nome:string,
    preco : number
}

export interface Availability {
  id: number;
  placeId: number;
  startTime: string;
  endTime: string;
  specificDate?: Date;
  dayOfWeek?: number;
  month?: number;
}

export interface Place {
  id: number;
  name: string;
  type: string;
  capacity: number;
  description: string;
  availabilities: Availability[];
}


export interface TimeBlock {
  start: string;    // "08:00"
  end: string;      // "09:00"
  reservedBy?: string; // se estiver ocupado
}