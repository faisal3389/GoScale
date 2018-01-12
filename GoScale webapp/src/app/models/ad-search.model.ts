export class AdSearch {
      searchKey : string;
	  adCampus :  number;	// Only 1 campus, ex: 1
	  categoryList: string;  // Ex: 1;2;3;
	  adCondition:number;	// default=0, Used-1, Used&good-2, new-3, multiple: 12,13,23,123
	  adStatus:number;
	  sellPriceMin:number;
	  sellPriceMax:number;
	  isDonate :number;
	  isSell:number;
	  isRent:number;
	  rentPriceMin:number;
	  rentPriceMax:number;
	  rentType:number;
	  distance:number;
	  start:number;
	  limit:number;
	  sortBy:number; // sell price-1, rent price-2, date-3, distance-4
	  sortOrder:number;
}