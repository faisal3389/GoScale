import { Ads } from "app/models/ad.model";

export class Section {
        public sectionId:number;
        public sectionTitle:String;
        public sectionAds:Array<Ads>;
}