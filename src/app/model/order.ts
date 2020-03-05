import {Restaurant} from './restaurant';

export interface Order {
  id?: string;
  description: string;
  restaurant: string;
  author: string;
  quantity: number;
}
