import { Component, OnInit, Inject, Host, Optional} from '@angular/core';
import { RandomStringService } from './random-string.service';
import { RandomLengthStringNFactory,RandomLengthString } from './random-string.factory';

@Component({
  selector: 'app-random-string',
  templateUrl: './random-string.component.html',
  styleUrls: ['./random-string.component.css'],
  providers: [
    RandomStringService,
    { provide: RandomLengthString, useFactory:  RandomLengthStringNFactory(10), deps: [ RandomStringService ] }
    
   ]
})
export class RandomStringComponent implements OnInit {
content: string = "";
  constructor(/*private randomService: RandomStringService*/
  @Inject(RandomLengthString) private dataTop3: string
  ) { }

  ngOnInit() {
    this.content = `RandomLengthString: ${this.dataTop3}`;
  }

}
