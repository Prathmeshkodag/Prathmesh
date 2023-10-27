/// <reference path="../../../scripts/typings/lz-string.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MasterServices = /** @class */ (function () {
    function MasterServices() {
        MasterServices.GetSessionVersion().then(function (value) {
            MasterServices.GetCityDistrictName();
            MasterServices.Get4WRTOLocation();
            MasterServices.Get4WMakeAndModel();
            MasterServices.Get4WRevisedMakeAndModel();
            MasterServices.Get2WRTOLocation();
            MasterServices.Get2WMakeAndModel();
            MasterServices.GetNomineeRelationship();
            MasterServices.GetPreviousInsurer();
        });
    }
    //master Services
    MasterServices.GetSessionVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetSessionVersion)];
                    case 1:
                        data = _a.sent();
                        if (data != null && data.success) {
                            //this.IsUpdateSessionVersion = true;
                            if (data.cityDistrict != (this._sessionVersion != null && this._sessionVersion.cityDistrict != null ? this._sessionVersion.cityDistrict : 0)) {
                                this._cityDistrict = null;
                                localStorage.removeItem("_cityDistrict");
                            }
                            if (data.previousInsurer != (this._sessionVersion != null && this._sessionVersion.cityDistrict != null ? this._sessionVersion.previousInsurer : 0)) {
                                this._previousInsurer = null;
                                localStorage.removeItem("_previousInsurer");
                            }
                            if (data.customerFamilylist != (this._sessionVersion != null && this._sessionVersion.previousInsurer != null ? this._sessionVersion.customerFamilylist : 0)) {
                                this._CustomerFamilylist = null;
                                localStorage.removeItem("_CustomerFamilylist");
                            }
                            if (data.fwRTOLocation != (this._sessionVersion != null && this._sessionVersion.fwRTOLocation != null ? this._sessionVersion.fwRTOLocation : 0)) {
                                this._fWRTOLocation = null;
                                localStorage.removeItem("_fWRTOLocation");
                            }
                            if (data.fwMakeAndModel != (this._sessionVersion != null && this._sessionVersion.fwMakeAndModel != null ? this._sessionVersion.fwMakeAndModel : 0)) {
                                this._fWMakeAndModel = null;
                                localStorage.removeItem("_fWMakeAndModel");
                            }
                            if (data.fwRevisedMakeAndModel != (this._sessionVersion != null && this._sessionVersion.fwRevisedMakeAndModel != null ? this._sessionVersion.fwRevisedMakeAndModel : 0)) {
                                this._fWRevisedMakeAndModel = null;
                                localStorage.removeItem("_fWRevisedMakeAndModel");
                            }
                            if (data.nomineeRelatioship != (this._sessionVersion != null && this._sessionVersion.nomineeRelatioship != null ? this._sessionVersion.nomineeRelatioship : 0)) {
                                this._nomineeRelatioship = null;
                                localStorage.removeItem("_nomineeRelatioship");
                            }
                            if (data.twRTOLocation != (this._sessionVersion != null && this._sessionVersion.twRTOLocation != null ? this._sessionVersion.twRTOLocation : 0)) {
                                this._tWRTOLocation = null;
                                localStorage.removeItem("_tWRTOLocation");
                            }
                            if (data.twMakeAndModel != (this._sessionVersion != null && this._sessionVersion.twMakeAndModel != null ? this._sessionVersion.twMakeAndModel : 0)) {
                                this._tWMakeAndModel = null;
                                localStorage.removeItem("_tWMakeAndModel");
                            }
                            //this._fWRTOLocation = null;
                            //localStorage.removeItem("_fWRTOLocation);
                            //      this._fWMakeAndModel = null;
                            //localStorage.removeItem("_fWMakeAndModel);
                            //         this._fWRevisedMakeAndModel = null;
                            //localStorage.removeItem("_fWRevisedMakeAndModel);
                            //     this._tWRTOLocation = null;
                            //localStorage.removeItem("_tWRTOLocation);
                            //    this._tWMakeAndModel = null;
                            //localStorage.removeItem("_tWMakeAndModel);
                            localStorage.setItem("SessionVersion", JSON.stringify(data));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, this._cityDistrict];
                }
            });
        });
    };
    MasterServices.GetCityDistrictName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._cityDistrict)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetCityDistrictUrl)];
                    case 1:
                        _a._cityDistrict = _b.sent();
                        localStorage.setItem("_cityDistrict", JSON.stringify(this._cityDistrict));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._cityDistrict];
                }
            });
        });
    };
    MasterServices.Get4WRTOLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._fWRTOLocation)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.Get4WRtoUrl)];
                    case 1:
                        _a._fWRTOLocation = _b.sent();
                        localStorage.setItem("_fWRTOLocation", LZString.compressToBase64(JSON.stringify(this._fWRTOLocation)));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._fWRTOLocation];
                }
            });
        });
    };
    MasterServices.Get4WMakeAndModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._fWMakeAndModel)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.Get4WMakeModelUrl)];
                    case 1:
                        _a._fWMakeAndModel = _b.sent();
                        localStorage.setItem("_fWMakeAndModel", LZString.compressToBase64(JSON.stringify(this._fWMakeAndModel)));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._fWMakeAndModel];
                }
            });
        });
    };
    MasterServices.Get4WRevisedMakeAndModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._fWRevisedMakeAndModel)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.Get4WMakeModelV1Url)];
                    case 1:
                        _a._fWRevisedMakeAndModel = _b.sent();
                        localStorage.setItem("_fWRevisedMakeAndModel", LZString.compressToBase64(JSON.stringify(this._fWRevisedMakeAndModel)));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._fWRevisedMakeAndModel];
                }
            });
        });
    };
    MasterServices.GetNomineeRelationship = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inactiveNominee_1, _a, CombineCover;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._nomineeRelatioship)) return [3 /*break*/, 2];
                        inactiveNominee_1 = ["NEPHEW", "NIECE", "EMPLOYER", "EMPLOYEE", "INSTITUTION"];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetRelationshipUrl)];
                    case 1:
                        _a._nomineeRelatioship = _b.sent();
                        if (this._nomineeRelatioship != null && this._nomineeRelatioship != undefined && this._nomineeRelatioship.relationship != null && this._nomineeRelatioship.relationship != undefined) {
                            CombineCover = this._nomineeRelatioship.relationship.filter(function (el) { return !inactiveNominee_1.some(function (v) { return v.search(el) == 0; }); });
                            //const CombineCover = this._nomineeRelatioship.relationship.filter((thing, i, arr) => {
                            //    return arr.indexOf(arr.find(t => t == thing)) === i;
                            //});
                            this._nomineeRelatioship.relationship = CombineCover;
                            localStorage.setItem("_nomineeRelatioship", JSON.stringify(this._nomineeRelatioship.relationship));
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._nomineeRelatioship];
                }
            });
        });
    };
    MasterServices.GetNomineeRelationshipProductWise = function (policyType) {
        return __awaiter(this, void 0, void 0, function () {
            var nomineeRelations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetNomineeRelationshipUrl + policyType)];
                    case 1:
                        nomineeRelations = _a.sent();
                        return [2 /*return*/, nomineeRelations];
                }
            });
        });
    };
    MasterServices.Get2WRTOLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._tWRTOLocation)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.Get2WRtoUrl)];
                    case 1:
                        _a._tWRTOLocation = _b.sent();
                        localStorage.setItem("_tWRTOLocation", LZString.compressToBase64(JSON.stringify(this._tWRTOLocation)));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._tWRTOLocation];
                }
            });
        });
    };
    MasterServices.Get2WMakeAndModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._tWMakeAndModel)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.Get2WMakeModelUrl)];
                    case 1:
                        _a._tWMakeAndModel = _b.sent();
                        localStorage.setItem("_tWMakeAndModel", LZString.compressToBase64(JSON.stringify(this._tWMakeAndModel)));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._tWMakeAndModel];
                }
            });
        });
    };
    MasterServices.GetPreviousInsurer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Utility.IsNullOrEmpty(this._previousInsurer)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetPreviousInsurerUrl)];
                    case 1:
                        _a._previousInsurer = _b.sent();
                        localStorage.setItem("_previousInsurerJson", JSON.stringify(this._previousInsurer));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._previousInsurer];
                }
            });
        });
    };
    MasterServices.GetCustomerRelationship = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customerFamilylist, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        customerFamilylist = JSON.parse(localStorage.getItem("_CustomerFamilylist"));
                        if (!Utility.IsNullOrEmpty(this._CustomerFamilylist)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.GET, eChannelConfig.GetCityDistrictUrl)];
                    case 1:
                        _a._CustomerFamilylist = _b.sent();
                        customerFamilylist = this._CustomerFamilylist.map(function (m) { return m.lastName; });
                        localStorage.setItem("_CustomerFamilylist", JSON.stringify(this._CustomerFamilylist));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this._CustomerFamilylist];
                }
            });
        });
    };
    MasterServices.SaveSanboxMotorLead = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.MakeAPIControllerCall(HttpVerb.POST, eChannelConfig.SandboxMotorLeadURL, data)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MasterServices._service = new eChannelCoreService();
    //common
    MasterServices._sessionVersion = JSON.parse(localStorage.getItem("SessionVersion"));
    //  public static IsUpdateSessionVersion: boolean = false;
    MasterServices._cityDistrict = JSON.parse(localStorage.getItem("_cityDistrict"));
    MasterServices._previousInsurer = JSON.parse(localStorage.getItem("_previousInsurerJson"));
    MasterServices._CustomerFamilylist = JSON.parse(localStorage.getItem("_CustomerFamilylist"));
    //car
    MasterServices._fWRTOLocation = localStorage.getItem("_fWRTOLocation") != null ? JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWRTOLocation"))) : '';
    MasterServices._fWMakeAndModel = localStorage.getItem("_fWMakeAndModel") != null ? JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWMakeAndModel"))) : '';
    MasterServices._fWRevisedMakeAndModel = localStorage.getItem("_fWRevisedMakeAndModel") != null ? JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWRevisedMakeAndModel"))) : '';
    MasterServices._nomineeRelatioship = JSON.parse(localStorage.getItem("_nomineeRelatioship"));
    //motor
    MasterServices._tWRTOLocation = localStorage.getItem("_tWRTOLocation") != null ? JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_tWRTOLocation"))) : '';
    MasterServices._tWMakeAndModel = localStorage.getItem("_tWMakeAndModel") != null ? JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_tWMakeAndModel"))) : '';
    return MasterServices;
}());
//Intiliazing class to load master services.
var masterServices = new MasterServices();
//Intiliazing class to load master services.
//# sourceMappingURL=masterServices.js.map