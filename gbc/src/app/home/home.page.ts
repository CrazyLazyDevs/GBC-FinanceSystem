import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import { ApiService, Account } from '../services/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HomePage implements OnInit {

  accounts: Account[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly api: ApiService
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.api.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;

        // Show accounts in browser console
        console.log('Accounts:', data);
      },
      error: (error) => {
        console.error('Failed to fetch accounts:', error);
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}