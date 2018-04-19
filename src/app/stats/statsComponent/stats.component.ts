import { Component, OnInit } from '@angular/core';
import { Spend } from '../../spends/spend';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private families: any;
  private familySelected: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/family').subscribe( (data: any) => {
      this.families = data.families;
    });
  }

  onFamilySelected(event) {
    this.familySelected = this.families.find( element => {
      return element._id === event.target.value;
    });
  }

}
