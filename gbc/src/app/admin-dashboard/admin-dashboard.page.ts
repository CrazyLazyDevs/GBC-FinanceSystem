import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonIcon, IonButton } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { chevronExpandOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  imports: [
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    IonIcon,
    IonButton
  ]
})
export class AdminDashboardPage implements OnInit {

  constructor() {
    addIcons({
      'chevron-expand-outline': chevronExpandOutline
    });
  }

  ngOnInit() {

  }

}