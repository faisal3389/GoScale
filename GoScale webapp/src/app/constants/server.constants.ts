export class ServerConstants {
    public static DOMAIN = "http://ec2-35-154-15-217.ap-south-1.compute.amazonaws.com:8080/";
    public static APP_NAME = "campushaatAPI/";
    // public static PORT = "80/";
    public static APP_URL = ServerConstants.DOMAIN + ServerConstants.APP_NAME;
    public static APP_APIS = ServerConstants.APP_URL + "webapi/";


    public static CREATE_AD = ServerConstants.APP_APIS + "ads";
    public static UPDATE_AD = ServerConstants.APP_APIS + "ads/updateAd";
    public static DELETE_AD = ServerConstants.APP_APIS + "ads/deleteAd?adId=12";
    public static RETRIEVE_AD = ServerConstants.APP_APIS  + "ads/194/";
    public static HOME_ADS = ServerConstants.APP_APIS  + "ads/homeAds?";
    public static NEW_HOME_ADS = ServerConstants.APP_APIS  + "ads/homeAdsNew?";

    public static USER_FAVOURITE_ADS = ServerConstants.APP_APIS + "ads/userFavs?"

    public static CATEGORY_ADS = ServerConstants.APP_APIS + "ServerConstantsads/category?categoryId=1&campusId=1&start=0&limit=10";
    public static SELL_BY_CHADS = ServerConstants.APP_APIS  + "ads/sellByCH?adStatus=3&campusId=1&start=0&limit=10 /";
    public static USER_AD = ServerConstants.APP_APIS + "ads/user?"
    public static USER_FAVAD = ServerConstants.APP_APIS + "ads/userFavs?userId=29&favAds=301;302&start=0&limit=10/";
    public static MAKE_AD_FAVORITE = ServerConstants.APP_APIS + "registration-requests/";
    public static SEARCH_ADS = ServerConstants.APP_APIS + "ads/searchAds?";
    public static ADVANCED_SEARCH_ADS = ServerConstants.APP_APIS + "ads/searchAdvancedAds";
    public static SEARCH_CAT_ADS = ServerConstants.APP_APIS + "ads/searchAds?searchKey=test&campusId=1&categoryId=1&start=0&limit=10";
    public static INCREASE_VIEW_COUNT = ServerConstants.APP_APIS + "ads/viewAds?adId=1";
    public static DELETE_FAVORITE_ADS = ServerConstants.APP_APIS + "users/deleteFavourite?userId=67&adId=10";
    
    public static LOGIN = ServerConstants.APP_APIS + "users?";
    public static SOCIAL_LOGIN = ServerConstants.APP_APIS + "users/socialLogin/";
    public static REGISTER = ServerConstants.APP_APIS + "users";
    public static USER_PROFILE = ServerConstants.APP_APIS + "users/userProfile?userId=";
    public static TEAM_PROFILE = ServerConstants.APP_APIS + "users/teamProfile/";
//{clientId}/onboarding/status/
    public static REQUEST_OTP_EMAIL = ServerConstants.APP_APIS + "users/sendOTPonMail?email=revantprakash@gmail.com/";
    public static VERIFY_OTP_ON_MAIL = ServerConstants.APP_APIS + "users/verifyOTPonMail?email=revantprakash@gmail.com&otp=1234";
    public static UPDATE_PROFILE = ServerConstants.APP_APIS + "users/updateUser";

    public static UPDATE_USER_MOBILE = ServerConstants.APP_APIS + "users/updateUserMobile";
    public static UPDATE_USER_ADDRESS = ServerConstants.APP_APIS + "users/updateUserAddress";
    public static UPDATE_USER_PASSWORD = ServerConstants.APP_APIS + "users/updateUserPassword";
    public static UPDATE_USER_NAME = ServerConstants.APP_APIS + "users/updateUserName";
    public static UPDATE_USER_SEX = ServerConstants.APP_APIS + "users/updateUserSex";

    public static MAKE_AMBASSADOR = ServerConstants.APP_APIS + "users/makeAmbassador?userId=176&campusId=1";
    public static INSERT_PUSH_TOKEN = ServerConstants.APP_APIS + "users/pushToken?userId=29&token=test_token";
    public static CREATE_ALERT = ServerConstants.APP_APIS + "users/alerts?userId=29&alerts=;1;2;";

    public static CREATE_CAMPUS = ServerConstants.APP_APIS + "campus/create/";
    public static UPDATE_CAMPUS = ServerConstants.APP_APIS + "campus/updateCampus?userId=29/";
    public static SEARCH_CAMPUS = ServerConstants.APP_APIS + "campus?searchKey=iit&start=0&limit=10/";
    public static RETRIEVE_CAMPUS = ServerConstants.APP_APIS + "campus/1/";
    public static ADS_DETAILS = ServerConstants.APP_APIS + "ads/";
}
