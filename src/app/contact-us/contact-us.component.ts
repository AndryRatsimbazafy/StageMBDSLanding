import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  isSending: boolean = false;
  contactFormGroup: FormGroup;
  unsubscribeAll: Subject<boolean>;
  successMessage: string;
  errorMessage: string;

  constructor(public service: MainService) {
    this.unsubscribeAll = new Subject();
    this.contactFormGroup = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  checkError(controlName: string, errorName: string) {
    return (
      this.contactFormGroup.controls[controlName].hasError(errorName) &&
      this.contactFormGroup.controls[controlName].touched
    );
  }

  onSubmit() {
    if (this.contactFormGroup.invalid) {
      this.errorMessage = "Veuillez remplir correctement tous les champs obligatoires";
      setTimeout(() => {
        this.errorMessage = "";  
      }, 3000);
      return;
    }

    this.isSending = true;
    this.service
      .contact(this.contactFormGroup.value)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
        (result) => {
          if (result && result.success) {
            this.isSending = false;
            this.successMessage = result.message;
            this.contactFormGroup.reset();
            setTimeout(() => {
              this.successMessage = '';
            }, 4000);
          }
        },
        (err) => {
          this.isSending = false;
          this.errorMessage = err.error.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 4000);
        }
      );
  }
}
