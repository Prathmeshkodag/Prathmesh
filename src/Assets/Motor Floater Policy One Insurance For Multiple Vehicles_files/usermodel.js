var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoginUIRequestModel = /** @class */ (function () {
    function LoginUIRequestModel() {
        this.Login = Pd;
        this.Password = Pd;
        this.LoginType = "App";
        this.IPartnerUserId = "";
        this.FirebaseCloudMessagingInfo = "";
    }
    return LoginUIRequestModel;
}());
var AuthTokenModel = /** @class */ (function () {
    function AuthTokenModel() {
        this.Client = "website";
        this.Scope = "website";
    }
    return AuthTokenModel;
}());
var CCLoginUIRequestModel = /** @class */ (function () {
    function CCLoginUIRequestModel() {
        this.CallCenterUserId = "fDTSg2Art8NOHAblLu169w==";
        this.IPartnerUserId = "fDTSg2Art8NOHAblLu169w==";
        this.ClientId = 1;
        this.LoginType = "User";
    }
    return CCLoginUIRequestModel;
}());
var LoginNewOtpRequestUIModel = /** @class */ (function () {
    function LoginNewOtpRequestUIModel() {
    }
    return LoginNewOtpRequestUIModel;
}());
var LoginUIResponseModel = /** @class */ (function (_super) {
    __extends(LoginUIResponseModel, _super);
    function LoginUIResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoginUIResponseModel;
}(BaseUIResponseModel));
var ThirdPartyDealDetail = /** @class */ (function () {
    function ThirdPartyDealDetail() {
    }
    return ThirdPartyDealDetail;
}());
var DisableDatepickerDates = /** @class */ (function () {
    function DisableDatepickerDates() {
    }
    return DisableDatepickerDates;
}());
var CustomerModel = /** @class */ (function (_super) {
    __extends(CustomerModel, _super);
    function CustomerModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.financierName = "";
        _this.financierBranch = "";
        _this.RequestId = "";
        _this.CustomerID = "";
        _this.KycId = "";
        _this.PfCustomerId = "";
        _this.pfCustomerId = "";
        _this.IsPEP = false;
        _this.PEPType = "";
        return _this;
    }
    return CustomerModel;
}(BaseUIResponseModel));
var AddressModel = /** @class */ (function () {
    function AddressModel() {
    }
    return AddressModel;
}());
var ChangePasswordUIRequestModel = /** @class */ (function () {
    function ChangePasswordUIRequestModel() {
    }
    return ChangePasswordUIRequestModel;
}());
var NomineeUIModel = /** @class */ (function (_super) {
    __extends(NomineeUIModel, _super);
    function NomineeUIModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NomineeUIModel;
}(BaseUIResponseModel));
var ErrorCustomerUIModel = /** @class */ (function () {
    function ErrorCustomerUIModel() {
        this.constitutionOfBusinessText = false;
        this.customerTypeText = false;
        this.gstRegistrationStatusText = false;
    }
    return ErrorCustomerUIModel;
}());
var CustomerGSTInTaxDetail = /** @class */ (function () {
    function CustomerGSTInTaxDetail() {
        this.gstiN_UINNo = "";
        this.panNo = "";
        this.constitutionOfBusinessText = "";
        this.customerTypeText = "";
        this.gstRegistrationStatusText = "";
    }
    return CustomerGSTInTaxDetail;
}());
var Occupation = /** @class */ (function () {
    function Occupation() {
    }
    return Occupation;
}());
var CityDistrictResponseUIModel = /** @class */ (function (_super) {
    __extends(CityDistrictResponseUIModel, _super);
    function CityDistrictResponseUIModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CityDistrictResponseUIModel;
}(BaseUIResponseModel));
var RelationshipResponseModel = /** @class */ (function (_super) {
    __extends(RelationshipResponseModel, _super);
    function RelationshipResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RelationshipResponseModel;
}(BaseUIResponseModel));
var whatsappRequest = /** @class */ (function () {
    function whatsappRequest() {
    }
    return whatsappRequest;
}());
var ApplicantModel = /** @class */ (function () {
    function ApplicantModel() {
    }
    return ApplicantModel;
}());
var PolicyPremiumResponseModel = /** @class */ (function () {
    function PolicyPremiumResponseModel() {
    }
    return PolicyPremiumResponseModel;
}());
var GenderwiseRealtion = /** @class */ (function () {
    function GenderwiseRealtion() {
    }
    return GenderwiseRealtion;
}());
var UserFamilyModel = /** @class */ (function (_super) {
    __extends(UserFamilyModel, _super);
    function UserFamilyModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserFamilyModel;
}(BaseUIResponseModel));
var userFamilies = /** @class */ (function () {
    function userFamilies() {
    }
    return userFamilies;
}());
var EmailPolicyModel = /** @class */ (function () {
    function EmailPolicyModel() {
    }
    return EmailPolicyModel;
}());
var ErrorCustomerGSTInTaxDetail = /** @class */ (function () {
    function ErrorCustomerGSTInTaxDetail() {
        this.errorgstiN_UINNo = false;
        this.errorpanNo = false;
        this.errorInvalidPanNo = false;
        this.errorconstitutionOfBusinessText = false;
        this.errorcustomerTypeText = false;
        this.errorgstRegistrationStatusText = false;
        this.erroraadharNo = false;
    }
    return ErrorCustomerGSTInTaxDetail;
}());
var PEDListModel = /** @class */ (function () {
    function PEDListModel() {
    }
    return PEDListModel;
}());
var Pd = "website";
//# sourceMappingURL=UserModel.js.map