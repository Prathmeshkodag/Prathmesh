//Array.prototype.some = function (obj, start) { for (var i = (start || 0), j = this.length; i < j; i++) { if (this[i] === obj) { return true; } } return false; }
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
var EncryptedRequestUIModel = /** @class */ (function () {
    function EncryptedRequestUIModel(requests) {
        this.requests = requests;
    }
    return EncryptedRequestUIModel;
}());
var EncryptedKvUIModel = /** @class */ (function () {
    function EncryptedKvUIModel(msg) {
        this.msg = msg;
    }
    return EncryptedKvUIModel;
}());
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.GetUrlParameter = function (url) {
        var outParam = new RegExp('[\?&]' + url + '=([^&#]*)').exec(window.location.href);
        if (outParam == null)
            return null;
        else
            return decodeURIComponent(outParam[1]) || "0";
    };
    Utility.IsNullOrEmpty = function (input) {
        if (typeof input === 'boolean')
            return false;
        else if (input === null || input === "" || input === undefined || input.length <= 0 || input === 0)
            return true;
        else
            return false;
    };
    Utility.IsValidResponse = function (input) {
        if (input.length === undefined || input.length <= 0)
            return true;
        else
            return false;
    };
    Utility.IsValidEmailId = function (emailId) {
        //const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //const emailFilter = /^(([^|\\<>/()\[\]\.,;:\s@\"-]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^0-9<>/()[\]\.,;:\s@\"]{2,4})$/;
        var emailFilter = /^(([^|\\<>/()\[\]\,;:@\"]+(\[^<>()\[\]\,;:\s@\"])*)|(\"\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^0-9<>/()[\]\.,;:\s@\"]{2,4})$/;
        var emailFilterx = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-]{2,9})+\.)+([a-zA-Z0-9]{2,4})+$/; // added special characters $& and space
        ////^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailFilter.test(emailId) && emailFilterx.test(emailId);
    };
    Utility.IsValidMobileNo = function (mobileNo) {
        var Isvalid = false;
        var mobileFilter = /^([6-9]{1}[0-9]{9})$/;
        mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        var ret = mobileFilter.test(mobileNo);
        if (ret == true && this.IsValidDialer(mobileNo)) {
            Isvalid = true;
        }
        //validation --6 times -- 9999990000 to 1111110000
        if (mobileNo.substring(6, 10) == '0000') {
            var mobileFilter_1 = /^(?!(\d)\1{5})\d{6}([0]{4})$/;
            mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
            return mobileFilter_1.test(mobileNo);
        }
        return Isvalid;
        //if (mobileNo.indexOf('*') != -1) {
        //    const mobileFilter = /^[6-9][0-9][\d*]{6}[0-9]{2}$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
        //else if (mobileNo.substring(2, 8) == '000000') {
        //    const mobileFilter = /^([6-9]{1}[0-9]{9})$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
        //else {
        //    const mobileFilter = /^(?!.*(\d)\1{6})[6-9]\d{9}$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
    };
    //below validations modified by pavan to resolve external exceptions issue
    //public static IsValidRegistrationNo(regNo: string): boolean {
    //    var regex = /^[A-Za-z]{2}[a-zA-Z0-9]*[0-9]$/;
    //    let registrationNo = regNo.trim().toUpperCase();
    //    if (this.IsNullOrEmpty(regNo)) {
    //        return false;
    //    }
    //    else if (registrationNo.length < 5) {
    //        return false;
    //    }
    //    else if (regex.test(registrationNo)) {
    //        return true;
    //    }
    //    else {
    //        return false;
    //    }
    //}
    Utility.IsValidRegistrationNo = function (regNo) {
        if (this.IsNullOrEmpty(regNo)) {
            return false;
        }
        else {
            var registrationNo = regNo.trim().toUpperCase();
            //atleast 5 lenth
            if (registrationNo.length < 5)
                return false;
            //Special character not allowed
            var re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
            var isSplChar = re.test(registrationNo);
            if (isSplChar)
                return false;
            //Atleast one number
            //var regEx =  /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/; 
            var regExC = /.*[0-9].*/;
            if (!registrationNo.match(regExC))
                return false;
            //Atleast one character
            var regExN = /.*[a-zA-Z].*/;
            if (!registrationNo.match(regExN))
                return false;
            // var regex = /[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,5}$/;
            var regex = /^[a-zA-Z]{2}[a-zA-Z0-9]*$/;
            return regex.test(registrationNo);
        }
    };
    // Chassis No validation 
    Utility.IsValidChassisNo = function (chassisNo) {
        var chassisnNo = chassisNo.trim();
        var regex = /^[a-zA-Z0-9]+$/;
        if (regex.test(chassisnNo)) {
            if (chassisNo.replace(/0/g, "") == "")
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    //added by praneeth  engine no. validations
    Utility.IsValidEngineNo = function (engineNo) {
        var enginenNo = engineNo.trim();
        var regex = /^[a-zA-Z0-9]+$/;
        if (regex.test(enginenNo)) {
            if (engineNo.replace(/0/g, "") == "")
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    Utility.SpecialCharsValidation = function (customerName) {
        var customeName = customerName.trim();
        var regex = /^[a-zA-Z0-9 ]+$/;
        if (regex.test(customeName)) {
            return true;
        }
        else {
            return false;
        }
    };
    Utility.SpecialCharsNumbersValidation = function (customerName) {
        var customeName = customerName.trim();
        var regex = /^[a-zA-Z ]+$/;
        if (regex.test(customeName)) {
            return true;
        }
        else {
            return false;
        }
    };
    Utility.IsFirstInputZero = function (input) {
        for (var i = 0; i <= 0; i++) {
            if (input[0] == '0') {
                return true;
            }
            else {
                return false;
            }
        }
    };
    // End of Chassis No validation
    //Added by Praneeth to restrict input all zero's
    Utility.IsInputWithAllZero = function (input) {
        var regex = /^(?!0+$)/;
        if (regex.test(input)) {
            return true;
        }
        else {
            return false;
        }
    };
    //Added by Nikhil for GST IL Pan Validation
    Utility.IsValidGSTILPan = function (gstNo) {
        // Added by Manoj on 23-02-2022 - resolve .toUpperCase() issue on insured details page
        if (!Utility.IsNullOrEmpty(gstNo)) {
            gstNo = gstNo.toUpperCase();
        }
        if (!Utility.IsNullOrEmpty(gstNo) && gstNo.length == 15 && gstNo.slice(2, 12).toUpperCase() == "AAACI7904G") {
            return false;
        }
        else {
            return true;
        }
    };
    Utility.EncryptionWithoutSalt = function (input) {
        var encryptString = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), CryptoJS.enc.Utf8.parse(eChannelConfig.CryptoKey), {
            keySize: 128 / 8,
            iv: CryptoJS.enc.Utf8.parse(eChannelConfig.CryptoIv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encryptString;
    };
    Utility.EncryptionBody = function (input, kv) {
        if (kv != undefined && kv != null && kv != "") {
            var kvq = kv.substring(0, 16);
            var ivq = kv.substring(16, 32);
            var encryptString = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(input), CryptoJS.enc.Utf8.parse(kvq), {
                keySize: 128 / 8,
                iv: CryptoJS.enc.Utf8.parse(ivq),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return JSON.stringify(new EncryptedKvUIModel("e01" + encryptString));
        }
        else {
            return this.EncryptionWithoutSalt(input);
        }
    };
    Utility.KeyIv = function () {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    //KV encryption method
    Utility.createEncryptedKV = function (kv) {
        var publicKey = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqJB60iVd+Thl+P5+Ore0abr7Ae+ANK+9jCj7UbYyXNSIbP6g3QMd4LhAAojln4VZRgpSBKjZ8YBc1yGgb516BOzfOBeqN4WtwN764UwFCyMaF0nA50BnjcMfGKLPvmhAbeRtaG06GtLhbAS9z57NQdEXivHzlRZJehzf7IHcpIUUDXKcaXe2/dHkAGk2zLhdrY9VErAxVj1g39qMNSvAJlrVT+heuR3MWwdle9KNgVFgg7AXybBhorb9GIuMsQS6UTxA/HIvSZUqAetDRfgGhTCss9Kq6EqJV92u4AiOIngstIOA3seLWx48N4xR0jfmZZElwlJIHeedgWxDsEN4/wIDAQAB-----END PUBLIC KEY-----';
        ;
        var encryptData = new Function("publicKey", "kv", "\n            var encryptor = new JSEncrypt({ default_key_size: \"2048\" });\n            encryptor.setPublicKey(publicKey);\n            var ciphertext = encryptor.encrypt(kv);\n\t        return ciphertext.toString();");
        var encryptedKV = encryptData(publicKey, kv);
        return encryptedKV;
    };
    Utility.GetuniqueNumber = function (length) {
        return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)).toString();
    };
    Utility.utf8_decode = function (e) {
        var t = "";
        var n = 0;
        var r = 0;
        var c1 = 0;
        var c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            }
            else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            }
            else {
                c2 = e.charCodeAt(n + 1);
                var c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    };
    ;
    Utility.encodeBase64 = function (e) {
        var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = this.utf8_decode((Utility.IsNullOrEmpty(e) ? "" : e.toString()));
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            }
            else if (isNaN(i)) {
                a = 64;
            }
            t = t + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(u) + _keyStr.charAt(a);
        }
        return t;
    };
    ;
    Utility.decodeBase64 = function (s) {
        var e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = s.length;
        var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (i = 0; i < 64; i++) {
            e[A.charAt(i)] = i;
        }
        for (x = 0; x < L; x++) {
            c = e[s.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
            }
        }
        return r;
    };
    ;
    Utility.IsValidGstNum = function (gstno) {
        if (Utility.IsNullOrEmpty(gstno)) {
            return false;
        }
        else {
            gstno = gstno.toUpperCase();
            var reggst = /^([0-9]){2}([a-zA-Z]){3}([P|C|H|A|B|G|J|L|E|F|T]){1}([A-Z]){1}([0-9]){4}([a-zA-Z]){1}([A-Z1-9]){1}([A-J1-9Z]){1}([A-Z0-9]){1}?$/;
            if (reggst.test(gstno) && gstno != '' && gstno.length == 15) {
                //Added to check valid statecode
                if (Number(gstno.substr(0, 2)) > 38 && Number(gstno.substr(0, 2)) < 100) {
                    return false;
                }
                return true;
            }
            else {
                return reggst.test(gstno);
            }
        }
    };
    Utility.IsValidPanCard = function (panCard) {
        var panNo = Utility.IsNullOrEmpty(panCard) ? '' : panCard.toUpperCase();
        var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return regex.test(panNo);
    };
    Utility.IsValidPasspostNo = function (passportNo) {
        passportNo = passportNo.toUpperCase();
        var regex = /^[A-Z]{1}-[0-9]{7}$/;
        return regex.test(passportNo);
    };
    Utility.IsValidCardNumber = function (cardnumber) {
        if (this.IsNullOrEmpty(cardnumber)) {
            return false;
        }
        else {
            var card, ref;
            cardnumber = cardnumber.replace(/\s\s+/g, ' ');
            cardnumber = (cardnumber + '').replace(/\s+|-/g, '');
            if (!/^\d+$/.test(cardnumber)) {
                return false;
            }
            card = this.CardFromNumber(cardnumber);
            if (!card) {
                return false;
            }
            ref = cardnumber.length;
            return ($.inArray(ref, card.length) != -1);
        }
    };
    Utility.CardFromNumber = function (num) {
        var card, j, len;
        num = (num + '').replace(/\D/g, '');
        for (j = 0, len = cards.length; j < len; j++) {
            card = cards[j];
            if (card.pattern.test(num)) {
                return card;
            }
        }
    };
    //public static IsValidMotorUIData(motor: MotorUIModel): ErrorUIMotorModel {
    //    let retVal: ErrorUIMotorModel = new ErrorUIMotorModel();
    //    retVal.IsError = false;
    //    if (PageIdentifier.LandingPage == motor.PageIdentifier) {
    //        retVal.emailId = this.IsNullOrEmpty(motor.emailId);
    //        retVal.mobileNo = this.IsNullOrEmpty(motor.mobileNo);
    //        retVal.registraionNo = motor.policyType == MotorTransactionType.Rollover ? this.IsNullOrEmpty(motor.registraionNo) : false;
    //    }
    //    else if (PageIdentifier.PlanPage == motor.PageIdentifier) {
    //        retVal.purchaseDate = this.IsNullOrEmpty(motor.purchaseDate);
    //        if (motor.exShowroom == undefined)
    //            retVal.exShowroomprice = true;
    //        else if (motor.exShowroom.exShowroomPrice < motor.exShowroom.minimumExShowroomPrice || motor.exShowroom.exShowroomPrice > motor.exShowroom.maximumEXShowroomPrice)
    //            retVal.exShowroomprice = true;
    //        if (motor.makeModel == undefined)
    //            retVal.makeModel = true;
    //        else
    //            retVal.makeModel = this.IsNullOrEmpty(motor.makeModel.vehicleMakeModelCode) ? true : this.IsNullOrEmpty(motor.makeModel.vehicleMakeModelDescription);
    //        if (motor.rTO == undefined)
    //            retVal.rto = true;
    //        else
    //            retVal.rto = this.IsNullOrEmpty(motor.rTO.description) ? true : this.IsNullOrEmpty(motor.rTO.rtO_LOCATION_CODE);
    //        if (motor.policyType == MotorTransactionType.Rollover) {
    //            retVal.policyendDate = motor.policyType == MotorTransactionType.Rollover ? this.IsNullOrEmpty(motor.previousPolicy.policyEndDate) : false;
    //            retVal.bonusOnPreviousPolicy = motor.policyType == MotorTransactionType.Rollover ? this.IsNullOrEmpty(motor.previousPolicy.bonusOnPreviousPolicy) : false;
    //        }
    //    }
    //    else if (PageIdentifier.CustomizePage == motor.PageIdentifier) {
    //    }
    //    else if (PageIdentifier.InsuredPage == motor.PageIdentifier) {
    //        retVal.registraionNo = this.IsNullOrEmpty(motor.registraionNo);
    //        if (motor.policyType == MotorTransactionType.BuyNew) {
    //            retVal.engineNo = this.IsNullOrEmpty(motor.engineNo);
    //            retVal.chassisNo = this.IsNullOrEmpty(motor.chassisNo);
    //        }
    //        else if (motor.policyType == MotorTransactionType.Rollover)
    //            retVal.previousPolicyInsurer = this.IsNullOrEmpty(motor.previousPolicy.previousPolicyInsurer);
    //        if (motor.vehicleUnder != 10) {
    //            retVal.financierName = this.IsNullOrEmpty(motor.financierName);
    //            retVal.financierBranch = this.IsNullOrEmpty(motor.financierBranch);
    //        }
    //    }
    //    const v = Object.keys(retVal).map(key => retVal[key]);
    //    retVal.IsError = v.some(v => v == true);
    //    return retVal;
    //}
    Utility.VehiclePurchaseDateForMaxCap = function (purchaseDate) {
        var y = new Date(purchaseDate).getFullYear();
        var dCur = new Date(); //current date year
        dCur.setDate(dCur.getDate() + (1 + 7 - dCur.getDay()) % 7);
        var d = new Date(y, (dCur.getMonth()), dCur.getDate());
        return d;
    };
    Utility.VehiclePurchaseDateFromYear = function (purchaseyear, TransType) {
        var d = new Date(); //current date year
        var currentDateInPurchaseYear = new Date(purchaseyear, (d.getMonth()), d.getDate()); //current date in vehicle purchase year
        if ((d.getFullYear() - purchaseyear) > 15) {
            //PlanPage.ShowErrorMsg('On date of policy initiation, age of vehicle should be less than 15 years.');
            //return;
        }
        var diff = currentDateInPurchaseYear.getDate() - currentDateInPurchaseYear.getDay();
        var getCurrentSundayDateInPurchaseYear = new Date(currentDateInPurchaseYear.setDate(diff + 6));
        //Added By Bijendra das Policy cap for vehicle age > 15 years
        if ((d.getFullYear() - purchaseyear) == 15) {
            var dCur = new Date(); //current date year
            dCur.setDate(dCur.getDate() + (1 + 7 - dCur.getDay()) % 7);
            return new Date(purchaseyear, (dCur.getMonth()), dCur.getDate());
        }
        else {
            return new Date(getCurrentSundayDateInPurchaseYear.getFullYear(), (getCurrentSundayDateInPurchaseYear.getMonth()), getCurrentSundayDateInPurchaseYear.getDate());
        }
    };
    Utility.VehiclePolicyEndDateDateFromYear = function (purchaseyear, TransType) {
        var d = new Date();
        var diff1 = d.getDate() - d.getDay();
        var getCurrentSaturdayDateInPurchaseYear = new Date(d.setDate(diff1 + 6));
        var RetDate = new Date(d.getFullYear(), (getCurrentSaturdayDateInPurchaseYear.getMonth()), getCurrentSaturdayDateInPurchaseYear.getDate());
        //start wd-833
        //Added By Bijendra das Policy cap for vehicle age > 15 years
        if ((d.getFullYear() - purchaseyear) == 15) {
            var dCur1 = new Date(); //current date year
            var dtDay = dCur1.getDate() == 1 ? dCur1.getDate() : dCur1.getDate() - 1;
            return new Date(dCur1.getFullYear(), dCur1.getMonth(), dtDay);
        }
        else {
            var dtDay = getCurrentSaturdayDateInPurchaseYear.getDate() == 1 ? getCurrentSaturdayDateInPurchaseYear.getDate() : getCurrentSaturdayDateInPurchaseYear.getDate() - 1;
            return new Date(d.getFullYear(), getCurrentSaturdayDateInPurchaseYear.getMonth(), dtDay);
        }
        return RetDate;
    };
    Utility.VehiclePurchaseDate = function (purchaseDate) {
        var y = new Date(purchaseDate).getFullYear();
        var d = new Date(y, new Date().getMonth(), new Date().getDate()); //will get todays date with purchase year
        var diff = d.getDate() - d.getDay();
        d.setDate(diff);
        return d;
    };
    Utility.VehiclePolicyEndDateForMaxCap = function () {
        var d = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
        return d;
    };
    Utility.VehiclePolicyEndDate = function () {
        var d = new Date();
        var diff = d.getDate() - d.getDay();
        d.setDate(diff + 6);
        return d;
    };
    Utility.VehiclePolicyStartDate = function () {
        var d = new Date();
        var diff = d.getDate() - d.getDay();
        d.setDate(diff + 6);
        return d;
    };
    Utility.IsValidCustomerUIData = function (customer, nominee, IsNomineeValidate) {
        if (IsNomineeValidate === void 0) { IsNomineeValidate = true; }
        var retVal = new ErrorCustomerUIModel();
        retVal.IsError = false;
        if (PageIdentifier.InsuredPage == customer.PageIdentifier || PageIdentifier.DashboardPage == customer.PageIdentifier) {
            //retVal.title = this.IsNullOrEmpty(customer.titleName);
            retVal.name = this.IsNullOrEmpty(customer.name);
            retVal.dateOfBirth = this.IsNullOrEmpty(customer.dateOfBirth);
            retVal.gender = this.IsNullOrEmpty(customer.gender);
            retVal.emailId = this.IsNullOrEmpty(customer.emailId);
            retVal.mobileNo = this.IsNullOrEmpty(customer.telephoneNo) ? true : this.IsValidEncryptedMobileNo(customer.telephoneNo) ? false : !this.IsValidMobileNo(customer.telephoneNo);
            if (customer.address == undefined) {
                retVal.address = true;
                retVal.cityState = true;
                retVal.pinCode = true;
            }
            else {
                retVal.pinCode = this.IsNullOrEmpty(customer.address.pinCode) ? true : customer.address.pinCode.toString().length == 6 ? false : true;
                retVal.cityState = this.IsNullOrEmpty(customer.address.cityName);
                retVal.address = this.IsNullOrEmpty(customer.address.address);
            }
            if (PageIdentifier.DashboardPage == customer.PageIdentifier) {
                retVal.panNo = this.IsNullOrEmpty(customer.panCardNo) ? false : this.IsValidPanCard(customer.panCardNo) ? false : customer.panCardNo.indexOf('*') > -1 ? false : true;
            }
            else {
                retVal.panNo = this.IsNullOrEmpty(customer.panCardNo) ? false : this.IsValidPanCard(customer.panCardNo) ? false : true;
            }
            //retVal.passportNo = this.IsNullOrEmpty(customer.passportNo) ? false : this.IsValidPasspostNo(customer.passportNo) ? false : true;
            if (IsNomineeValidate) {
                if (nominee == undefined || nominee == null) {
                    retVal.nomineeName = true;
                    retVal.relationshipWithNominee = true;
                }
                else {
                    retVal.nomineeName = this.IsNullOrEmpty(nominee.name);
                    retVal.nomineeDob = this.IsNullOrEmpty(nominee.dateOfBirth);
                    retVal.relationshipWithNominee = this.IsNullOrEmpty(nominee.relationShipName);
                }
                if (customer.gstCustomerDetails != null && customer.gstCustomerDetails.gstiN_UINNo != null)
                    retVal.gstInNo = this.IsNullOrEmpty(customer.gstCustomerDetails.gstiN_UINNo);
            }
        }
        var v = Object.keys(retVal).map(function (key) { return retVal[key]; });
        retVal.IsError = v.some(function (v) { return v == true; });
        return retVal;
    };
    Utility.IsValidDateFormat = function (format, date) {
        if (format === "mmDDyyyy") {
            var dateFormat = /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-(19|20)\d{2}$/;
            return dateFormat.test(date);
        }
    };
    //public static getFormatDate(): Date {
    //    let d = new Date(),
    //        month = '' + d.getMonth() + 1,
    //        day = '' + d.getDate(),
    //        year = d.getFullYear();
    //    if (month.length < 2) month = '0' + month;
    //    if (day.length < 2) day = '0' + day;
    //    return [day, month, year].join('/');
    //};
    Utility.AgeCalculation = function (birthDate) {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    Utility.AgeCalculationInmonth = function (strDate) {
        var d2 = new Date();
        var d1 = new Date(strDate);
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        // edit: increment months if d2 comes later in its month than d1 in its month
        if (d2.getDate() >= d1.getDate())
            months++;
        // end edit
        return months <= 0 ? 0 : months;
    };
    Utility.getCustomDateFormat = function (format, delimeter, date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (format === "MMddYYYY") {
            return [month, day, year].join(delimeter);
        }
    };
    ;
    Utility.validInsuredDetails = function (boosterinsured) {
        var retVal = new ErrorUIBoosterModel();
        retVal.IsError = false;
        if (PageIdentifier.InsuredPage == boosterinsured.PageIdentifier) {
            retVal.relationShipName = this.IsNullOrEmpty(boosterinsured.relationShipName);
            retVal.name = this.IsNullOrEmpty(boosterinsured.name);
            retVal.dateOfBirth = this.IsNullOrEmpty(boosterinsured.dateOfBirth);
            retVal.heightsInFeets = this.IsNullOrEmpty(boosterinsured.HeightInFeets);
            retVal.heightsInInches = this.IsNullOrEmpty(boosterinsured.HeightInInches);
            if (boosterinsured == undefined) {
                retVal.relationShipName = true;
                retVal.name = true;
                retVal.weight = true;
                retVal.heightsInFeets = true;
                retVal.heightsInInches = true;
                retVal.dateOfBirth = true;
            }
            else {
                retVal.relationShipName = this.IsNullOrEmpty(boosterinsured.relationShipName);
                retVal.name = this.IsNullOrEmpty(boosterinsured.name);
                retVal.weight = this.IsNullOrEmpty(boosterinsured.dateOfBirth);
            }
        }
        var v = Object.keys(retVal).map(function (key) { return retVal[key]; });
        retVal.IsError = v.some(function (v) { return v == true; });
        return retVal;
    };
    Utility.IsValidEncryptedEmailIds = function (emailId) {
        var emailFilter = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        return emailFilter.test(emailId);
    };
    Utility.IsValidEncryptedMobileNo = function (mobileNo) {
        var mobileFilter = /^([6-9]{1}[0-9*]{9})$/;
        mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        return mobileFilter.test(mobileNo);
        //if (mobileNo.indexOf('*') != -1) {
        //    const mobileFilter = /^[6-9][0-9][\d*]{6}[0-9]{2}$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
        //else if (mobileNo.substring(2, 8) == '000000') {
        //    const mobileFilter = /^([6-9]{1}[0-9]{9})$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
        //else {
        //    const mobileFilter = /^(?!.*(\d)\1{6})[6-9]\d{9}$/;
        //    mobileNo = this.IsNullOrEmpty(mobileNo) ? mobileNo : mobileNo.trim();
        //    return mobileFilter.test(mobileNo);
        //}
    };
    Utility.IsOnlyAlphaNumeric = function (strvalue) {
        var alphaNumericFilter = /[^0-9a-zA-Z/-]/g;
        return alphaNumericFilter.test(strvalue);
    };
    Utility.IsOnlyAlphaBets = function (strvalue) {
        var alphaNumericFilter = /[^a-z A-Z]/g;
        return alphaNumericFilter.test(strvalue);
    };
    Utility.IsOnlyNumeric = function (strvalue) {
        var alphaNumericFilter = /[^0-9/-]/g;
        return alphaNumericFilter.test(strvalue);
    };
    Utility.IsNumeric = function (strvalue) {
        var alphaNumericFilter = /[^0-9/-]/g;
        return alphaNumericFilter.test(strvalue);
    };
    Utility.getDayDifference = function (dt1, dt2) {
        var oneDay = 24 * 60 * 60 * 1000; // one day in ms
        var date1 = new Date(this.getMMddyyyyformat(dt1));
        var date2 = new Date(this.getMMddyyyyformat(dt2));
        var diffDays = Math.ceil((date1.getTime() - date2.getTime()) / (oneDay));
        return diffDays;
    };
    ;
    Utility.getYearDifference = function (dt1, dt2) {
        var months;
        months = (dt1.getFullYear() - dt2.getFullYear()) * 12;
        months -= dt2.getMonth() + 1;
        months += dt1.getMonth();
        return months <= 0 ? 0 : (months / 12);
    };
    ;
    Utility.GetProductTypeByURL = function () {
        var PolicyType = "";
        var URLstr = this.GetUrlParameter("returl");
        if (!Utility.IsNullOrEmpty(URLstr)) {
            if (window.location.href.indexOf('localhost') > -1) {
                if (URLstr.indexOf("car") > -1)
                    PolicyType = "fw";
                else if (URLstr.indexOf("arogya_renewal") > -1)
                    PolicyType = "arogya";
                else if (URLstr.indexOf("CHI") > -1 || URLstr.indexOf("health-insurance-plans") > -1)
                    PolicyType = "chi";
                else if (URLstr.indexOf("cyber") > -1)
                    PolicyType = "cyber";
                else if (URLstr.indexOf("group-product") > -1)
                    PolicyType = "groupproduct";
                else if (URLstr.indexOf("max-protect") > -1)
                    PolicyType = "maxp";
            }
            else {
                if (URLstr.indexOf("car-insurance") > -1)
                    PolicyType = "fw";
                else if (URLstr.indexOf("arogya-renewal") > -1)
                    PolicyType = "arogya";
                else if (URLstr.indexOf("CHI") > -1 || URLstr.indexOf("health-insurance-plans") > -1)
                    PolicyType = "chi";
                else if (URLstr.indexOf("cyber") > -1)
                    PolicyType = "cyber";
                else if (URLstr.indexOf("group-product") > -1)
                    PolicyType = "groupproduct";
                else if (URLstr.indexOf("max-protect") > -1)
                    PolicyType = "maxp";
            }
        }
        return PolicyType;
    };
    Utility.ddMMyyyyConvertor = function (dob) {
        var getDate = dob.split('/');
        var day = getDate[0].replace(/[^\x00-\x7F]/g, "");
        var daymonth = getDate[1].replace(/[^\x00-\x7F]/g, "");
        var date = Number(day) < 10 ? '0' + getDate[1] : getDate[1];
        var month = Number(daymonth) < 10 ? '0' + getDate[0] : getDate[0];
        return date + '/' + month + '/' + getDate[2];
    };
    Utility.MMddyyyyOffsetConvertor = function (dob) {
        var getDate = dob.split('/');
        var day = getDate[0].replace(/[^\x00-\x7F]/g, "");
        var daymonth = getDate[1].replace(/[^\x00-\x7F]/g, "");
        var date = Number(day) < 10 ? '0' + getDate[0] : getDate[0];
        var month = Number(daymonth) < 10 ? '0' + getDate[1] : getDate[1];
        return date + '/' + month + '/' + getDate[2];
    };
    Utility.IsValidAadharNo = function (aadharNo) {
        var aadharFilter = /^([0-9]{12})$/;
        return aadharFilter.test(aadharNo);
    };
    Utility.IsValidPincode = function (pincode) {
        var pincodeFilter = /^[1-9][0-9]{5}$/;
        return pincodeFilter.test(pincode.toString());
    };
    Utility.IsNumberNullOrEmpty = function (input) {
        if (input === null || input === "" || input === undefined)
            return true;
        else
            return false;
    };
    Utility.IsValidDate = function (value, maxyr, minyr, maxday, minday, maxMonth, minMonth) {
        var MinDate = new Date();
        MinDate.setFullYear(MinDate.getFullYear() - (minyr));
        MinDate.setMonth(MinDate.getMonth() - (minMonth));
        MinDate.setDate(MinDate.getDate() - (minday));
        MinDate = new Date(MinDate.toDateString());
        var MaxDate = new Date();
        MaxDate.setFullYear(MaxDate.getFullYear() - (maxyr));
        MaxDate.setMonth(MaxDate.getMonth() - (maxMonth));
        MaxDate.setDate(MaxDate.getDate() - (maxday));
        MaxDate = new Date(MaxDate.toDateString());
        var birthDate = new Date($.trim(value.toString()));
        birthDate.setHours(0, 0, 0, 0);
        if (!(birthDate >= MinDate && birthDate <= MaxDate)) {
            return false;
        }
        else {
            return true;
        }
    };
    Utility.MinDateFromAge = function (age, fromDate) {
        var MinDate = new Date(fromDate);
        MinDate.setFullYear(MinDate.getFullYear() - age);
        return MinDate;
    };
    Utility.GetPolicyId = function (policyType) {
        var policyId = 0;
        switch (policyType) {
            case "fw":
                policyId = 1;
                break;
            case "chi":
                policyId = 2;
                break;
            case "cyber":
                policyId = 8;
                break;
        }
        return policyId;
    };
    Utility.ClearSession = function (keys) {
        keys.forEach(function (key) {
            sessionStorage.removeItem(key);
        });
    };
    Utility.GetProductTypeFromId = function (policyTypeID, policySubTypeID) {
        var policyType = "";
        switch (policyTypeID) {
            case 2:
                if ([10, 11, 12, 14, 16, 17, 18].indexOf(policySubTypeID) != -1)
                    policyType = "chi";
                else if (policySubTypeID == 22)
                    policyType = "arogya";
                break;
        }
        return policyType;
    };
    Utility.StartWith = function (data, searchText, noofElement) {
        data.forEach(function (element) {
            return element.substring(0, noofElement) == searchText;
        });
    };
    Utility.findElement = function (data, searchText, noofElement) {
        data.forEach(function (element) {
            return element.substring(0, noofElement) == searchText;
        });
    };
    Utility.SomeElement = function (data, searchText) {
        var retValue = false;
        data.forEach(function (element) {
            if (element == searchText) {
                {
                    retValue = true;
                }
            }
        });
        return retValue;
    };
    Utility.GetGenderByRelationShip = function (data) {
        var gender;
        switch (data.toLowerCase()) {
            case "father":
                gender = "Male";
                break;
            case "mother":
                gender = "Female";
                break;
            case "father-in-law":
                gender = "Male";
                break;
            case "mother-in-law":
                gender = "Female";
                break;
            case "brother":
                gender = "Male";
                break;
            case "sister":
                gender = "Female";
                break;
            case "son":
                gender = "Male";
                break;
            case "daughter":
                gender = "Female";
                break;
            case "nephew":
                gender = "Male";
                break;
            case "niece":
                gender = "Female";
                break;
            case "uncle":
                gender = "Female";
                break;
            case "spouse":
                gender = "Female";
                break;
            case "self":
                gender = "Male";
                break;
            default:
                gender = "Male";
        }
        return gender;
    };
    Utility.SomeElementStartWith = function (data, searchText) {
        var retValue = false;
        data.forEach(function (element) {
            if (element.substring(0, String(searchText).length) == searchText)
                retValue = true;
        });
        return retValue;
    };
    Utility.GetPolicyType = function (policyTypeDesc, policySubTypeDesc) {
        var policyType = "";
        switch (policyTypeDesc) {
            case "MOTOR":
                policyType = "fw";
                break;
            case "HEALTH":
                if (policySubTypeDesc == "CHI")
                    policyType = "chi";
                break;
        }
        return policyType;
    };
    Utility.IsValidPolicyNo = function (PolicyNo) {
        var SpecialChar = /^[`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        var NotallowChar = /[`~!@#$%^&*()_+\=\[\]{};':"\\|,.<>\?]/;
        var onlyzero = /^[0]*$/;
        if (NotallowChar.test(PolicyNo)) {
            return true;
        }
        else if (SpecialChar.test(PolicyNo)) {
            return true;
        }
        else if (onlyzero.test(PolicyNo)) {
            return true;
        }
        else {
            return false;
        }
    };
    Utility.DecryptIpartnerUserId = function (encUserId) {
        var retVal = "";
        if (!Utility.IsNumeric(encUserId)) {
            return encUserId;
        }
        var kv = encUserId.charAt(0) + encUserId.charAt(encUserId.length - 1);
        var actualStr = encUserId.substring(1, encUserId.length - 1);
        var cusrPos = 0;
        var stop = 0;
        var decryptStr = "";
        var mainChr = 0;
        var wchAct = "";
        var finalStr = "";
        while (cusrPos < actualStr.length) {
            stop = 0;
            wchAct = actualStr.charAt(cusrPos);
            decryptStr = "";
            while (stop == 0) {
                cusrPos = cusrPos + 1;
                if (actualStr.charAt(cusrPos) == 'P' || actualStr.charAt(cusrPos) == 'M') {
                    stop = 1;
                }
                else {
                    decryptStr = decryptStr + actualStr.charAt(cusrPos);
                    if (cusrPos == actualStr.length) {
                        stop = 1;
                    }
                }
            }
            if (wchAct == 'P') {
                mainChr = parseInt(kv) + parseInt(decryptStr);
            }
            else {
                mainChr = parseInt(kv) - parseInt(decryptStr);
            }
            finalStr = finalStr + String.fromCharCode(mainChr);
        }
        retVal = finalStr;
        return retVal;
    };
    Utility.GetInsuranceType = function (productCode) {
        var InsuranceType = "";
        switch (productCode) {
            case 4150:
                InsuranceType = "Hospi Cash";
                break;
            case 4151:
                InsuranceType = "Vector borne";
                break;
            case 4148:
                InsuranceType = "Personal Accident";
                break;
            case 4173:
                InsuranceType = "Covid-19";
                break;
        }
        return InsuranceType;
    };
    Utility.GetValueById = function (id) {
        var el = document.getElementById(id);
        if (!Utility.IsNullOrEmpty(el.value))
            return el.value;
        else
            return "";
    };
    Utility.IsValidIFSC = function (ifsc) {
        var ifscFilter = /^[A-Za-z]{4}\d{7}$/;
        ifsc = this.IsNullOrEmpty(ifsc) ? ifsc : ifsc.trim();
        if (ifsc.length > 11 || this.IsNullOrEmpty(ifsc))
            return false;
        else
            return ifscFilter.test(ifsc);
    };
    Utility.removeextraAlphanumericSC = function (strval) {
        var initVal = strval;
        var outputVal = initVal.replace(/[^0-9a-zA-Z/-]/g, "");
        if (initVal != outputVal) {
            initVal = outputVal;
        }
        return initVal;
    };
    Utility.IsNonrealTimeEnable = function () {
        var hdnNRTPayUtility = document.getElementById('hdnNRTEnable');
        var IsNRTEnablePayUtility = false;
        if (!Utility.IsNullOrEmpty(hdnNRTPayUtility)) {
            IsNRTEnablePayUtility = (hdnNRTPayUtility.value == 'true' ? true : false);
        }
        return IsNRTEnablePayUtility;
    };
    Utility.IsValidPasspostNo2 = function (passportNo) {
        passportNo = passportNo.toUpperCase();
        var regex = /^[A-Z]{1}[0-9]{7}$/;
        return regex.test(passportNo);
    };
    Utility.addOrd = function (n) {
        var ords = [, 'st', 'nd', 'rd'];
        var ord, m = n % 100;
        return (n + "<span class='scoredate'>" + ((m > 10 && m < 14) ? 'th' : ords[m % 10] || 'th') + "</span>");
    };
    Utility.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    ;
    Utility.corelationId = function () {
        var corel = this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
        return corel;
    };
    ;
    // format 13th March 2013
    Utility.formatDateNew = function (d) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        // Copy date object so don't modify original
        var e = new Date(d);
        e.setDate(e.getDate());
        return this.addOrd(e.getDate()) + ' ' + months[e.getMonth()] + '\'' + e.getFullYear().toString().substr(-2);
    };
    //Added by Manoj to validate Mobile on TW insured details page
    Utility.IsValidDialer = function (mobileNo) {
        var IsValid = true;
        var notDialer = ['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999'];
        if (notDialer.indexOf(mobileNo) > -1) {
            IsValid = false;
        }
        return IsValid;
    };
    Utility.calculateBMI = function (InsuredPerson) {
        var insuredBMI = 0;
        var tempheight = ((((Number(InsuredPerson.heightsInFeets * 12)) + Number(InsuredPerson.heightsInInches)) * 2.54) / 100);
        var tempweight = InsuredPerson.weight;
        tempheight = Math.pow(tempheight, 2);
        insuredBMI = tempweight / tempheight;
        return insuredBMI;
    };
    //Added by Manoj to Price Match Amount on FW Plan page
    Utility.IsNullOrEmptyOrZero = function (input) {
        if (typeof input === 'boolean')
            return false;
        else if (input === null || input === "" || input === "0" || input === undefined || input.length <= 0 || input === 0)
            return true;
        else
            return false;
    };
    Utility.BHValidation = function (registrationNo) {
        var a = registrationNo.split("BH");
        var b = parseInt(a[0]);
        var d = new Date().getFullYear().toString().substr(-2);
        var e = parseInt(d);
        if (b >= 21 && b <= e && (registrationNo.length >= 7) && (registrationNo.length <= 10)) {
            var bhregex = /^(?!0{4})[0-9]{4}[A-HJ-NP-Z]{1,2}$/;
            var bhregval = bhregex.test(a[1]);
            return bhregval;
        }
    };
    ;
    //Added by Firoz
    Utility.DisableEnableFields = function (elmt, flag) {
        $.each(elmt, function (key, value) {
            //debugger
            if (flag) {
                $('#' + value).removeAttr('disabled');
            }
            else {
                $('#' + value).attr('disabled', 'disabled');
            }
        });
    };
    //End here
    //Start - B.T.Yashwanth - Added for mmddyyyy date as input
    Utility.StringTODateArogya = function (date) {
        var splitDate = date.split('/');
        if (splitDate.length > 0 && splitDate.length == 3) {
            var val = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]);
            return val;
        }
    };
    //End - B.T.Yashwanth - Added for mmddyyyy date as input
    Utility.StringTODate = function (date) {
        var splitDate = date.split('/');
        if (splitDate.length < 2) {
            var val_1;
            var splitDate = date.split('T')[0].split('-');
            if (splitDate.length > 2 && splitDate[0] > 1900) {
                val_1 = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
                return val_1;
            }
            else if (splitDate.length > 2 && splitDate[2] > 1900) {
                val_1 = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
            }
            return val_1;
        }
        else {
            var val = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
            return val;
        }
    };
    Utility.formatDate = function (date) {
        var d = new Date(date), month = '' + d.getMonth(), day = '' + d.getDate(), year = d.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        month = monthNames[month];
        //if (month.length < 2) month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join(' ');
    };
    Utility.getMMddyyyyformatTravel = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('-');
    };
    Utility.getMMddyyyyformat = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [month, day, year].join('/');
    };
    Utility.getDDmmyyyy = function (date) {
        var dateArray = date.split("-");
        return [dateArray[0], dateArray[1], dateArray[2]].join('/');
    };
    Utility.GetMMddyyyformatNew = function (date) {
        var dateArray = date.split("/");
        return [dateArray[1], dateArray[0], dateArray[2]].join('/');
    };
    Utility.checkMinLength = function (data, minLength) {
        if (!Utility.IsNullOrEmpty(data)) {
            data = data.toString();
            data = data.trim();
            if (data.length < minLength) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    Utility.GetElderDOB = function (DOB1, DOB2) {
        var val1 = Utility.StringTODate(DOB1);
        var val2 = Utility.StringTODate(DOB2);
        return (val1 < val2) ? val1 : val2;
    };
    Utility.getddMMyyyyformat = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    };
    Utility.getddMMMyyyyFormat = function (date) {
        var dt = new Date(date);
        var month_names = ["Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"];
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + (day >= 10 ? day : "0" + day) + " " + month_names[month_index] + " " + year;
    };
    Utility.getddMMMyyyyFormatArogyaBefit = function (date) {
        var tempdate = date.split("/");
        date = tempdate[1] + "/" + tempdate[0] + "/" + tempdate[2];
        var dt = new Date(date);
        var month_names = ["Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"];
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + (day >= 10 ? day : "0" + day) + " " + month_names[month_index] + " " + year;
    };
    Utility.fnLowerCase = function (data) {
        if (data != null && data != "")
            data = data.trim().toLowerCase();
        return data;
    };
    Utility.fnUpperCase = function (data) {
        if (data != null && data != "")
            data = data.trim().toUpperCase();
        return data;
    };
    Utility.getfWPlanType = function (option, PlanName) {
        if (PlanName === void 0) { PlanName = ""; }
        var Plantype = '';
        var SelectedOption = option == 0 ? PlanName : (option != undefined && option != null ? option.toString() : '');
        SelectedOption = (!Utility.IsNullOrEmpty(SelectedOption) ? SelectedOption : "").toLowerCase();
        switch (SelectedOption) {
            case '1':
            case 'economy':
                Plantype = "just the basics. no bells, no whistles";
                break;
            case '2':
            case 'recommended':
                Plantype = "optimum benefits. zero worries";
                break;
            case '3':
            case 'telematics':
                Plantype = "a smart plan for a smarter you";
                break;
        }
        return Plantype;
    };
    return Utility;
}());
//# sourceMappingURL=utility.js.map