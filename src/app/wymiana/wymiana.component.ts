import { Component, OnInit } from '@angular/core';
import { DaneService } from '../dane.service';
import { MapToIterable } from '../map-to-iterable.pipe';

@Component({
  selector: 'app-wymiana',
  templateUrl: './wymiana.component.html',
  styleUrls: ['./wymiana.component.sass'],
  providers: [DaneService]
})
export class WymianaComponent implements OnInit {
  zInput: string = "PLN";
  doInput: string;
  kwota: number;
  dane: any;

  constructor(private daneService: DaneService) {
    this.daneService.getCurDane(this.zInput)
        .subscribe(
        data => this.dane = data,
        error => alert(error),
        () => console.log('')
      );
  }
  getCurDaneInput(val){
    this.zInput = val;
    this.daneService.getCurDane(val)
        .subscribe(
        data => this.dane = data,
        error => alert(error),
        () => console.log('')
      );
  }
  ngOnInit() {
  }

}
