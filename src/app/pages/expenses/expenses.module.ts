import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesPageRoutingModule } from './expenses-routing.module';

import { ExpensesPage } from './expenses.page';
import { ExpensesModalComponent } from 'src/app/components/expenses-modal/expenses-modal.component';
import { ExpensesUpdateModalComponent } from 'src/app/components/expenses-update-modal/expenses-update-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExpensesPageRoutingModule
  ],
  declarations: [ExpensesPage, ExpensesModalComponent, ExpensesUpdateModalComponent],
  entryComponents: [ExpensesModalComponent, ExpensesUpdateModalComponent]
})
export class ExpensesPageModule {}
