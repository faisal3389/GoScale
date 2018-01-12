import{Address} from '../models/address.model'
export class Ads {
   public  adId:string;
    public adImageUrl :Array<any> ;
    public byteImages:Array<any> ;
    public  adTitle:string;//<==
    public  adInfo:string;
    public  adCategory:string;
    public  adType:string; // Sell, Rent, Donate or combination of these(Sell;Rent;Donate)
    public  adCondition:number; //used-0, used and good-1, new-2
    public  adPrice:number;
    public  adRentPrice:number;
    public  adRentType:number; // per day - 1 / week-2 / month-3 / semester-4 / year-5
    public  adCreatedBy:string; //userId
    public  adCreatedByName:string; //userId
    public  adCreatedByImageUrl:string; //userId
    public  adCreatedDate:string;
    public  adViews:number;
    public  noFavourites:number;
    public  adStatus:number; // Sold-0, Visible-1, Disable-2, Sell by CH request-3, verified-4,Sold by CH-5, Payment received-6, payment done-7, Blocked-10
    public  email:string;
    public  mobile:string;
    public  address:Address; // Change this to a class(create address class)
    public  isChat:boolean;
    public  adPoint:number;
    public  adCampus:string;	// Only 1 campus, ex: 1
    public  adCampusName:string;
    public adBiddingList:Array<String> ;
    public  adReviewList:Array<any>;
    //AD Details
    //adTitle, adInfo, adType, adCondition, adPrice, adRentPrice, adRentType
    //Ad card
    //image, title, condition, type
}
