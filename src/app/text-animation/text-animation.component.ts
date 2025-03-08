import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'woca-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        
        style({ opacity: 0, transform: 'translateX(-100%)'}),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]

})
export class TextAnimationComponent implements OnInit {
messages: { titre: string, message: string, imageUrl: string }[] = [];
  currentMessageIndex = 0;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.displayNextMessage();
  }

  displayNextMessage(): void {
    setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    }, 3000); // Change message every 3 seconds
  }

}
