import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpendsService } from '../services/spends.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  private groupForm: FormGroup;
  private families: any;

  constructor(private fb: FormBuilder, private spendService: SpendsService) { }

  ngOnInit() {
    this.spendService.getFamilies().subscribe( (data: any) => {
      this.families = data.families;
    });

    this.groupForm = this.fb.group({
      family: [ '', Validators.required ],
      name: ['', Validators.required]
    });
  }

  saveGroup() {
    if (this.groupForm.valid) {
      this.spendService.createGroup(this.groupForm.get('family').value, this.groupForm.value).subscribe( res => {
        this.groupForm.reset();
      });
    }
  }

}
