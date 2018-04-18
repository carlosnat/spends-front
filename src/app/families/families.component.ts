import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})
export class FamiliesComponent implements OnInit {

  private familyForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.familyForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  saveFamily() {
    if (this.familyForm.valid) {
      this.http.post('http://localhost:3000/family', this.familyForm.value).subscribe(res => {
        console.log('res', res);
        this.familyForm.reset();
      });
    }
  }

}
