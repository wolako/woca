import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormulaireService } from 'src/app/formulaire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  @Input() contact!: string;

  contactForm!: FormGroup;

  constructor(
    private formbulde : FormBuilder,
    private viewportSroller: ViewportScroller,
    private formulaireService: FormulaireService
  ) { }

  ngOnInit(): void {

    this.viewportSroller.scrollToPosition([0, 0]);

    this.contactForm = this.formbulde.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        sujet: ['', Validators.required],
        message: ['', Validators.required]
      }
    );
  }

  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  onSubmit(){

    this.submitted = true;
    
    if (this.contactForm.valid) {
        this.formulaireService.addContact(this.contactForm.value).subscribe(
            response => {
                console.log('Données ajoutées avec succès', response);
                this.successMessage = 'Votre message a été envoyé avec succès. Merci!';
                this.errorMessage = null;
                this.submitted = false;
                // Réinitialiser le formulaire après l'ajout des données
                this.contactForm.reset();
        },
        error => {
          // console.error('Erreur lors de l\'ajout des données', error);
          this.errorMessage = 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.';
          this.successMessage = null;
        }
      );
      
    }

    // if (this.contactForm.valid) {
    //   const formData = this.contactForm.value;
    //   this.formulaireService.addContact(formData).subscribe(
    //     () => {
    //       console.log('Formulaire soumis avec succès!');
    //       // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires.
    //     },
    //     error => {
    //       console.error('Erreur lors de la soumission du formulaire:', error);
    //     }
    //   );
    // }
  }
  

}
