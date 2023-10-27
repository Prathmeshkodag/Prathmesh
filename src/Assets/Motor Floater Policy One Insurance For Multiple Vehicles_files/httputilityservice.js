/// <reference path="../../../scripts/typings/crypto-js.d.ts" />
/// <reference path="../../../scripts/typings/ga.d.ts" />
/// <reference path="../../../scripts/typings/index.d.ts" />
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
var HttpUtilityService = /** @class */ (function () {
    function HttpUtilityService() {
    }
    HttpUtilityService.clientIpAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get(eChannelConfig.ClientIpAddressUrl)];
                    case 1:
                        response = _a.sent();
                        window.sessionStorage.setItem("clientIpAddress", response.data.ip);
                        return [2 /*return*/, response.data.ip];
                }
            });
        });
    };
    ;
    HttpUtilityService.clientDeviceId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tvc_UAID, tvc_clientID, tvc_trackers, tvc_i, tvc_len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tvc_UAID = 'UA-129630-25';
                        tvc_clientID = "";
                        ga('create', 'UA-129630-25', 'auto');
                        return [4 /*yield*/, ga.getAll()];
                    case 1:
                        tvc_trackers = _a.sent();
                        for (tvc_i = 0, tvc_len = tvc_trackers.length; tvc_i < tvc_len; tvc_i += 1) {
                            if (tvc_trackers[tvc_i].get('trackingId') === tvc_UAID) {
                                tvc_clientID = tvc_trackers[tvc_i].get('clientId');
                            }
                        }
                        if (tvc_clientID != '' && typeof tvc_clientID != 'undefined') {
                            window.sessionStorage.setItem('CID', tvc_clientID);
                        }
                        return [2 /*return*/, tvc_clientID];
                }
            });
        });
    };
    ;
    HttpUtilityService.getUtmParameter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                eChannelConfig.utmSource = Utility.IsNullOrEmpty(Utility.GetUrlParameter("utm_source")) ? eChannelConfig.utmSource : Utility.GetUrlParameter("utm_source");
                eChannelConfig.utmMedium = Utility.IsNullOrEmpty(Utility.GetUrlParameter("utm_medium")) ? eChannelConfig.utmMedium : Utility.GetUrlParameter("utm_medium");
                eChannelConfig.utmCampaign = Utility.IsNullOrEmpty(Utility.GetUrlParameter("utm_campaign")) ? eChannelConfig.utmCampaign : Utility.GetUrlParameter("utm_campaign");
                eChannelConfig.utmKeyword = Utility.IsNullOrEmpty(Utility.GetUrlParameter("utm_keyword")) ? eChannelConfig.utmKeyword : Utility.GetUrlParameter("utm_keyword");
                return [2 /*return*/];
            });
        });
    };
    HttpUtilityService.clientTokenTimeOut = function () {
        var d = new Date().toISOString();
        d = d.split(".")[0] + "Z";
        var input = eChannelConfig.ClientId + "|" + d;
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), CryptoJS.enc.Utf8.parse(eChannelConfig.CryptoKey), {
            keySize: 128 / 8,
            iv: CryptoJS.enc.Utf8.parse(eChannelConfig.CryptoIv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted;
    };
    ;
    HttpUtilityService.xhrResponse = function (xhr) {
        return {
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
            data: Utility.IsNullOrEmpty(xhr.responseText) || xhr.status == 502 ? xhr.responseText : JSON.parse(xhr.responseText)
        };
    };
    ;
    HttpUtilityService.errorHandler = function (xhr) {
        return {
            ok: false,
            status: xhr.status,
            statusText: xhr.statusText,
            data: Utility.IsNullOrEmpty(xhr.statusText) || xhr.status == 502 ? xhr.responseText : JSON.parse(xhr.statusText)
        };
    };
    ;
    HttpUtilityService.MakeHttpServiceCall = function (httpVerb, url, body) {
        if (body === void 0) { body = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eChannelConfig.ClientIPAddress = await HttpUtilityService.clientIpAddress();
                // eChannelConfig.ClientDeviceId = await HttpUtilityService.clientDeviceId();
                HttpUtilityService.getUtmParameter();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open(httpVerb, url);
                        var kv = Utility.KeyIv();
                        var KV = Utility.createEncryptedKV(kv);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.setRequestHeader("Authorization", "Bearer " + eChannelConfig.AuthToken);
                        xhr.setRequestHeader("UtmSrc", "" + eChannelConfig.utmSource);
                        xhr.setRequestHeader("UtmMedium", "" + eChannelConfig.utmMedium);
                        xhr.setRequestHeader("UtmCampaign", "" + eChannelConfig.utmCampaign);
                        xhr.setRequestHeader("UtmKeyword", "" + eChannelConfig.utmKeyword);
                        xhr.setRequestHeader("GclId", "" + eChannelConfig.gclId);
                        xhr.setRequestHeader("EfId", "" + eChannelConfig.efId);
                        xhr.setRequestHeader("ClientIPAddress", "2405:204:e187:d206");
                        xhr.setRequestHeader("DeviceId", "d1234");
                        xhr.setRequestHeader("ApiBinding", HttpUtilityService.clientTokenTimeOut());
                        xhr.setRequestHeader("CID", window.sessionStorage.getItem('CID'));
                        xhr.setRequestHeader("SID", window.sessionStorage.getItem('SID'));
                        xhr.setRequestHeader("version", "v6.1.1");
                        xhr.setRequestHeader("Kv", KV);
                        xhr.onload = function (evt) {
                            resolve(HttpUtilityService.xhrResponse(xhr));
                            if (xhr.status == 403) {
                                var _location_href = window.location.href.toLowerCase();
                                if (_location_href != null && (_location_href.indexOf("/action/edit") <= -1 && _location_href.indexOf("/action/preview") <= -1)) {
                                    sessionStorage.removeItem("UserDetailsData");
                                    sessionStorage.removeItem("AuthorizationToken");
                                    sessionStorage.removeItem("TokenExpiry");
                                    sessionStorage.removeItem("LoginType");
                                    window.location.href = "/?sessionexpired=t";
                                }
                            }
                            ;
                        };
                        xhr.onerror = function (evt) {
                            resolve(HttpUtilityService.errorHandler(xhr));
                        };
                        //added for sending encrypted body 
                        if (httpVerb.toUpperCase().search("POST") == 0) {
                            var bd = Utility.EncryptionBody(JSON.stringify(body), kv).toString();
                            xhr.send(bd);
                        }
                        else
                            xhr.send();
                    })];
            });
        });
    };
    ;
    //added for sending encrypted body 
    HttpUtilityService.MakeHttpServiceCallV1 = function (httpVerb, url, body) {
        if (body === void 0) { body = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eChannelConfig.ClientIPAddress = await HttpUtilityService.clientIpAddress();
                // eChannelConfig.ClientDeviceId = await HttpUtilityService.clientDeviceId();
                HttpUtilityService.getUtmParameter();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open(httpVerb, url);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.setRequestHeader("Authorization", "Bearer " + eChannelConfig.AuthToken);
                        xhr.setRequestHeader("UtmSrc", "" + eChannelConfig.utmSource);
                        xhr.setRequestHeader("UtmMedium", "" + eChannelConfig.utmMedium);
                        xhr.setRequestHeader("UtmCampaign", "" + eChannelConfig.utmCampaign);
                        xhr.setRequestHeader("UtmKeyword", "" + eChannelConfig.utmKeyword);
                        xhr.setRequestHeader("GclId", "" + eChannelConfig.gclId);
                        xhr.setRequestHeader("EfId", "" + eChannelConfig.efId);
                        xhr.setRequestHeader("ClientIPAddress", "2405:204:e187:d206");
                        xhr.setRequestHeader("DeviceId", "d1234");
                        xhr.setRequestHeader("ApiBinding", HttpUtilityService.clientTokenTimeOut());
                        xhr.setRequestHeader("CID", window.sessionStorage.getItem('CID'));
                        xhr.setRequestHeader("SID", window.sessionStorage.getItem('SID'));
                        xhr.onload = function (evt) {
                            resolve(HttpUtilityService.xhrResponse(xhr));
                            if (xhr.status == 403) {
                                var _location_href = window.location.href.toLowerCase();
                                if (_location_href != null && (_location_href.indexOf("/action/edit") <= -1 && _location_href.indexOf("/action/preview") <= -1)) {
                                    sessionStorage.removeItem("UserDetailsData");
                                    sessionStorage.removeItem("AuthorizationToken");
                                    sessionStorage.removeItem("TokenExpiry");
                                    sessionStorage.removeItem("LoginType");
                                    window.location.href = "/?sessionexpired=t";
                                }
                            }
                            ;
                        };
                        xhr.onerror = function (evt) {
                            resolve(HttpUtilityService.errorHandler(xhr));
                        };
                        if (httpVerb.toUpperCase().search("POST") == 0)
                            xhr.send(body);
                        else
                            xhr.send();
                    })];
            });
        });
    };
    ;
    HttpUtilityService.MakeHttpServiceCallURL = function (httpVerb, url, body) {
        // eChannelConfig.ClientIPAddress = await HttpUtilityService.clientIpAddress();
        // eChannelConfig.ClientDeviceId = await HttpUtilityService.clientDeviceId();
        if (body === void 0) { body = null; }
        var xhr = new XMLHttpRequest();
        xhr.open(httpVerb, url);
        var kv = Utility.KeyIv();
        var KV = Utility.createEncryptedKV(kv);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + eChannelConfig.AuthToken);
        xhr.setRequestHeader("UtmSrc", "" + eChannelConfig.utmSource);
        xhr.setRequestHeader("UtmMedium", "" + eChannelConfig.utmMedium);
        xhr.setRequestHeader("UtmCampaign", "" + eChannelConfig.utmCampaign);
        xhr.setRequestHeader("UtmKeyword", "" + eChannelConfig.utmKeyword);
        xhr.setRequestHeader("GclId", "" + eChannelConfig.gclId);
        xhr.setRequestHeader("EfId", "" + eChannelConfig.efId);
        xhr.setRequestHeader("ClientIPAddress", "2405:204:e187:d206");
        xhr.setRequestHeader("DeviceId", "d1234");
        xhr.setRequestHeader("version", "v6.1.1");
        xhr.setRequestHeader("kv", KV);
        xhr.setRequestHeader("ApiBinding", HttpUtilityService.clientTokenTimeOut());
        xhr.setRequestHeader("SID", window.sessionStorage.getItem('SID'));
        xhr.setRequestHeader("CID", window.sessionStorage.getItem('CID'));
        if (httpVerb.toUpperCase().search("POST") == 0) {
            var bd = Utility.EncryptionBody(JSON.stringify(body), kv).toString();
            xhr.send(bd);
        }
        else
            xhr.send();
        xhr.onload = function (e) {
            if (this.status === 200) {
                var blob = new Blob([this.response], { type: "application/pdf" });
                //let link = document.createElement('a')
                var linkPdf = window.URL.createObjectURL(blob);
                window.open(linkPdf, '_blank');
                //link.download = 'Results.pdf'
                //link.click()
                if (url.indexOf("/api/Customer/CibilCreditReport") > -1) {
                    // this.IsShowloader = false;
                    window.sessionStorage.setItem("CibilPdfOpened", "true");
                }
            }
            ;
            if (xhr.status == 403) {
                var _location_href = window.location.href.toLowerCase();
                if (_location_href != null && (_location_href.indexOf("/action/edit") <= -1 && _location_href.indexOf("/action/preview") <= -1)) {
                    sessionStorage.removeItem("UserDetailsData");
                    sessionStorage.removeItem("AuthorizationToken");
                    sessionStorage.removeItem("TokenExpiry");
                    sessionStorage.removeItem("LoginType");
                    window.location.href = "/?sessionexpired=t";
                }
            }
            ;
        };
    };
    return HttpUtilityService;
}());
//# sourceMappingURL=httpUtilityService.js.map