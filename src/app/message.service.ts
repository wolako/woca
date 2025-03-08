import { Injectable } from '@angular/core';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: { titre: string, message: string, imageUrl: string }[] = [
    { titre: 'Développement web', message: 'Ayez un site qui non seulement impressionne, mais qui génère également des résultats.', imageUrl: '../assets/images/12.png' },
    { titre: 'Marketing', message: 'Démarquez-vous et faites prospérer votre entreprise dans un marché concurrentiel', imageUrl: '../assets/images/30.png' },
    { titre: 'Graphisme', message: 'Donner un coup de fouet visuel à votre marque.', imageUrl: '../assets/images/29.png' },
    { titre: 'Montage-vidéo', message: 'Transformer vos idées en vidéos percutantes et engageantes.', imageUrl: '../assets/images/18.png' },
    { titre: 'Coaching & Publication de livre', message: 'Ne laissez pas vos idées rester dans l\'ombre.', imageUrl: '../assets/images/b11.png' }
  ];

  getMessages(): { titre: string, message: string, imageUrl: string }[] {
    return this.messages;
  }
}
