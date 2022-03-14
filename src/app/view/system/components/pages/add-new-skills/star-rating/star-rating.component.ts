import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() count:number = 2;
  @Output() activeStar = new EventEmitter<number>();
  @Input() _activeStar:number = 2;

  constructor() { }
  ngOnInit(): void {
    this.activeStar.subscribe(res=>{
      this._activeStar = res;
    })
  }

  checkStar(index: number) {
    this.activeStar.emit(index);
  }
}
