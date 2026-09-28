import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonLabel } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  imports: [IonButton, IonContent, IonInput, IonItem, IonLabel, CommonModule, FormsModule]
})
export class AdminPage {
  email = '';
  password = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  onSubmit(): void {
    if (this.isSubmitting) return;
    this.errorMessage = '';
    this.isSubmitting = true;
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigateByUrl('/home', { replaceUrl: true }),
      error: (error) => {
        this.errorMessage = error.error?.message ?? 'Unable to connect to the server.';
        this.isSubmitting = false;
      },
    });
  }
}
