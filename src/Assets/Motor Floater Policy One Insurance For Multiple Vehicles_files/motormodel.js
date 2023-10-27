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
////Binding will be done using this model
var MotorUIModel = /** @class */ (function () {
    function MotorUIModel() {
        this.proposalId = "";
        this.PPproposalId = "";
        this.tpProposalId = "";
        this.tpproposalId = "";
        this.SCPAproposalId = "";
        this.customerId = "";
        this.emailId = "";
        this.mobileNo = "";
        this.registrationNo = "";
        this.chassisNo = "";
        this.paCoverTenure = 0;
        this.purchaseYear = "";
        this.Tenure = 0;
        this.option = 0;
        this.makeModel = new MotorMakeModel();
        this.rTO = new MotorRTOLocation();
        this.sumInsured = 0;
        this.vehicleUnder = 0;
        this.exShowroom = new VehicleExShowroomPriceResponseModel();
        this.previousPolicy = new PreviousPolicyModel();
        this.PPSumInsured = 0;
        this.IsPaymentPending = false;
        this.transId = "";
        this.RecomendedIDV = 0;
        this.IsRecomendedIDV = 'true';
        this.SetIDV = 0;
        this.isODPolicy = 'false';
        this.tpPolicyNo = "";
        this.tpInsurerName = "";
        this.TWLandingDisplayType = 0;
        //added extra parameter
        this.electricalAccessoriesSumInsured = 0;
        this.nonElectricalAccessoriesSumInsured = 0;
        this.paCoverUnnamedPassengerSumInsured = 0;
        this.hasRSACover = false;
        this.hasZeroDepreciationCover = false;
        this.isPACoverAdded = false;
        this.InsuredMobileNo = "";
        this.InsuredEmailId = "";
        this.isDefaultOD = false;
        this.isTPPolicy = false;
        this.SoftCopyFlag = false;
        this.isSCPAPolicy = true;
        this.IsFresh2RolloverRedirect = false;
        //Bagi
        this.Transfor = "";
        this.RTOLocationName = "";
        this.RegistrationNumber = "";
        this.memebershipNumber = "";
        this.haspaCoverUnnamedPassenger = "";
        this.isAutoMobileAssociationFlag = "";
        this.tpApproach = "";
        this.engineNumber = "";
        this.chassisNumber = "";
        this.isEchannelDeal = "";
        this.isEchannelVertical = false;
        this.isOEMRenewal = false;
        this.isOnePlusThreePolicy = false;
        this.IsCallCenter = false;
        this.IsDiscountPopup = false;
        //AML CR changes 28/01/22
        this.hypothicationList = [{}];
        this.annualIncomeList = [{}];
        this.occupationList = [{}];
        this.hypothecationLoan = "";
        this.hypothecationDetails = false;
        this.occupationDetails = true;
        this.IsAMLMandatory = true;
        this.occupation = "";
        this.nameOfFirm = "your employer";
        this.financierName = "";
        this.financierBranch = "";
        this.showECN = false;
    }
    return MotorUIModel;
}());
var ActiveCoverPlansUIModel = /** @class */ (function () {
    function ActiveCoverPlansUIModel() {
        this.CoverPrice = 0;
    }
    return ActiveCoverPlansUIModel;
}());
var PreviousPolicyModel = /** @class */ (function () {
    function PreviousPolicyModel() {
        this.hasZeroDepreciationCover = true;
    }
    return PreviousPolicyModel;
}());
//ex-showroom request model
var VehicleExShowroomPriceRequestModel = /** @class */ (function () {
    function VehicleExShowroomPriceRequestModel() {
        this.isEchannelVertical = true;
    }
    return VehicleExShowroomPriceRequestModel;
}());
//ex-showroom response model
var VehicleExShowroomPriceResponseModel = /** @class */ (function (_super) {
    __extends(VehicleExShowroomPriceResponseModel, _super);
    function VehicleExShowroomPriceResponseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleExShowroomPriceResponseModel;
}(BaseUIResponseModel));
var MotorMakeModel = /** @class */ (function () {
    function MotorMakeModel() {
        this.vehicleMakeModelDescription = "";
        this.vehicleMakeModelCode = "";
        this.vehicleMake = "";
        this.vehicleModel = "";
        this.cubicCapacity = 0;
    }
    return MotorMakeModel;
}());
var MotorRTOLocation = /** @class */ (function () {
    function MotorRTOLocation() {
        this.rtO_LOCATION_CODE = 0;
        this.description = "";
    }
    return MotorRTOLocation;
}());
var ConfirguredPlansRequestModel = /** @class */ (function () {
    function ConfirguredPlansRequestModel() {
    }
    return ConfirguredPlansRequestModel;
}());
var ConfirguredPlansResponseUIModel = /** @class */ (function () {
    function ConfirguredPlansResponseUIModel() {
    }
    return ConfirguredPlansResponseUIModel;
}());
var EligibleCoverModel = /** @class */ (function () {
    function EligibleCoverModel() {
    }
    return EligibleCoverModel;
}());
var VehicleEligibleCoverModel = /** @class */ (function () {
    function VehicleEligibleCoverModel() {
    }
    return VehicleEligibleCoverModel;
}());
var EligibleCovers = /** @class */ (function () {
    function EligibleCovers() {
    }
    return EligibleCovers;
}());
var MotorQuoteRequestUIModel = /** @class */ (function () {
    function MotorQuoteRequestUIModel() {
        this.tpPolicyNo = "";
        this.tpInsurerName = "";
        this.selectedPlanName = "";
        this.RequestOriginateFrom = "";
        this.IsFresh2RolloverRedirect = false;
        this.competitor = "";
        this.IsDiscountRequest = false;
        this.IsMaxDiscount = false;
        this.IsDiscountRemove = false;
    }
    return MotorQuoteRequestUIModel;
}());
var PolicyPremiumUIModel = /** @class */ (function (_super) {
    __extends(PolicyPremiumUIModel, _super);
    function PolicyPremiumUIModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ecsProposalId = "";
        _this.ecsCustomerId = "";
        _this.totalPremium = 0;
        _this.basicPremium = 0;
        _this.totalGSTTax = 0;
        _this.isCachedPremium = false;
        _this.tenure = 0;
        _this.sumInsured = 0;
        _this.cubicCapacity = 0;
        _this.hasKeyProtectCover = false;
        _this.hasZeroDepreciationCover = false;
        _this.hasConsumableCover = false;
        _this.hasEngineProtectCover = false;
        _this.hasRSACover = false;
        _this.hasLossOfPersonalBelongingCover = false;
        _this.hasGarageCashCover = false;
        _this.hasPaCoverUnnamedPassengerCover = false;
        _this.hasExistingPACover = false;
        _this.hasNoValidDrivingLicense = false;
        _this.isRTI = false;
        _this.haspaCoverUnnamedPassenger = false;
        _this.paCoverUnnamedPassengerSumInsured = "0";
        _this.voluntaryDiscountPlan = 0;
        _this.voluntaryDis = "";
        _this.TotalCoverPrice = 0;
        _this.tpPolicyNo = "";
        _this.tpInsurerName = "";
        _this.mPID = "";
        _this.selectedPlanName = "";
        _this.SavingPercentage = 0;
        _this.isOnePlusThreePolicy = false;
        _this.isDiscountEligible = false;
        return _this;
    }
    return PolicyPremiumUIModel;
}(BaseUIResponseModel));
var MotorPremiumUIModel = /** @class */ (function () {
    function MotorPremiumUIModel() {
    }
    return MotorPremiumUIModel;
}());
var FLAResponseUIModel = /** @class */ (function (_super) {
    __extends(FLAResponseUIModel, _super);
    function FLAResponseUIModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FLAResponseUIModel;
}(BaseUIResponseModel));
var ErrorUIMotorModel = /** @class */ (function () {
    function ErrorUIMotorModel() {
        this.chassisNo = false;
        this.engineNo = false;
        //Rollover pricematch CR changes
        this.expectedDiscountPrice = false;
        this.competitor = false;
        this.nodiscount = false;
        this.applicableprice = false;
        //AML CR changes  28/01/22
        this.hypothicationType = false;
        this.annualIncome = false;
        this.occupation = false;
        this.officeAddress = false;
        this.employerName = false;
        this.officeAddressMsg = "";
        this.employerNameMsg = "";
        this.financierBranchMsg = "";
        this.financierNameMsg = "";
        this.IsOkDisable = false;
    }
    return ErrorUIMotorModel;
}());
var disableMotorModel = /** @class */ (function () {
    function disableMotorModel() {
        this.exShowroomprice = false;
        this.rto = false;
        this.makeModel = false;
        this.purchaseDate = false;
        this.policyendDate = false;
        this.noOfClaims = false;
        this.ncb = false;
        this.individual = false;
        this.policytype = false;
        this.ownership = false;
    }
    return disableMotorModel;
}());
var MotorProposalResponseUIModel = /** @class */ (function (_super) {
    __extends(MotorProposalResponseUIModel, _super);
    function MotorProposalResponseUIModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.softCopyFlag = false;
        _this.isNewlook = false;
        return _this;
    }
    return MotorProposalResponseUIModel;
}(PolicyPremiumUIModel));
var MotorProposalRequestUIModel = /** @class */ (function () {
    function MotorProposalRequestUIModel() {
        this.SoftCopyFlag = false;
        //Added by Manoj for AML changes
        this.annualIncome = 0;
        this.RestrictCategoryFlag = false;
    }
    return MotorProposalRequestUIModel;
}());
var MotorOwnDamage = /** @class */ (function () {
    function MotorOwnDamage() {
    }
    return MotorOwnDamage;
}());
var Liability = /** @class */ (function () {
    function Liability() {
    }
    return Liability;
}());
var PreviousInsurer = /** @class */ (function () {
    function PreviousInsurer() {
    }
    return PreviousInsurer;
}());
var PlanPageUI = /** @class */ (function () {
    function PlanPageUI() {
    }
    return PlanPageUI;
}());
var disabledates = /** @class */ (function () {
    function disabledates() {
    }
    return disabledates;
}());
var InsuredPageUI = /** @class */ (function () {
    function InsuredPageUI() {
        this.fwMotorUIModel = new MotorUIModel();
        this.fwCustUIModel = new CustomerModel();
        this.nomineeModel = new NomineeUIModel();
        // public customerGSTDetail: CustomerGSTInTaxDetail =new CustomerGSTInTaxDetail();
        this.previousPolicy = new PreviousPolicyModel();
        //public ShowPaymentOptions: boolean;
    }
    return InsuredPageUI;
}());
var MotorCalculatePremiumRateReqeustUIModel = /** @class */ (function (_super) {
    __extends(MotorCalculatePremiumRateReqeustUIModel, _super);
    function MotorCalculatePremiumRateReqeustUIModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MotorCalculatePremiumRateReqeustUIModel;
}(BaseUIResponseModel));
var SyncEDWCustomerRequestModel = /** @class */ (function () {
    function SyncEDWCustomerRequestModel() {
    }
    return SyncEDWCustomerRequestModel;
}());
var SyncEDWCustomerNomineeModel = /** @class */ (function () {
    function SyncEDWCustomerNomineeModel() {
    }
    return SyncEDWCustomerNomineeModel;
}());
//# sourceMappingURL=MotorModel.js.map