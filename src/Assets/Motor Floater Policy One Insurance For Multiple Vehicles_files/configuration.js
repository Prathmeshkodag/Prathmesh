var eChannelConfig = /** @class */ (function () {
    function eChannelConfig() {
    }
    eChannelConfig.BaseUrl = "/eChannelServices/api/"; //Base Url for api call
    //public static BaseUrl: string = "https://localhost:5015/api/"; //Base Url for api call
    eChannelConfig.BaseUrlforOldUI = "/IpartnerService/core/api/"; //Base Url for api call
    eChannelConfig.BaseUrlforUIUX = "/ipartner_web/api/"; //Base Url for api call
    eChannelConfig.baseurlformicro = "/digital/v2.0/";
    ////////////////////////////////////////////Product RedirectionURL///////////////////////////////////////////////////////
    eChannelConfig.ViewWellnessUrl = "https://ipartner.icicilombard.com/WebPages/Customers/NWCHISingleSignOn.aspx?PolicyNo=";
    //Motor
    eChannelConfig.PrivateCarPlanPageUrl = "/motor-insurance/car-insurance/get-quote/select-plans";
    eChannelConfig.PrivateCarInsuredPageUrl = "/motor-insurance/car-insurance/get-quote/insured-details";
    eChannelConfig.TwoWheelerPlanPageUrl = "/motor-insurance/two-wheeler-insurance/get-quote/get-select-plans";
    eChannelConfig.TwoWheelerPlanPageUrlNRT = "/motor-insurance/two-wheeler-insurance/get-quote/select-plans";
    eChannelConfig.TwoWheelerInsuredPageUrl = "/motor-insurance/two-wheeler-insurance/get-quote/get-insured-details";
    eChannelConfig.TwoWheelerInsuredPageUrlNRT = "/motor-insurance/two-wheeler-insurance/get-quote/insured-details";
    eChannelConfig.PrivateCarCustomizePageUrl = "/motor-insurance/car-insurance/get-quote/customize-your-plan";
    eChannelConfig.TwoWheelerCustomizePageUrl = "/motor-insurance/two-wheeler-insurance/get-quote/customize-your-plan";
    eChannelConfig.FWFreshPlanPageUrl = "/motor-insurance/car-insurance/get-quote/select-plans";
    eChannelConfig.FWFreshInsuredPageUrl = "/motor-insurance/car-insurance/get-quote/insured-details";
    eChannelConfig.FWFreshPaymentPageUrl = "/payment-fresh?returl=motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details/";
    eChannelConfig.JsErrorLogURL = "auth/JS_Loging/";
    //Renewal Page Url
    eChannelConfig.PrivateCarRNPageUrl = "/renew-policy/motor/car-renewal";
    eChannelConfig.MotorRNPageUrl = "/renew-policy/motor/two-wheeler-renewal";
    eChannelConfig.CHIRNPageUrl = "/renew-policy/health/chi-renewal";
    eChannelConfig.ArogyaRNPageUrl = "/health-insurance/arogya-sanjeevani-policy/arogya-renewal/get-quote/arogya-renewal-plan";
    eChannelConfig.BoosterRNPageUrl = "/renew-policy/health/hb-renewal";
    eChannelConfig.PPRNPageUrl = "/renew-policy/health/pp-renewal-core?Dashboard=true";
    eChannelConfig.XOLRNPageUrl = "/renew-policy/health/xol-renewal";
    eChannelConfig.OtherProductPageUrl = "/renew-policy/renew-other-product-policy";
    //Home
    eChannelConfig.HomePlanPageUrl = "/home-insurance/get-quote/select-plans";
    eChannelConfig.HomeInsuredPageUrl = "/home-insurance/get-quote/insured-details";
    //Travel
    eChannelConfig.TravelPlanPageUrl = "/travel-insurance/get-quote/select-plans";
    eChannelConfig.TravelInsuredPageUrl = "/travel-insurance/get-quote/insured-details";
    //Health
    eChannelConfig.OldCHIPlanPageUrl = "/health-insurance/get-quote/select-chi-plans";
    eChannelConfig.CHIPlanPageUrl = "/CHI-health-app/plan-page";
    eChannelConfig.PPPlanPageUrl = "/health-insurance/get-quote/select-personal-protect-plans";
    eChannelConfig.BoosterPlanPageUrl = "/health-insurance/get-quote/select-hb-plans";
    eChannelConfig.OldCHIInsuredPageUrl = "/health-insurance/get-quote/insured-details";
    eChannelConfig.CHIInsuredPageUrl = "/CHI-health-app/insured-detail";
    eChannelConfig.PPInsuredPageUrl = "/health-insurance/get-quote/pp-insured-details";
    eChannelConfig.BoosterInsuredPageUrl = "/health-insurance/health-booster/get-quote/hb-insured-details";
    eChannelConfig.ArogyaPlanPageUrl = "/health-insurance/arogya-sanjeevani-policy/get-quote/select-ags-plans";
    eChannelConfig.ArogyaInsuredPageUrl = "/health-insurance/arogya-sanjeevani-policy/get-quote/insured-details-ags";
    //Marine
    eChannelConfig.MarinePlanPageUrl = "/marine-insurance/marine-select-plan";
    eChannelConfig.MarineInsuredPageUrl = "/marine-insurance/marine-insured-details";
    //Marine
    eChannelConfig.MerchantPlanPageUrl = "/merchant-insurance/merchant-select-plan";
    eChannelConfig.MerchantInsuredPageUrl = "/merchant-insurance/merchant-insured-details";
    //Cyber
    eChannelConfig.CyberPlanPageUrl = "/cyber-insurance/select-plan";
    eChannelConfig.CyberInsuredPageUrl = "/cyber-insurance/insured-details";
    eChannelConfig.CyberFreshPaymentPageUrl = "/payment-fresh?returl=cyber-insurance/insured-details";
    //Payment
    eChannelConfig.PaymentPageUrl = "/payment-new";
    eChannelConfig.ProcessRazorpayPaymentResponseURL = eChannelConfig.BaseUrl + "Payment/Razorpay";
    eChannelConfig.WalletPayment = eChannelConfig.BaseUrl + "Payment/Wallet";
    eChannelConfig.GetPaymentOptions = eChannelConfig.BaseUrl + "Payment/Transaction";
    eChannelConfig.CheckPaymentEntryTaggingURL = eChannelConfig.BaseUrl + "Payment/Policy?transId=";
    eChannelConfig.CreditCardPayment = eChannelConfig.BaseUrl + "Payment/CreditCard";
    eChannelConfig.IVRCreditCardPayment = eChannelConfig.BaseUrl + "Payment/IVRInternalPayment";
    eChannelConfig.GetIVRDetails = eChannelConfig.BaseUrl + "Payment/GetIVRDetails";
    eChannelConfig.CreditCardEMIPayment = eChannelConfig.BaseUrl + "Payment/CreditCardEMI";
    eChannelConfig.NetBankingPayment = eChannelConfig.BaseUrl + "Payment/NetBanking";
    eChannelConfig.DebitCardPayment = eChannelConfig.BaseUrl + "Payment/DebitCard";
    eChannelConfig.GetPaymentDetail = eChannelConfig.BaseUrl + "Payment/Proposal?transId=";
    eChannelConfig.SendEmailPaymentLink = eChannelConfig.BaseUrl + "Payment/PaymentLink";
    //send email payment link - Ipartner Nikhil
    eChannelConfig.IpSendEmailPaymentLink = eChannelConfig.BaseUrlforOldUI + "Payment/SendEmailPaymentLink";
    eChannelConfig.GetEMIDetail = eChannelConfig.BaseUrl + "Payment/Bank-EMIs";
    eChannelConfig.SyncPolicy = eChannelConfig.BaseUrl + "Payment/Policy?transId=";
    eChannelConfig.GetIVRDetailsCC = "http://localhost:1234/GetCCData/telesales/";
    ///////////////////////////////////////////Product RedirectionURL////////////////////////////////////////////////////////
    ///////////////////////////////////////////Product RedirectionURL////////////////////////////////////////////////////////
    //////////////////////////////////////////////IPartner.Headers///////////////////////////////////////////////////////////
    eChannelConfig.ClientIpAddressUrl = "https://jsonip.com";
    eChannelConfig.CryptoKey = "7080808080808083";
    eChannelConfig.CryptoIv = "9080808080808083";
    eChannelConfig.ClientIPAddress = window.sessionStorage.getItem("clientIpAddress") == (null || undefined) ? "" : window.sessionStorage.getItem("clientIpAddress");
    eChannelConfig.apiversion = window.sessionStorage.getItem("apiversion") == (null || undefined) ? "" : window.sessionStorage.getItem("apiversion");
    eChannelConfig.ClientId = window.sessionStorage.getItem("clientId") == (null || undefined) ? 1 : window.sessionStorage.getItem("clientId");
    eChannelConfig.ClientDeviceId = window.sessionStorage.getItem("CID") == (null || undefined) ? "" : window.sessionStorage.getItem("CID");
    eChannelConfig.AuthToken = window.sessionStorage.getItem("AuthorizationToken") == (null || undefined) ? "" : window.sessionStorage.getItem("AuthorizationToken");
    eChannelConfig.TokenExpiry = window.sessionStorage.getItem("TokenExpiry");
    eChannelConfig.IsGuestUser = window.sessionStorage.getItem("IsGuestUser") == (null || undefined) ? true : JSON.parse(window.sessionStorage.getItem("IsGuestUser"));
    eChannelConfig.utmSource = window.sessionStorage.getItem("utm_source") == (null || undefined) ? "" : window.sessionStorage.getItem("utm_source");
    eChannelConfig.utmMedium = window.sessionStorage.getItem("utm_medium") == (null || undefined) ? "" : window.sessionStorage.getItem("utm_medium");
    eChannelConfig.utmCampaign = window.sessionStorage.getItem("utm_campaign") == (null || undefined) ? "" : window.sessionStorage.getItem("utm_campaign");
    eChannelConfig.utmKeyword = window.sessionStorage.getItem("utm_keyword") == (null || undefined) ? "" : window.sessionStorage.getItem("utm_keyword");
    eChannelConfig.gclId = window.sessionStorage.getItem("gclid") == (null || undefined) ? "" : window.sessionStorage.getItem("gclid");
    eChannelConfig.efId = window.sessionStorage.getItem("ef_id") == (null || undefined) ? "" : window.sessionStorage.getItem("ef_id");
    //////////////////////////////////////////////IPartner.Headers//////////////////////////////////////////////////////////
    /////////////////////////////////////////TokenCreation.services URL/////////////////////////////////////////////////////
    eChannelConfig.AuthTokenUrl = eChannelConfig.BaseUrl + "Auth/token";
    eChannelConfig.AuthCCTokenUrl = eChannelConfig.BaseUrl + "Auth/getCCUser";
    eChannelConfig.RefreshTokenUrl = eChannelConfig.BaseUrl + "Auth/token/refresh";
    eChannelConfig.JWTTokenUrl = eChannelConfig.BaseUrl + "web-link/";
    eChannelConfig.ICICIDirectUrl = eChannelConfig.BaseUrl + "Auth/anonymous";
    eChannelConfig.AuthTokenUrlNew = eChannelConfig.baseurlformicro + "auth-api/client/token";
    eChannelConfig.AuthTokenUrlNew2 = eChannelConfig.baseurlformicro + "auth-api/client/initialize";
    eChannelConfig.RefreshTokenUrlNew = eChannelConfig.baseurlformicro + "auth-api/user/token/refresh";
    /////////////////////////////////////////TokenCreation.services URL/////////////////////////////////////////////////////
    //////////////////////////////////////////////Master.services URL///////////////////////////////////////////////////////
    eChannelConfig.Get4WRtoUrl = eChannelConfig.BaseUrl + "PrivateCar/RTO";
    eChannelConfig.Get4WMakeModelUrl = eChannelConfig.BaseUrl + "PrivateCar/MakeModel";
    eChannelConfig.Get4WMakeModelV1Url = eChannelConfig.BaseUrl + "PrivateCar/MakeModelv1";
    eChannelConfig.Get2WRtoUrl = eChannelConfig.BaseUrl + "Motor/RTO";
    eChannelConfig.Get2WMakeModelUrl = eChannelConfig.BaseUrl + "Motor/MakeModel";
    eChannelConfig.GetCityDistrictUrl = eChannelConfig.BaseUrl + "Master/CityDistricts";
    eChannelConfig.GetPincodeCityDistrictUrl = eChannelConfig.BaseUrl + "Cyber/CityDistricts";
    eChannelConfig.GetCityDistrictByPinCodeUrl = eChannelConfig.BaseUrl + "Master/CityDistrict/PinCode";
    eChannelConfig.GetRelationshipUrl = eChannelConfig.BaseUrl + "Master/relationship";
    eChannelConfig.GetNomineeRelationshipUrl = eChannelConfig.BaseUrl + "Master/GetNomineeRelations/";
    eChannelConfig.GetOccupationUrl = eChannelConfig.BaseUrl + "Master/occupation";
    eChannelConfig.GetPreviousInsurerUrl = eChannelConfig.BaseUrl + "Master/insurer";
    eChannelConfig.GetCommonPEDUrl = eChannelConfig.BaseUrl + "Mobile/PED/" + ProductType.Booster.toString();
    eChannelConfig.GetArogyaPEDUrl = eChannelConfig.BaseUrl + "Mobile/PED/" + ProductType.Arogya.toString();
    eChannelConfig.GetSessionVersion = eChannelConfig.BaseUrl + "Master/GetSessionVersion";
    //////////////////////////////////////////////Master.services URL///////////////////////////////////////////////////////
    //////////////////////////////////////////Customer.services URL/////////////////////////////////////////////////////////
    eChannelConfig.UserProfileUrl = eChannelConfig.BaseUrl + "Customer/Profile";
    eChannelConfig.DashboardUserProfileUrl = eChannelConfig.BaseUrl + "Customer/DashboardProfile";
    eChannelConfig.UpdateUserProfileUrl = eChannelConfig.BaseUrl + "Customer/Profile";
    eChannelConfig.GetUserPolicyUrl = eChannelConfig.BaseUrl + "Customer/Policy";
    eChannelConfig.GetUserPendingPaymentUrl = eChannelConfig.BaseUrl + "Customer/Payment";
    eChannelConfig.GetUserQuoteUrl = eChannelConfig.BaseUrl + "Customer/Quote";
    eChannelConfig.ViewPDFUrl = eChannelConfig.BaseUrl + "Customer/Certificate";
    eChannelConfig.ChangeUserPasswordUrl = eChannelConfig.BaseUrl + "User/ChangePassword";
    eChannelConfig.UserFamilyUrl = eChannelConfig.BaseUrl + "Customer/Family";
    eChannelConfig.IsWhatsappCommunicationUrl = eChannelConfig.BaseUrl + "Customer/IsWhatsappCommunicationOptIn";
    eChannelConfig.WhatsappContactDetailsUrl = eChannelConfig.BaseUrl + "Customer/WhatsappContactDetails";
    eChannelConfig.WhatsappOptInContactDetailsUrl = eChannelConfig.BaseUrl + "Customer/WhatsappOptInContactDetails";
    eChannelConfig.SendPolicyOnWhatsappUrl = eChannelConfig.BaseUrl + "Customer/CustomerWhatsappConsentOptIn";
    eChannelConfig.GuestUserTokenUrl = eChannelConfig.BaseUrl + "Auth/guest";
    eChannelConfig.UserProfileImagePath = "";
    eChannelConfig.GenerateOTPUrl = eChannelConfig.BaseUrl + "Customer/otp";
    eChannelConfig.VerifyOTPUrl = eChannelConfig.BaseUrl + "Customer/otp/verify";
    eChannelConfig.ProfileImageUrl = "/images/default-source/phoenix/userimage/";
    eChannelConfig.EmailPolicyUrl = eChannelConfig.BaseUrl + "Customer/EmailPolicy";
    eChannelConfig.EmailPolicyUrlforOldUI = eChannelConfig.BaseUrlforOldUI + "Customer/EmailPolicy";
    eChannelConfig.EcommerceDataUrl = eChannelConfig.BaseUrl + "Customer/GetEcommerceData?PolicyId=";
    eChannelConfig.BlockerCheckUrl = eChannelConfig.BaseUrl + "Customer/IsBlockedPolicy?policyNo=";
    //////////////////////////////////////////Customer.services URL/////////////////////////////////////////////////////////
    //////////////////////////////////////////////Motor.services URL///////////////////////////////////////////////////////
    eChannelConfig.MotorExShowroomUrl = eChannelConfig.BaseUrl + "Motor/ExShowroomPrice";
    eChannelConfig.MotorConfiguredPlanUrl = eChannelConfig.BaseUrl + "Motor/Plans";
    eChannelConfig.MotorEligibleCoverUrl = eChannelConfig.BaseUrl + "Motor/EligibleCover";
    eChannelConfig.MotorFlaUrl = eChannelConfig.BaseUrl + "Motor/Fla";
    //public static MotorQuoteUrl = eChannelConfig.BaseUrl + "Motor/Quote";
    eChannelConfig.MotorQuoteUrl = eChannelConfig.BaseUrl + "TW/premium";
    eChannelConfig.MotorTPQuoteUrl = eChannelConfig.BaseUrl + "TWLTTP/quote";
    //public static MotorFetchProposalUrl = eChannelConfig.BaseUrl + "Motor/Proposal";
    eChannelConfig.MotorFetchProposalUrl = eChannelConfig.BaseUrl + "TW/Proposal";
    eChannelConfig.MotorFetchTPProposalUrl = eChannelConfig.BaseUrl + "TWLTTP/Proposal";
    //public static CalculatePremiumRateUrl = eChannelConfig.BaseUrl + "Motor/CalculatePremium";
    eChannelConfig.CalculatePremiumRateUrl = eChannelConfig.BaseUrl + "TW/cache/premium";
    eChannelConfig.MotorBreakInUrl = eChannelConfig.BaseUrl + "TW/SaveInspectionAddress";
    eChannelConfig.MotorRenewECN = eChannelConfig.BaseUrl + "PrivateCar/RenewalECN";
    eChannelConfig.MarkInvalidQuoteFWUrl = eChannelConfig.BaseUrl + "FW/MarkInvalidQuote";
    eChannelConfig.MarkInvalidQuoteTWUrl = eChannelConfig.BaseUrl + "TW/MarkInvalidQuote";
    eChannelConfig.ReverifyVahanServiceFWUrl = eChannelConfig.BaseUrl + "PrivateCar/Vahan";
    eChannelConfig.ReverifyVahanServiceTWUrl = eChannelConfig.BaseUrl + "Motor/Vahan";
    eChannelConfig.SandboxMotorLeadURL = eChannelConfig.BaseUrl + "PrivateCar/SandBoxMotorLead";
    //////////////////////////////////////////////Motor.Services URL///////////////////////////////////////////////////////
    /////////////////////////////////////////PrivateCar.services URL//////////////////////////////////////////////////////
    eChannelConfig.PrivateCarExShowroomUrl = eChannelConfig.BaseUrl + "PrivateCar/ExShowroomPrice";
    eChannelConfig.PrivateCarConfiguredPlanUrl = eChannelConfig.BaseUrl + "PrivateCar/Plans";
    eChannelConfig.PrivateCarEligibleCoverUrl = eChannelConfig.BaseUrl + "PrivateCar/EligibleCover";
    eChannelConfig.PrivateCarFlaUrl = eChannelConfig.BaseUrl + "PrivateCar/Fla";
    eChannelConfig.PrivateCarQuoteUrl = eChannelConfig.BaseUrl + "PrivateCar/Quote";
    eChannelConfig.PrivateCarFetchProposalUrl = eChannelConfig.BaseUrl + "PrivateCar/Proposal";
    eChannelConfig.PrivateCarSyncProposalUrl = eChannelConfig.BaseUrl + "PrivateCar/Proposal";
    eChannelConfig.PrivateCarBreakInUrl = eChannelConfig.BaseUrl + "PrivateCar/BreakIn";
    eChannelConfig.PrivateFetchEDWCustomerUrl = eChannelConfig.BaseUrl + "Customer/FetchEDWCustomerDetail";
    eChannelConfig.PrivateFetchEDWNomineeUrl = eChannelConfig.BaseUrl + "Customer/FetchEDWNominee";
    eChannelConfig.PrivateFetchSyncEDWCustomerUrl = eChannelConfig.BaseUrl + "Customer/SyncEDWCustomer";
    ////////////////////////////////////////////PrivateCar RENEWAL.services URL///////////////////////////////////////////////////
    /////////////////////////////////////////PrivateCar RENEWAL.services URL//////////////////////////////////////////////////////
    eChannelConfig.PrivateCarFetchRenew = eChannelConfig.BaseUrl + "PrivateCar/Renewal";
    eChannelConfig.PrivateCarCreateRenewal = eChannelConfig.BaseUrl + "PrivateCar/Renewal/Renew";
    eChannelConfig.PrivateCarRenewECN = eChannelConfig.BaseUrl + "PrivateCar/RenewalECN";
    ////////////////////////////////////////////PrivateCar RENEWAL.services URL///////////////////////////////////////////////////
    /////////////////////////////////////////PrivateCar RENEWAL.services URL//////////////////////////////////////////////////////
    //public static MotorFetchRenew = eChannelConfig.BaseUrl + "Motor/Renewal";
    //public static MotorCreateRenewal = eChannelConfig.BaseUrl + "Motor/Renewal/Renew";
    eChannelConfig.MotorFetchRenew = eChannelConfig.BaseUrl + "Motor/Renewal";
    ////////////////////////////////////////////PrivateCar RENEWAL.services URL///////////////////////////////////////////////////
    ////////////////////////////////////////////Payment.services URL//////////////////////////////////////////////////////
    eChannelConfig.CreatePaymentTransactionUrl = eChannelConfig.BaseUrl + "Payment/Transaction";
    //public static CheckoutPaymentTransactionUrl = eChannelConfig.BaseUrl + "Payment/checkout/Transaction";
    // add fetchpaymenttranscationurl
    eChannelConfig.GetEmailLinkRequest = eChannelConfig.BaseUrl + "Payment/GetEmailLinkRequest";
    ////////////////////////////////////////////Payment.services URL//////////////////////////////////////////////////////
    ////////////////////////////////////////////CHI.services URL//////////////////////////////////////////////////////////
    eChannelConfig.ChiCalculatePremiumUrl = eChannelConfig.BaseUrl + "Health/Premium";
    eChannelConfig.ChiSaveQuoteUrl = eChannelConfig.BaseUrl + "Health/Quote";
    eChannelConfig.ChiFetchProposalUrl = eChannelConfig.BaseUrl + "Health/Proposal";
    eChannelConfig.ChiFetchQuoteUrl = eChannelConfig.BaseUrl + "Health/Quote";
    eChannelConfig.ChiSaveProposalUrl = eChannelConfig.BaseUrl + "Health/Proposal";
    eChannelConfig.GetAllBankEMI = eChannelConfig.BaseUrl + "Health/GetAllBankEMI?Premium=";
    ////////////////////////////////////////////CHI.services URL//////////////////////////////////////////////////////////
    ////////////////////////////////////////////Travel.services URL//////////////////////////////////////////////////////////
    eChannelConfig.TravelSaveQuoteUrl = eChannelConfig.BaseUrl + "Travel/Quote";
    eChannelConfig.TravelUpdateQuoteUrl = eChannelConfig.BaseUrl + "Travel/UpdateQuote";
    eChannelConfig.TravelFetchQuoteUrl = eChannelConfig.BaseUrl + "Travel/Quote/QuoteDetails";
    eChannelConfig.TravelFetchProposalUrl = eChannelConfig.BaseUrl + "Travel/Proposal";
    eChannelConfig.TravelSyncProposalUrl = eChannelConfig.BaseUrl + "Travel/Proposal";
    ////////////////////////////////////////////CHI.services URL//////////////////////////////////////////////////////////
    ////////////////////////////////////////////Travel.services URL//////////////////////////////////////////////////////////
    eChannelConfig.TravelExtesnsionFetchRnUrl = eChannelConfig.BaseUrl + "Travel/Extension/Policy";
    eChannelConfig.TravelExtesnsionCalulatePremuimUrl = eChannelConfig.BaseUrl + "Travel/Extension/Premium";
    eChannelConfig.TravelExtesnsionProposalUrl = eChannelConfig.BaseUrl + "Travel/Extension/Proposal";
    eChannelConfig.TravelExtensionFetchProposalUrl = eChannelConfig.BaseUrl + "Travel/Extension/Proposal";
    ////////////////////////////////////////////Travel.services URL//////////////////////////////////////////////////////////
    //////////////////////////////////////////HB.service URl/////////////////////////////////////////////////////////////
    eChannelConfig.HBCalculatePremiumUrl = eChannelConfig.BaseUrl + "Booster/Premium";
    eChannelConfig.HBSaveQuoteUrl = eChannelConfig.BaseUrl + "Booster/Quote";
    eChannelConfig.HBFetchQuoteUrl = eChannelConfig.BaseUrl + "Booster/Quote";
    eChannelConfig.HBFetchProposalUrl = eChannelConfig.BaseUrl + "Booster/Proposal";
    eChannelConfig.HBSyncProposalUrl = eChannelConfig.BaseUrl + "Booster/Proposal";
    //////////////////////////////////////////HB.service URl/////////////////////////////////////////////////////////////
    //HB Renewal URL//
    eChannelConfig.HBFetchSplitMergeUrl = eChannelConfig.BaseUrl + "Booster/SplitMergeRenewal";
    eChannelConfig.CHIFetchSplitMergeUrl = eChannelConfig.BaseUrlforOldUI + "Health/FetchSplitMergeRNDetails";
    eChannelConfig.HBFetchRNPolicyUrl = eChannelConfig.BaseUrl + "Booster/Renewal";
    eChannelConfig.HBRNCalculatePremiumUrl = eChannelConfig.BaseUrl + "Booster/Renewal/Premium";
    eChannelConfig.HBRNCreateRenewalUrl = eChannelConfig.BaseUrl + "Booster/Renewal/Renew";
    eChannelConfig.HBGetDeductibleSIUrl = eChannelConfig.BaseUrl + "Booster/GetDeductibleSIForCustomer";
    eChannelConfig.XOLRNFetchUrl = eChannelConfig.BaseUrlforUIUX + "RenewalCommon/RenewLoadPage";
    //
    // Arogya REnewal URLs
    eChannelConfig.ArogyaFetchRNPolicyUrl = eChannelConfig.BaseUrl + "Arogya/Renewal";
    eChannelConfig.ArogyaRNCreateRenewalUrl = eChannelConfig.BaseUrl + "Arogya/Renewal/Renew";
    eChannelConfig.ArogyaRNCalculatePremiumUrl = eChannelConfig.BaseUrl + "Arogya/Renewal/Premium";
    eChannelConfig.GenerateLoginOTPArogyaRenewal = eChannelConfig.BaseUrl + "Auth/GenerateLoginOTPCHIRenewal";
    eChannelConfig.AuthenticateOTPWithEncryption = eChannelConfig.BaseUrl + "Auth/AuthenticateOTPWithEncryption";
    eChannelConfig.CustomerChangeConfirmation = eChannelConfig.BaseUrl + "Customer/ChangeConfirmation";
    //Befit URL
    eChannelConfig.CalculateBefitPremium = eChannelConfig.BaseUrl + "Health/GetBeFitPremium";
    eChannelConfig.JsErrorLoggingURL = eChannelConfig.BaseUrl + "Auth/JS_LogingV2";
    //Micro Service
    eChannelConfig.SyncCustomerMS_URL = eChannelConfig.baseurlformicro + "customer-api/customer/create";
    eChannelConfig.GetCustomerMS_URL = eChannelConfig.baseurlformicro + "customer-api/customer";
    eChannelConfig.GetCityDistrictByPinCodeMS_URL = eChannelConfig.baseurlformicro + "master-api/generic/pincode";
    return eChannelConfig;
}());
//# sourceMappingURL=configuration.js.map