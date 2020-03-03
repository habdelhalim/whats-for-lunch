import {Restaurant} from './restaurant';

export interface Order {
  description: string;
  restaurant: Restaurant;
  author: string;
}
