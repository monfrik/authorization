export class UserModel {

  public name: string;
  private _id: number;

  public constructor(userData: any = {}) {
    this.name = userData.name;
    this._id = userData.id;
  }

}