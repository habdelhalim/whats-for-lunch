import {Restaurant} from './restaurant';

export interface Order {
  id: string;
  description: string;
  restaurant: Restaurant;
  author: string;
}
