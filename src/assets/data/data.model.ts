export interface Gig {
  id: string;
  clientId: string,
  description?: string;
  date: Date;
  time?: string;
  location?: string;
  bandName?: string;
  cover?: number;
  title: string,
  image?: string,
  ticketLink?: string;
}
