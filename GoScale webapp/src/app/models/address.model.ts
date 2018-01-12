export class Address {
   public  addressId:string;
	public  room:string;
	public  locality:string;
	public  zipCode:string;
	public  city:string;
	public  state:string;
	public  country:string;
	public  longitude:string;
	public  lattitude:string;
	public  createdBy:string; //userId
    public  createdDate:string;
    public  modifiedDate:string;
}
export class City {
    id: number;
    name: string;
    enabled: boolean;
    areas: Array<any>;
}
