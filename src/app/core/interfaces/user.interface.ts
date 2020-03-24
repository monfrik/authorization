import { IUserAddress } from './user-address.inteface';
import { IBillingInfo } from './billing-info';


export interface IUser {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  patronymic: string;
  sex: string;
  birthday: Date;
  phone: string;
  address: IUserAddress;
  billingAddress: IUserAddress;
  billingInfo?: IBillingInfo;
}
