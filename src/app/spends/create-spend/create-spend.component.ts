import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Spend {
  author: string;
  category: string;
  amount: number;
  observation: string;
}

@Component({
  selector: 'app-create-spend',
  templateUrl: './create-spend.component.html',
  styleUrls: ['./create-spend.component.css']
})
export class CreateSpendComponent implements OnInit {

  private spendsCollection: AngularFirestoreCollection<Spend>;
  spends: Observable<any[]>;
  spendForm: FormGroup;

  spendsCategories = [
    { value: 'comida', label: 'Comida' },
    { value: 'entretenimiento', label: 'entretenimiento' },
    { value: 'vestimenta', label: 'vestimenta' },
    { value: 'salud', label: 'salud' },
    { value: 'transporte', label: 'transporte' },
    { value: 'servicios', label: 'servicios' },
    { value: 'ocio', label: 'ocio' },
  ];

  constructor(afs: AngularFirestore, private fb: FormBuilder) {
    this.spendsCollection = afs.collection<Spend>('spends');
    this.spends = this.spendsCollection.valueChanges();
    this.createSpendForm();
  }

  createSpendForm() {
    this.spendForm = this.fb.group({
      author: 'Carlos Natera',
      category: this.spendsCategories[0].value ,
      amount: 0,
      observation: ''
    });
  }

  ngOnInit() {
  }

  guardarGasto() {
    console.log(this.spendForm.value);
    this.spendsCollection.add(this.spendForm.value);
  }

}
