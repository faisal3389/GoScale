import { Ads } from "app/models/ad.model";
import{BaseResponse} from 'app/models/base-response.model';

export class AdResponse {
    baseresponse:BaseResponse;
    ads:Array<Ads>;
}