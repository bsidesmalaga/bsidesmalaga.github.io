export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SPEAKERS = 'speakers',
  AGENDA = 'agenda',
  VENUE = 'venue',
  SPONSORS = 'sponsors',
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  topic: string;
  image: string;
}