import { Component, OnInit } from '@angular/core';
import { DaneService } from '../dane.service';

@Component({
    selector: 'app-kurs',
    templateUrl: './kurs.component.html',
    styleUrls: ['./kurs.component.sass'],
    providers: [DaneService]
})

export class KursComponent implements OnInit {

    public dane: any;
    selectedValue:string = 'PLN';

    constructor(private daneService: DaneService) {
        this.daneService.getCurDane(this.selectedValue)
            .subscribe(
            data => this.dane = data,
            error => alert(error),
            () => console.log('')
          );
    }

    getCurDaneInput(val: string): any{
      event.preventDefault();
      this.daneService.getCurDane(val)
          .subscribe(
          data => this.dane = data,
          error => alert(error),
          () => this.selectedValue = val
        );
        console.log(this.selectedValue)
    }

    MalaWaluta(val, sym){
      if(val < 0.1) return {val: val*100, sym: '100 '+sym};
      else if (val < 0.01) return {val: val*1000, sym: '1000 '+sym };
      return {val: val, sym: '1 '+sym};
    }

    ngOnInit() {
    }
}
