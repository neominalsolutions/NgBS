export interface Order {
  orderDate: Date;
  total: number;
  firstName: string;
  lastName: string;
  currency: string | number; // Para birimi
  orderStatus: string;
}
