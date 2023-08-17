import { Component, Input } from '@angular/core';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() food!: Foods;
  stars = [1, 2, 3, 4, 5];
  rating!: number;

  ngOnChanges() {
    if (this.food) {
      this.rating = this.food.stars;
    }
  }
}
