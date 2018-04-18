import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private families: any;
  private categoryForm: FormGroup;
  private groupSelect: any = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/family').subscribe( (data: any) => {
      this.families = data.families;
    });
    this.categoryForm = this.fb.group({
      family: ['', Validators.required],
      name: ['', Validators.required ],
      group: ['', Validators.required]
    });
  }

  familySelected(event) {
    this.groupSelect = this.families.find( element => {
      return element._id === event.target.value;
    });
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      const apiUrl = `http://localhost:3000/family/spendcategory/${this.categoryForm.get('family').value}`;
      this.http.post(apiUrl, this.categoryForm.value).subscribe( res => {
        console.log('res', res);
        this.categoryForm.reset();
      });
    }
  }

}
