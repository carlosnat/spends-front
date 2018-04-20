import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpendsService } from '../services/spends.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private families: any;
  private categoryForm: FormGroup;
  private groupSelect: any = [];

  constructor(private fb: FormBuilder, private spendService: SpendsService) { }

  ngOnInit() {
    this.spendService.getFamilies().subscribe( (data: any) => {
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
      this.spendService.createCategory(this.categoryForm.get('family').value, this.categoryForm.value).subscribe( res => {
        this.categoryForm.reset();
      });
    }
  }

}
