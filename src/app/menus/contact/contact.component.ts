import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Contact } from 'src/app/contact.model';
import { ContactService } from 'src/app/contact.service';
import { TawkService } from 'src/app/tawk.service';
// import { FormulaireService } from 'src/app/formulaire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  @Input() contact!: string;

  // client!: Contact;
  // contactForm!: FormGroup;
  
  constructor(
    private formbulde : FormBuilder,
    private viewportSroller: ViewportScroller,
    private contactService: ContactService,
    private tawk: TawkService
  ) { }

  ngOnInit(): void {

    this.viewportSroller.scrollToPosition([0, 0]);

    // this.contactForm = this.formbulde.group(
    //   {
    //     nom: ['', Validators.required],
    //     prenom: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     phone: ['', Validators.required],
    //     message: ['', Validators.required],
    //     services: ['', Validators.required]
    //   }
    // );
  }

  //openChat(): void {
    // this.tawk.loadScript().then(() => {
    //   this.tawk.openChat();
    // });
   // this.tawk.loadScript();
      // .then(() => {
      //   console.log('Chat ouvert');
      // })
      // .catch(err => {
      //   console.error('Erreur lors de l\'ouverture du chat :', err);
      // });
  //}

  // successMessage: string | null = null;
  // errorMessage: string | null = null;

  // onSubmit(){
  //   this.successMessage = null;
  //   this.errorMessage = null;

  //   if (this.contactForm.valid) {
  //     this.contactService.saveClient(this.contactForm.value).subscribe(
  //       (response) => {
  //         console.log(response);
  //         console.log(this.contactForm.value);
          
  //         this.successMessage = "Merci de nous avoir contacter, nous vous reviendrons dans un bref délai !";
  //         this.errorMessage = "";
  //         this.contactForm.reset();
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'envoie du formulaire :', error);
  //         this.successMessage = "";
  //         this.errorMessage = 'Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.';
  //       }
  //     );
  //     setTimeout(() => {
  //       this.successMessage = '';
  //       this.errorMessage = '';
  //     }, 3000);

  //   }else{
  //       console.log("formulaire invalide, veuillez vérifier les champs");
  //       this.errorMessage = 'Le formulaire est invalide. Veuillez vérifier les champs.';
  //   }              
  // }

  // async onSubmit() {
  //   try {
  //     const saveClient = await this.contactService.saveClient(this.client);
      // Gérer l'enregistrement réussi (ex : afficher un message de confirmation)
      // console.log("Client enregistré avec succès :", saveClient);
    //   this.contactForm.reset(); // Reset the form after successful submission
    // } catch (error) {
    //   console.error("Erreur lors de l'enregistrement :", error);
      // Gérer l'erreur d'enregistrement (ex : afficher un message d'erreur à l'utilisateur)
      // Vous pouvez utiliser une notification toast ou un message d'alerte pour informer l'utilisateur
  //   }
  // }
  
}
