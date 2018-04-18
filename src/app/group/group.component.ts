import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  private groupForm: FormGroup;
  private families: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/family').subscribe( (data: any) => {
      this.families = data.families;
    });

    this.groupForm = this.fb.group({
      family: [ '', Validators.required ],
      name: ['', Validators.required]
    });
  }

  saveGroup() {
    if (this.groupForm.valid) {
      const apiUrl = `http://localhost:3000/family/spendgroup/${this.groupForm.get('family').value}`;
      this.http.post(apiUrl, this.groupForm.value).subscribe( res => {
        this.groupForm.reset();
        console.log('res', res);
      });
    }
  }

}
