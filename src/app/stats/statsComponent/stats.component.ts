import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Spend } from '../../spends/spend';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private spendsCollection: AngularFirestoreCollection<Spend>;
  spends: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.spendsCollection = afs.collection<Spend>('spends');
    this.spends = this.spendsCollection.valueChanges();
   }

  ngOnInit() {
    console.log(this.spends);
  }

}
