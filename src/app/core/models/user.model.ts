export class UserModel {

  public id: number;
  public name: string;

  public constructor(userData: any = {}) {
    this.id = userData.id;
    this.name = userData.name;
  }

}
