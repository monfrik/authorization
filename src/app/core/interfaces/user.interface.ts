import { IUserAddress } from './user-address.inteface';
import { IBillingInfo } from './billing-info';


export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  sex: string;
  birthday: Date;
  phone: string;
  address: IUserAddress;
  billingAddress: IUserAddress;
  billingInfo?: IBillingInfo;
}
