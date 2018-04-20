import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpendsService } from '../services/spends.service';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})
export class FamiliesComponent implements OnInit {

  private familyForm: FormGroup;

  constructor(private fb: FormBuilder, private spendService: SpendsService) { }

  ngOnInit() {
    this.familyForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  saveFamily() {
    if (this.familyForm.valid) {
      this.spendService.createFamily(this.familyForm.value).subscribe(res => {
        this.familyForm.reset();
      });
    }
  }

}
