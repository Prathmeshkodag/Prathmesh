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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var eChannelCoreService = /** @class */ (function () {
    function eChannelCoreService() {
    }
    eChannelCoreService.prototype.GetTokenIdentifier = function () {
        if (!Utility.IsNullOrEmpty(eChannelConfig.AuthToken)) {
            var tokenExpiry = new Date(eChannelConfig.TokenExpiry);
            var _tokenExpiry = (tokenExpiry.getTime() - new Date().getTime()) / 60 * 1000;
            if (_tokenExpiry < 2 && _tokenExpiry > 0) {
                this.UserTokenIdentifier = TokenIdentifier.RefreshToken;
                this.IsAuthTokenExpired = true;
            }
            else if (_tokenExpiry < 0) {
                this.UserTokenIdentifier = TokenIdentifier.AuthToken;
                this.IsAuthTokenExpired = true;
            }
            else {
                this.UserTokenIdentifier = TokenIdentifier.ValidToken;
                this.IsAuthTokenExpired = false;
            }
        }
        else {
            if (!Utility.IsNullOrEmpty(Utility.GetUrlParameter("TokenId"))) {
                this.UserTokenIdentifier = TokenIdentifier.JWTToken;
                this.IsAuthTokenExpired = true;
            }
            else {
                this.UserTokenIdentifier = TokenIdentifier.AuthToken;
                this.IsAuthTokenExpired = true;
            }
        }
        return this.IsAuthTokenExpired;
    };
    eChannelCoreService.prototype.TokenHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var IsValidToken, httVerb, HBRenewalURL, PPRenewalURL, CurrentURL, CCUrl, _loginModelCC, _loginModel, _authModel, _loginUIReqModel, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        IsValidToken = this.GetTokenIdentifier();
                        if (!IsValidToken) return [3 /*break*/, 2];
                        httVerb = HttpVerb.POST.toString();
                        if (this.UserTokenIdentifier == TokenIdentifier.AuthToken) {
                            this._httpUrl = eChannelConfig.AuthTokenUrlNew2;
                        }
                        else if (this.UserTokenIdentifier == TokenIdentifier.JWTToken) {
                            httVerb = HttpVerb.GET.toString();
                            if (!Utility.IsNullOrEmpty(Utility.GetUrlParameter("TokenId")))
                                this._httpUrl = eChannelConfig.JWTTokenUrl + Utility.GetUrlParameter("TokenId");
                            else
                                this._httpUrl = eChannelConfig.JWTTokenUrl + Utility.GetUrlParameter("webId");
                        }
                        else if (this.UserTokenIdentifier == TokenIdentifier.RefreshToken) {
                            this._httpUrl = eChannelConfig.RefreshTokenUrl;
                        }
                        HBRenewalURL = "https://ipartnercc.icicilombard.com/renew-policy/health/hb-renewal";
                        PPRenewalURL = "https://ipartnercc.icicilombard.com/renew-policy/health/pp-renewal-core";
                        CurrentURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
                        CCUrl = false;
                        if (CurrentURL.toLowerCase() == HBRenewalURL || CurrentURL.toLowerCase() == PPRenewalURL) {
                            this._httpUrl = eChannelConfig.AuthCCTokenUrl;
                            CCUrl = true;
                        }
                        _loginModelCC = new CCLoginUIRequestModel();
                        _loginModel = new LoginUIRequestModel();
                        _authModel = new AuthTokenModel();
                        //_loginModel.Login = window.location.href.toLowerCase().indexOf('car') > 0 ? "website-fresh" : _loginModel.Login;
                        //if (dealId != null && dealId != "") {
                        //    _loginModel.Login = "vendor"; _loginModel.LoginType = "App";
                        //}
                        _loginModel.Password = Utility.EncryptionWithoutSalt(_loginModel.Password + "||" + Utility.corelationId()).toString();
                        _loginUIReqModel = CCUrl == true ? _loginModelCC : _authModel;
                        return [4 /*yield*/, HttpUtilityService.MakeHttpServiceCall(httVerb, this._httpUrl, _authModel)];
                    case 1:
                        token = _a.sent();
                        if (token.ok && token.data.Success || (token.ok && token.data.success)) {
                            //Utility.parseJwtToken(token.data.Passcode);
                            eChannelConfig.AuthToken = token.data.Passcode != undefined ? token.data.Passcode : token.data.authToken;
                            eChannelConfig.IsGuestUser = "true";
                            eChannelConfig.TokenExpiry = token.data.Expiry != undefined ? token.data.Expiry : token.data.tokenExpiry;
                            window.sessionStorage.setItem("AuthorizationToken", eChannelConfig.AuthToken);
                            window.sessionStorage.setItem("IsGuestUser", eChannelConfig.IsGuestUser);
                            window.sessionStorage.setItem("TokenExpiry", (new Date(eChannelConfig.TokenExpiry)).toString());
                            window.sessionStorage.setItem("clientId", token.data.clientId);
                            window.sessionStorage.setItem("kv", token.data.kv);
                            window.sessionStorage.setItem("isProposalOTPAuth", "false");
                            eChannelConfig.IsGuestUser ? window.sessionStorage.setItem("LoginType", "App") : window.sessionStorage.setItem("LoginType", "User");
                            return [2 /*return*/, eChannelConfig.AuthToken];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, eChannelConfig.AuthToken];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //otherServiceCall for token authentication
    eChannelCoreService.prototype.ConfigureServiceCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, IsCallCenterFlag, IsIdirect, shortToken, dealId, isRNDeal, srcProduct, rmCode, matchId, ipartnerId, data_1, source, productCode, flaData, Engine, Chassis, Regnno, _loginModel, requestObj, isGuestUser, data, isSessionStored, srcProduct, Source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        IsCallCenterFlag = "false";
                        IsIdirect = "false";
                        IsCallCenterFlag = (window.sessionStorage.getItem("IsCallCenterUser") == "true") ? "true" : "false";
                        shortToken = Utility.GetUrlParameter("webId");
                        dealId = Utility.GetUrlParameter("dealno");
                        isRNDeal = !(Utility.IsNullOrEmpty(Utility.GetUrlParameter("isRNDeal"))) ? true : false;
                        if (!!Utility.IsNullOrEmpty(shortToken)) return [3 /*break*/, 2];
                        if (document.referrer.split("WebPages")[1] == "/CallCenter/CustomerSearch.aspx" || window.location.host.toUpperCase() == "IPARTNERCC.ICICILOMBARD.COM")
                            IsCallCenterFlag = "true";
                        this._httpUrl = eChannelConfig.JWTTokenUrl + shortToken;
                        return [4 /*yield*/, HttpUtilityService.MakeHttpServiceCall(HttpVerb.GET.toString(), this._httpUrl)];
                    case 1:
                        token = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!!Utility.IsNullOrEmpty(dealId)) return [3 /*break*/, 4];
                        this._httpUrl = eChannelConfig.ICICIDirectUrl;
                        IsIdirect = "true";
                        srcProduct = Utility.GetUrlParameter("SubSrc");
                        rmCode = Utility.GetUrlParameter("RmCode");
                        matchId = Utility.GetUrlParameter("MatchId");
                        ipartnerId = Utility.GetUrlParameter("speppn");
                        if (!Utility.IsNullOrEmpty(ipartnerId)) {
                            data_1 = Utility.DecryptIpartnerUserId(ipartnerId);
                            ipartnerId = data_1.split('|')[data_1.split('|').length - 1];
                        }
                        source = Utility.GetUrlParameter("Source");
                        productCode = dealId.split('/')[0].split('-')[1];
                        if (productCode == "3005")
                            srcProduct = ProductType.Motor.toString();
                        else if (productCode == "3001")
                            srcProduct = ProductType.PrivateCar.toString();
                        else if (productCode == "4128")
                            srcProduct = ProductType.Health.toString();
                        else if (productCode == "4140")
                            srcProduct = ProductType.Booster.toString();
                        else if (productCode == "4013")
                            srcProduct = ProductType.Home.toString();
                        else if (productCode == "4111")
                            srcProduct = ProductType.PersonalProtect.toString();
                        else if (productCode == "4129" || srcProduct == "IT")
                            srcProduct = ProductType.Travel.toString();
                        if (srcProduct == undefined || srcProduct == null) {
                            if (document.location.href.toLowerCase().indexOf("car-insurance") != -1) //removed document.baseURI not supportedin IE
                                srcProduct = ProductType.PrivateCar.toString();
                            else if (document.location.href.toLowerCase().indexOf("two-wheeler-insurance") != -1) //removed document.baseURI not supportedin IE
                                srcProduct = ProductType.Motor.toString();
                        }
                        if ((srcProduct == null || srcProduct == "") && source == "FLA") {
                            flaData = Utility.GetUrlParameter("Other");
                            if (flaData.length > 0) {
                                Engine = flaData.split('|')[0];
                                Chassis = flaData.split('|')[1];
                                Regnno = flaData.split('|')[2];
                                localStorage.setItem("Engine", Engine);
                                localStorage.setItem("Chassis", Chassis);
                                localStorage.setItem("Regnno", Regnno);
                            }
                        }
                        _loginModel = new LoginUIRequestModel();
                        _loginModel.IPartnerUserId = ipartnerId;
                        _loginModel.Login = "vendor";
                        if (ipartnerId != null) {
                            if (Utility.IsNullOrEmpty(Utility.GetUrlParameter("speppn"))) {
                                this._httpUrl = eChannelConfig.AuthTokenUrl;
                            }
                            else {
                                this._httpUrl = eChannelConfig.ICICIDirectUrl;
                                _loginModel.LoginType = "User";
                            }
                        }
                        if (isRNDeal)
                            this._httpUrl = eChannelConfig.AuthTokenUrl;
                        _loginModel.Password = Utility.EncryptionWithoutSalt(_loginModel.Password + "||" + Utility.corelationId()).toString();
                        requestObj = {
                            "DealId": dealId,
                            "MatchId": matchId,
                            "RmCode": rmCode,
                            "ProductCode": srcProduct
                        };
                        requestObj.DealId = dealId;
                        requestObj.MatchId = matchId;
                        requestObj.RmCode = rmCode;
                        requestObj.ProductCode = srcProduct;
                        _loginModel.DealDetails = [];
                        _loginModel.DealDetails[0] = requestObj;
                        return [4 /*yield*/, HttpUtilityService.MakeHttpServiceCall(HttpVerb.POST.toString(), this._httpUrl, _loginModel)];
                    case 3:
                        token = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (token != null && token.ok && token.data.success) {
                            eChannelConfig.AuthToken = token.data.authToken;
                            eChannelConfig.IsGuestUser = token.data.isGuestUser;
                            eChannelConfig.TokenExpiry = token.data.tokenExpiry;
                            window.sessionStorage.setItem("AuthorizationToken", eChannelConfig.AuthToken);
                            window.sessionStorage.setItem("IsGuestUser", eChannelConfig.IsGuestUser);
                            window.sessionStorage.setItem("TokenExpiry", (new Date(eChannelConfig.TokenExpiry)).toString());
                            window.sessionStorage.setItem("clientId", token.data.clientId);
                            window.sessionStorage.setItem("IsCallCenterUser", JSON.parse(IsCallCenterFlag));
                            window.sessionStorage.setItem("LoginType", "User");
                            window.sessionStorage.setItem("isProposalOTPAuth", token.data.isProposalOTPAuth);
                            // Added by Sangeeta to Resolve login control issue to fetch the login data in back scenario
                            window.sessionStorage.setItem("logintoken", eChannelConfig.AuthToken);
                            window.sessionStorage.setItem("loginTokenExpiry", (new Date(eChannelConfig.TokenExpiry)).toString());
                            window.sessionStorage.setItem("kv", token.data.kv);
                            isGuestUser = 1;
                            if (token.data.isGuestUser == false) {
                                isGuestUser = 0;
                            }
                            data = { "isguestuser": isGuestUser, "LastLogin": token.data.lastLogin, "UserName": token.data.userName, "IPartnerUserId": token.data.iPartnerUserId };
                            isSessionStored = JSON.parse(window.sessionStorage.getItem("UserDetailsData"));
                            //dont use jquery ---
                            $('#lbllastlogin').text(data.LastLogin);
                            $('#LblUser').text(data.UserName).show();
                            $('#authoriseUsr,#Span,#LblUser,#LnkLogout').show();
                            $(".profIcohide").hide();
                            $(".profIcoactive").css("display", "block");
                            if (isSessionStored == null || isSessionStored == undefined) {
                                $(".clickSlide").click(function (e) {
                                    $(".profileSec").slideToggle();
                                    $(".callBfeed").hide();
                                    $(".calBckclick").removeClass('active');
                                    e.stopPropagation();
                                });
                                $(document).click(function (e) {
                                    if (!$(e.target).is('.profileSec, .profileSec *')) {
                                        $(".profileSec").hide();
                                    }
                                });
                            }
                            //dont use jquery ---
                            if (!Utility.IsNullOrEmpty(dealId)) {
                                if (token.data.iPartnerUserId > 0)
                                    window.sessionStorage.setItem("UserDetailsData", JSON.stringify(data));
                            }
                            else {
                                window.sessionStorage.setItem("UserDetailsData", JSON.stringify(data));
                            }
                            if (IsIdirect == "true") {
                                srcProduct = Utility.GetUrlParameter("SubSrc");
                                Source = Utility.GetUrlParameter("Source");
                                if ((Source == "CAR") || (Source == "FLA" && srcProduct == "CAR")) {
                                    window.location.href = "/motor-insurance/car-insurance/get-quote/basic-details?source=nav&opt=car";
                                    sessionStorage.wchIntSrc = "BI|4W";
                                }
                                else if ((Source == "TWOWHEELER") || (Source == "FLA" && srcProduct == "TWOWHEELER")) {
                                    window.location.href = "/motor-insurance/two-wheeler-insurance/get-quote/basic-details?source=nav&opt=tw";
                                    sessionStorage.wchIntSrc = "BI|TW";
                                }
                                else if ((Source == "CHI") || (Source == "FLA" && srcProduct == "CHI")) {
                                    window.location.href = "/health-insurance/get-quote/basic-details?opt=chi&source=nav";
                                    sessionStorage.wchIntSrc = "BI|CHI";
                                }
                                else if ((Source == "HB") || (Source == "FLA" && srcProduct == "HB")) {
                                    window.location.href = "/health-insurance/get-quote/basic-details?opt=hb&source=nav";
                                    sessionStorage.wchIntSrc = "BI|HB";
                                }
                                else if ((Source == "IT") || (Source == "FLA" && srcProduct == "IT")) {
                                    window.location.href = "/travel-insurance/get-quote/basic-details?opt=&source=nav";
                                    sessionStorage.wchIntSrc = "BI|IT";
                                }
                                else if ((Source == "IT_S") || (Source == "FLA" && srcProduct == "IT_S")) {
                                    window.location.href = "/travel-insurance/get-quote/basic-details?opt=single-trip&source=nav";
                                    sessionStorage.wchIntSrc = "BI|ITS";
                                }
                                else if ((Source == "IT_M") || (Source == "FLA" && srcProduct == "IT_M")) {
                                    window.location.href = "/travel-insurance/get-quote/basic-details?opt=multi-trip&source=nav";
                                    sessionStorage.wchIntSrc = "BI|ITM";
                                }
                                else if ((Source == "HOME") || (Source == "FLA" && srcProduct == "HOME")) {
                                    window.location.href = "/home-insurance/get-quote/basic-details?source=nav&opt=home";
                                    sessionStorage.wchIntSrc = "BI|HOM";
                                }
                                else if ((Source == "PP") || (Source == "FLA" && srcProduct == "PP")) {
                                    window.location.href = "/health-insurance/get-quote/basic-details?opt=pp&source=nav";
                                    sessionStorage.wchIntSrc = "BI|PP";
                                }
                            }
                        }
                        return [2 /*return*/, eChannelConfig.AuthToken];
                }
            });
        });
    };
    eChannelCoreService.prototype.MakeAPIControllerCall = function (httpVerb, url, body) {
        if (body === void 0) { body = null; }
        return __awaiter(this, void 0, void 0, function () {
            var token, validToken, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TokenHandler()];
                    case 1:
                        token = _a.sent();
                        return [4 /*yield*/, this.ConfigureServiceCall()];
                    case 2:
                        validToken = _a.sent();
                        if (!validToken) return [3 /*break*/, 4];
                        return [4 /*yield*/, HttpUtilityService.MakeHttpServiceCall(httpVerb.toString(), url, body)];
                    case 3:
                        httpResponse = _a.sent();
                        return [2 /*return*/, httpResponse.data];
                    case 4:
                        console.log("Unauthorized access!!");
                        return [2 /*return*/, false];
                }
            });
        });
    };
    eChannelCoreService.ErrorJsLog = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpUtilityService.MakeHttpServiceCall(HttpVerb.POST, eChannelConfig.BaseUrl + eChannelConfig.JsErrorLogURL, body)];
                    case 1:
                        httpResponse = _a.sent();
                        return [2 /*return*/, httpResponse];
                }
            });
        });
    };
    eChannelCoreService.LogErr = function (DESCRIPTION, JS_FILE, LINE, MESSAGE, STACK_TRACE, URL) {
        var err = new JsErrorRequestModel();
        err.DESCRIPTION = DESCRIPTION;
        err.JS_FILE = JS_FILE;
        err.LINE = LINE;
        err.MESSAGE = MESSAGE;
        err.STACKTRACE = STACK_TRACE;
        err.URL = URL;
        err.EXTRA2 = window.location.href;
        eChannelCoreService.ErrorJsLog(err);
    };
    return eChannelCoreService;
}());
//# sourceMappingURL=eChannelCoreService.js.map