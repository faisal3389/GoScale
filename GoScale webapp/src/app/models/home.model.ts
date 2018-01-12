import { BaseResponse } from "app/models/base-response.model";
import { Section } from "app/models/section-ads.model";
import { Categories } from "app/models/categories.model";

export class Home {
    public adSection:Array<Section>;
    public baseresponse:BaseResponse;
    public categories:Array<Categories>;
}