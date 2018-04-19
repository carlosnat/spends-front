import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Spend } from '../spend';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-spend',
  templateUrl: './create-spend.component.html',
  styleUrls: ['./create-spend.component.css']
})
export class CreateSpendComponent implements OnInit {

  spendForm: FormGroup;
  private families: any;
  private groupSelect: any;
  private categorySelect: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.http.get('http://localhost:3000/family').subscribe( (data: any) => {
      this.families = data.families;
    });
    this.createSpendForm();
  }

  createSpendForm() {
    this.spendForm = this.fb.group({
      family: ['', Validators.required],
      group: [''],
      category: [''],
      amount: ['', Validators.min(1)],
      observation: [''],
      spendDate: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  guardarGasto() {
    if (this.spendForm.valid) {
      const apiUrl = `http://localhost:3000/family/spend/${this.spendForm.get('family').value}`;
      this.http.post(apiUrl, this.spendForm.value).subscribe( res => {
        this.spendForm.reset();
        console.log('res', res);
      });
    }
  }

  familySelected(event) {
    this.groupSelect = this.families.find( element => {
      return element._id === event.target.value;
    });
  }

  groupSelected(event) {
    this.categorySelect = this.groupSelect.spenscategory.filter( element => {
      return element.group === event.target.value;
    });
  }

}
