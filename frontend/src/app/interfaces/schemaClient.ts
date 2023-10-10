export class Client {
    constructor( _id:string, name:string, lastName: string, userName: string, phone: string,
        email: string,
        password: string,
        birthday: string,
        preferences: string,
        hasCreditCard: boolean,) {
    
            this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.preferences = preferences;
    this.hasCreditCard = hasCreditCard;
}
_id?: string;
name: string;
lastName: string;
userName: string;
phone: string;
email: string;
password: string;
birthday: string;
preferences: string;
hasCreditCard: boolean;

}