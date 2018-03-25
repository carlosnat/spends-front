import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Spend } from '../spend';

@Component({
  selector: 'app-create-spend',
  templateUrl: './create-spend.component.html',
  styleUrls: ['./create-spend.component.css']
})
export class CreateSpendComponent implements OnInit {

  private spendsCollection: AngularFirestoreCollection<Spend>;
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
    this.createSpendForm();
  }

  createSpendForm() {
    this.spendForm = this.fb.group({
      author: ['', Validators.required],
      category: [this.spendsCategories[0].value],
      amount: [0, [Validators.min(1), Validators.required]],
      observation: ['']
    });
  }

  ngOnInit() {
  }

  guardarGasto() {
    const newSpend = this.spendForm.value;
    newSpend.created_at = Date.now();
    this.spendsCollection.add(newSpend);
  }

}
