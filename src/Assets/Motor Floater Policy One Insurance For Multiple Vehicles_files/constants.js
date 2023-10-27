var TokenIdentifier;
(function (TokenIdentifier) {
    TokenIdentifier[TokenIdentifier["RefreshToken"] = 1] = "RefreshToken";
    TokenIdentifier[TokenIdentifier["AuthToken"] = 2] = "AuthToken";
    TokenIdentifier[TokenIdentifier["JWTToken"] = 3] = "JWTToken";
    TokenIdentifier[TokenIdentifier["ValidToken"] = 4] = "ValidToken";
})(TokenIdentifier || (TokenIdentifier = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Third"] = "Third";
})(Gender || (Gender = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType[PolicyType["Motor"] = 1] = "Motor";
    PolicyType[PolicyType["Health"] = 2] = "Health";
    PolicyType[PolicyType["Travel"] = 3] = "Travel";
    PolicyType[PolicyType["Home"] = 4] = "Home";
    PolicyType[PolicyType["Marine"] = 5] = "Marine";
    PolicyType[PolicyType["Merchant"] = 6] = "Merchant";
    PolicyType[PolicyType["Cyber"] = 8] = "Cyber";
})(PolicyType || (PolicyType = {}));
var MotorTransactionType;
(function (MotorTransactionType) {
    MotorTransactionType[MotorTransactionType["BuyNew"] = 1] = "BuyNew";
    MotorTransactionType[MotorTransactionType["Rollover"] = 2] = "Rollover";
    MotorTransactionType[MotorTransactionType["Renew"] = 4] = "Renew";
    MotorTransactionType[MotorTransactionType["OwnDamage"] = 5] = "OwnDamage";
})(MotorTransactionType || (MotorTransactionType = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Motor"] = 1] = "Motor";
    VehicleType[VehicleType["PrivateCar"] = 2] = "PrivateCar";
})(VehicleType || (VehicleType = {}));
var HttpVerb;
(function (HttpVerb) {
    HttpVerb["POST"] = "POST";
    HttpVerb["GET"] = "GET";
})(HttpVerb || (HttpVerb = {}));
var GasKitType;
(function (GasKitType) {
    GasKitType[GasKitType["NA"] = 0] = "NA";
    GasKitType[GasKitType["CNG"] = 1] = "CNG";
    GasKitType[GasKitType["LPG"] = 2] = "LPG";
    GasKitType[GasKitType["FactoryFittedCNG"] = 3] = "FactoryFittedCNG";
    GasKitType[GasKitType["FactoryFittedLPG"] = 4] = "FactoryFittedLPG";
})(GasKitType || (GasKitType = {}));
var OwnerType;
(function (OwnerType) {
    OwnerType[OwnerType["Individual"] = 1] = "Individual";
    OwnerType[OwnerType["Company"] = 2] = "Company";
})(OwnerType || (OwnerType = {}));
var PreviousPolicyType;
(function (PreviousPolicyType) {
    PreviousPolicyType["ThirdParty"] = "TP";
    PreviousPolicyType["Comprehensive"] = "Comprehensive Package";
})(PreviousPolicyType || (PreviousPolicyType = {}));
var PageIdentifier;
(function (PageIdentifier) {
    PageIdentifier[PageIdentifier["LandingPage"] = 1] = "LandingPage";
    PageIdentifier[PageIdentifier["PlanPage"] = 2] = "PlanPage";
    PageIdentifier[PageIdentifier["CustomizePage"] = 3] = "CustomizePage";
    PageIdentifier[PageIdentifier["InsuredPage"] = 4] = "InsuredPage";
    PageIdentifier[PageIdentifier["DashboardPage"] = 5] = "DashboardPage";
})(PageIdentifier || (PageIdentifier = {}));
var MotorCovers;
(function (MotorCovers) {
    MotorCovers["RSA"] = "RSA";
    MotorCovers["ZD"] = "ZD";
    MotorCovers["CON"] = "CON";
    MotorCovers["GCASH"] = "GCASH";
    MotorCovers["LOPB"] = "LOPB";
    MotorCovers["KP"] = "KP";
    MotorCovers["EP"] = "EP";
    MotorCovers["PREVZD"] = "PREVZD";
})(MotorCovers || (MotorCovers = {}));
var HealthMemberType;
(function (HealthMemberType) {
    HealthMemberType[HealthMemberType["Kid"] = 1] = "Kid";
    HealthMemberType[HealthMemberType["Adult"] = 2] = "Adult";
})(HealthMemberType || (HealthMemberType = {}));
var HealthPlanType;
(function (HealthPlanType) {
    HealthPlanType[HealthPlanType["T1"] = 1] = "T1";
    HealthPlanType[HealthPlanType["T2"] = 2] = "T2";
    HealthPlanType[HealthPlanType["T3"] = 3] = "T3";
})(HealthPlanType || (HealthPlanType = {}));
var ITGeoScope;
(function (ITGeoScope) {
    ITGeoScope[ITGeoScope["WORLDWIDE"] = 0] = "WORLDWIDE";
    ITGeoScope[ITGeoScope["EXCLUSCANADA"] = 1] = "EXCLUSCANADA";
    ITGeoScope[ITGeoScope["SCHENGEN"] = 2] = "SCHENGEN";
    ITGeoScope[ITGeoScope["ASIA"] = 3] = "ASIA";
})(ITGeoScope || (ITGeoScope = {}));
var TravellerType;
(function (TravellerType) {
    TravellerType["ADULT"] = "Adult";
    TravellerType["SENIOR"] = "Senior";
})(TravellerType || (TravellerType = {}));
var TravellType;
(function (TravellType) {
    TravellType[TravellType["SINGLETRIP"] = 0] = "SINGLETRIP";
    TravellType[TravellType["MULTITRIP"] = 1] = "MULTITRIP";
})(TravellType || (TravellType = {}));
var HealthTranscationType;
(function (HealthTranscationType) {
    HealthTranscationType[HealthTranscationType["BuyNew"] = 1] = "BuyNew";
    HealthTranscationType[HealthTranscationType["Rollover"] = 2] = "Rollover";
    HealthTranscationType[HealthTranscationType["Renew"] = 3] = "Renew";
})(HealthTranscationType || (HealthTranscationType = {}));
var PaymentOption;
(function (PaymentOption) {
    PaymentOption[PaymentOption["NA"] = 0] = "NA";
    PaymentOption[PaymentOption["EMI"] = 1] = "EMI";
    PaymentOption[PaymentOption["CreditCard"] = 2] = "CreditCard";
    PaymentOption[PaymentOption["NetBanking"] = 3] = "NetBanking";
    PaymentOption[PaymentOption["ChequeDemandDraft"] = 4] = "ChequeDemandDraft";
    PaymentOption[PaymentOption["RemitToIndia"] = 5] = "RemitToIndia";
    PaymentOption[PaymentOption["CashCard"] = 6] = "CashCard";
    PaymentOption[PaymentOption["DebitCard"] = 7] = "DebitCard";
    PaymentOption[PaymentOption["FullCashPayment"] = 9] = "FullCashPayment";
    PaymentOption[PaymentOption["IVR"] = 10] = "IVR";
    PaymentOption[PaymentOption["None"] = 11] = "None";
    PaymentOption[PaymentOption["DirectPaymentByCustomer"] = 12] = "DirectPaymentByCustomer";
    PaymentOption[PaymentOption["Cash"] = 13] = "Cash";
    PaymentOption[PaymentOption["ChargeableEMI"] = 14] = "ChargeableEMI";
    PaymentOption[PaymentOption["DirectPaymentByCustomerEmailLink"] = 16] = "DirectPaymentByCustomerEmailLink";
    PaymentOption[PaymentOption["DebitCardWithATMPin"] = 17] = "DebitCardWithATMPin";
    PaymentOption[PaymentOption["MATCR"] = 18] = "MATCR";
    PaymentOption[PaymentOption["CMS"] = 19] = "CMS";
    PaymentOption[PaymentOption["AccountToAccount"] = 20] = "AccountToAccount";
    PaymentOption[PaymentOption["Amex"] = 22] = "Amex";
    PaymentOption[PaymentOption["Wallet"] = 26] = "Wallet";
    PaymentOption[PaymentOption["IBankOTP"] = 31] = "IBankOTP";
    PaymentOption[PaymentOption["UPI"] = 32] = "UPI";
    PaymentOption[PaymentOption["Razorpay"] = 33] = "Razorpay";
})(PaymentOption || (PaymentOption = {}));
;
var ProductType;
(function (ProductType) {
    ProductType[ProductType["Motor"] = 2312] = "Motor";
    ProductType[ProductType["PrivateCar"] = 2311] = "PrivateCar";
    ProductType[ProductType["Health"] = 3816] = "Health";
    ProductType[ProductType["Booster"] = 3817] = "Booster";
    ProductType[ProductType["Travel"] = 3717] = "Travel";
    ProductType[ProductType["Home"] = 50] = "Home";
    ProductType[ProductType["PersonalProtect"] = 3315] = "PersonalProtect";
    ProductType[ProductType["Arogya"] = 3822] = "Arogya";
    ProductType[ProductType["Cyber"] = 4165] = "Cyber";
})(ProductType || (ProductType = {}));
;
var QuerySRC;
(function (QuerySRC) {
    QuerySRC["QUERY_SRC"] = "querySrc";
    QuerySRC["QUERY_SRC_WEBSITE"] = "websiteHome";
    QuerySRC["QUERY_SRC_MotorCategory"] = "MotorCategory";
})(QuerySRC || (QuerySRC = {}));
//# sourceMappingURL=constants.js.map