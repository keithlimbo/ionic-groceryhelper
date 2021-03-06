import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { expensesItem, ExpensesStorageService } from 'src/app/services/expenses-storage.service';
@Component({
  selector: 'app-expenses-modal',
  templateUrl: './expenses-modal.component.html',
  styleUrls: ['./expenses-modal.component.scss'],
})
export class ExpensesModalComponent implements OnInit {

  newItem: expensesItem = <expensesItem>{};

  public expensesForm : FormGroup;

  constructor(private modalCtrl : ModalController, private formBuilder : FormBuilder, private expensesStorageService : ExpensesStorageService, private pltform : Platform, private toast : ToastController, private storage : Storage) { 
    this.expensesForm = formBuilder.group({
      expensesName: ['', Validators.required],
      expensesAmount: ['', Validators.required],
      expensesNote: ['', Validators.required],
      expensesDate: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  // Get Value from formGroup
  get name(): string{
    return this.expensesForm.value['expensesName'];
  }

  get budget(): string{
    return this.expensesForm.value['expensesBudget'];
  }

  get amount(): number{
    return this.expensesForm.value['expensesAmount'];
  }

  get note(): string{
    return this.expensesForm.value['expensesNote'];
  }

  get date(): string{
    return this.expensesForm.value['expensesDate'];
  }

  // Submit Expenses
  submitExpenses(){
    this.newItem.id = Date.now();
    this.newItem.name = this.name;
    this.newItem.amount = this.amount;
    this.newItem.note = this.note;
    this.newItem.date = this.date;
    this.expensesStorageService.addExpenseItems(this.newItem).then(item => {
      this.newItem = <expensesItem>{};
      this.showToast('Expenses added!');
    })
    this.dismissModal();
  }

  // Toast
  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
