/** GLobal Variable **/
//var regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;
//var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//var regMobile = /^(?!.*(\d)\1{6})[6-9]\d{9}$/;
var regEmail=/^([a-zA-Z0-9_.\s-])+\@(([a-zA-Z0-9-]{2,9})+\.)+([a-zA-Z]{2,4})+$/;
var regMobile = /^([6-9]{1}[0-9]{9})$/;
var regName = /^[a-zA-Z\s]*$/;
/** GLobal Variable **/

var PlanPageObj = {};

        PlanPageObj.RTO_LOCATION_CODE = '';
        PlanPageObj.VehicleMakeModelCode = '';

    $(function () {
        hamburger();
        header();
        detachAttach();
        inputFocus();
        selectList();
        //autocompleteBlock();
        formBlockslide();
        landingEvents();
        funThankYou();
        // tabs();
        var PlanPageObj = {};

        PlanPageObj.RTO_LOCATION_CODE = '';
        PlanPageObj.VehicleMakeModelCode = '';

        var currtab, barcurrindex, tabParent, tabcontent;

        currtab = $('.tab-head .active');
        bar = $(currtab).siblings('.bar');
        currindex = currtab.index();
        tabParent = $(currtab).parents('.js-tab-wrap');
        tabcontent = $(tabParent).find('.tab-content-body .tab-content')

        
            currtab.addClass('active').siblings().removeClass('active');
            tabcontent.removeClass('active');
            tabcontent.eq(currindex).addClass('active')
            var left = currtab.position().left
            bar.animate({ left: left }, 500, function () { });
            bar.removeClass('hidden');

        /** Footer **/
        $('.gcButton').on('click', function () {
            var $el = $(this).parent();
            $el.toggleClass('gcDropList');
            $el.find('.gcList').slideToggle(150);
            $('html, body').animate({ scrollTop: $(document).height() });
        });
        $(document).on('click', function (e) {
            var $closest = $('.gcButton');
            if (!$(e.target).closest($closest).length) {
                $closest.parent().removeClass('gcDropList');
                $closest.parent().find('.gcList').slideUp(150);
            }
        });
        /** Footer **/
        $('.ui-autocomplete').mouseenter(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    commonPopup();
        bindAutoComplete();


        $('#payu_lnk').on('click',function(){
     $('#payu-video-block').addClass('active');

});
$('#payd_lnk').on('click',function(){
     $('#payd-video-block').addClass('active');

});
$('#somv_lnk').on('click',function(){
     $('#somv-video-block').addClass('active');

});
    $(document).on('keydown', '.tel', function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault() });

    $(document).on('keyup keypress', '.tel', function (e) {
        var regex = /^[0-9\.]$/;
        var str = $(this).val();
        var subStr = str.substr(str.length - 1);
        if (!regex.test(subStr)) {

            if (str.length > 0) {
                $(this).val(str.substr(0, (str.length - 1)));
            } else {
                $(this).val();
            }

        }

    });
/*numeric pattern*/


    /*alpha pattern*/

    $(document).on('keydown', '.vl-somv-name', function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || 32 == e.keyCode || 222 != e.keyCode && (e.keyCode < 65 || e.keyCode > 90) && e.preventDefault() });
    $(document).on('keyup paste keypress', '.vl-somv-name', function (e) {
        var regex = /[a-zA-Z ]*$/;
        var str = $(this).val();
        var subStr = str.substr(str.length - 1);
        if (!regex.test(subStr)) {

            if (str.length > 0) {
                $(this).val(str.substr(0, (str.length - 1)));
            } else {
                $(this).val();
            }

        }

    });

    $(document).on('keydown', '.vl-name', function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || 32 == e.keyCode || 222 != e.keyCode && (e.keyCode < 65 || e.keyCode > 90) && e.preventDefault() });
    $(document).on('keyup paste keypress', '.vl-name', function (e) {
        var regex = /[a-zA-Z ]*$/;
        var str = $(this).val();
        var subStr = str.substr(str.length - 1);
        if (!regex.test(subStr)) {

            if (str.length > 0) {
                $(this).val(str.substr(0, (str.length - 1)));
            } else {
                $(this).val();
            }

        }

    });

/*alpha pattern*/


$('.jsGoBack').on('click', function(){
    $(this).parents('.form-slide').find('.ui-error').hide();
});

});


function commonPopup() {
    var popup_click = $('.js-popup-btn');
    var popup_close = $('.js-popup-close');
    var popup_wrap, popup_body, overlay;
    $(document).on('click', '.js-popup-btn', function (event) {
        event.preventDefault();
        popup_wrap = $(this).attr('data-popup');
        overlay = $(popup_wrap);
        overlay.addClass('active');
       popup_body = overlay.find('.js-popup-body');
        popup_body.addClass('active');
    });
    $(document).on('click', '.js-popup-close', function (event) {
        event.preventDefault();
        popup_wrap = $(this).parents('.js-popup-wrap');
        overlay = $(popup_wrap);
        //popup_body.removeClass('active');
        popup_body = overlay.find('.js-popup-body');
        overlay.removeClass('active');
        if($(this).parents('.js-popup-wrap').attr('id') == "thankyou-block"){
            $('.form-rightblock').find('input').val('');
            $('.form-rightblock').find('.sbSelector').text('');
             $('.form-rightblock').find('.block').removeClass('focus');
        }
    });

}
    function bindAutoComplete() {
        BindCityDistrictValue(JSON.parse(localStorage.getItem('_cityDistrict')), '#txtCityRegistration');
        BindMakeModelValue(JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWMakeAndModel"))), '#txtCarMakeAndModel');
        $('.gcButton').on('click', function () {
            var $el = $(this).parent();
            $el.toggleClass('gcDropList');
            $el.find('.gcList').slideToggle(150);
            $('html, body').animate({ scrollTop: $(document).height() });
        });
        $(document).on('click', function (e) {
            var $closest = $('.gcButton');
            if (!$(e.target).closest($closest).length) {
                $closest.parent().removeClass('gcDropList');
                $closest.parent().find('.gcList').slideUp(150);
            }
        });
        /** Footer **/
        $('.ui-autocomplete').mouseenter(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }
/** Autocomplete **/

getLocation = function(ApiData, searchtext) {
    var Location = new Array();
    $.each(ApiData, function(key, data) {
        if (data.cityDistrictName.indexOf(searchtext) > -1) {
            Location.push(data);
        }
    });
    return Location;
}
getMakeModel = function (ApiData, searchtext) {
    var Location = new Array();
    $.each(ApiData, function (key, data) {
        if (data.vehicleMakeModelDescription.indexOf(searchtext) > -1) {
            Location.push(data);
        }
    });
    return Location;
}
ValidateinputData = function(d) {
    return (d === undefined || d == null || d == "" || d.length <= 0) ? true : false;
};

BindCityDistrictValue = function(response, txtName) {
    $(txtName).autocomplete({
        source: function(request, response) {
            var req = request.term;
            if (!ValidateinputData(JSON.parse(localStorage.getItem('_cityDistrict')))) {
                var localstorage = JSON.parse(localStorage.getItem('_cityDistrict'));
                var retFN = getLocation(localstorage, req.toUpperCase());
                PlanPageObj.RTO_LOCATION_CODE = retFN.length; 
                if (retFN.length <= 0) {
                    $('#txtCityRegistration').parents('.input-block').find('.ui-error').show();
                    $('#txtCityRegistration').parents('.input-block').find('.ui-error').html("Please enter valid rto location");
                }
                else
                {
                    $('#txtCityRegistration').parents('.input-block').find('.ui-error').hide();
                }
                response($.map(retFN, function(item) {
                    return {
                        label: item.cityDistrictName,
                        val: item.cityDistrictId
                    }
                }));
            } else
                ShowErrorMsg(response.ErrorMessage);
        },
        minLength: 3,
        select: function(event, ui) {
            if (ui.item) {                
                var CityState = ui.item.val.split("-");
                $('#txtCityRegistration').val(ui.item.label.split(",")[0]);
                localStorage.setItem("CityRegistration",ui.item.val.split("-"));
            }
        }
    });
}
BindMakeModelValue = function (response, txtName) {
    $(txtName).autocomplete({
        source: function (request, response) {
            var req = request.term;
            if (!ValidateinputData(JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWMakeAndModel"))))) {
                var localstorage = JSON.parse(LZString.decompressFromBase64(localStorage.getItem("_fWMakeAndModel")));
                var retFN = getMakeModel(localstorage, req.toUpperCase());
                PlanPageObj.VehicleMakeModelCode = retFN.length;
                if (retFN.length <= 0) {
                    $('#txtCarMakeAndModel').parents('.input-block').find('.ui-error').show();
                    $('#txtCarMakeAndModel').parents('.input-block').find('.ui-error').html("Please enter valid vehicle make name");
                }
                else{
                    $('#txtCarMakeAndModel').parents('.input-block').find('.ui-error').hide();
                }
                response($.map(retFN, function (item) {
                    return {
                        label: item.vehicleMakeModelDescription,
                        val: item.vehicleMakeModelCode
                    }
                }));
            } else
                ShowErrorMsg(response.ErrorMessage);
        },
        minLength: 3,
        select: function (event, ui) {
            if (ui.item) {
                var CityState = ui.item.val.split("-");
                $('#txtCarMakeAndModel').val(ui.item.label.split(",")[0]);
                localStorage.setItem("CarMakeModelCode",ui.item.val.split("-"));
            }
        }
    });
}
FnListofCityDistrict = function() {
    if (ValidateinputData(JSON.parse(localStorage.getItem('_cityDistrict')))) {
        return new Promise(function(resolve, reject) {
            if (window.location.href.indexOf("motor") > -1) {
                resolve(Motor.GetAllCityDistrict(""));
            } else if (window.location.href.indexOf("health") > -1) {
                resolve(Health.GetAllCityDistrict(""));
            }
        });
    } else
        return new Promise(function(resolve, reject) {
            resolve([])
        });
};

var CallFnFetchCityDistrict = FnListofCityDistrict();
Promise.all([CallFnFetchCityDistrict]).then(function(response) {
    if (!ValidateinputData(JSON.parse(localStorage.getItem('_cityDistrict')))) {
        BindCityDistrictValue(JSON.parse(localStorage.getItem('_cityDistrict')), '#txtCityRegistration');
    } else if (response[0] != null) {
        $.jStorage.set('StoreCityDistrictList', response[0]);
        BindCityDistrictValue(response[0], '#txtCityRegistration');
    }
}, function(response) {}); 

/* citylistjs */

//header footer js
function hamburger() {
    $('.js-megaMenu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            enableScroll();
            $(this).removeClass('open')
        } else {
            disableScroll()
            $(this).addClass('open')
        }
        $(".menuOverlay").fadeToggle();
        $(".menuCont").slideToggle({
            duration: 500,
            easing: 'easeInOutCirc',
            complete: function () {
                //$(".mainWrapper").toggleClass('blur');
            }
        });
    });
}
//header footer js

/** header **/
function header(){
    $('.rightAln .headingh4:not(.accordCloseNot)').on('click', function(){
        $(this).parent('li').siblings().find('.headingh4').removeClass('downArrowUp');
        $(this).toggleClass('downArrowUp');
        $(this).parent('li').siblings().find('ul').slideUp(250);
        $(this).parent('li').find('ul').slideToggle(250);
    });
    $('.mobProduct').on('click', function(){
        $(this).parent('li').stop().toggleClass('_mPdtActive');
    });
    $('#header .navBar li>a').on('click', function(){
        $(this).parent('li').siblings().removeClass('downArrowUp1');
        $(this).parent('li').toggleClass('downArrowUp1');
        $(this).parent('li').siblings().find('ul.otherdrMenu').slideUp(250);
        $(this).parent('li').find('ul.otherdrMenu').slideToggle(250);
    });
    $('.mobHumberger').on('click', function(){
       $('html').addClass('mobileMenu-open menu-transition'); 
    });
    $('.menuClose').on('click', function(){
       $('html').removeClass('mobileMenu-open');
       setTimeout(function(){
           $('html').removeClass('menu-transition');
       }, 300);
    });
}
/** header **/

/** Header Detach Attahc **/
function detachAttach(){
    var $lastLogin = $(".detach-lastLogin").detach();
    var $btnLogin = $(".detach-loginBtn").detach();
    var $detchUser = $(".detach-username").detach();
    
    var UserDetailData = JSON.parse(window.sessionStorage.getItem('UserDetailsData'));
    var UserLoggedInDetail = JSON.parse(window.sessionStorage.getItem('UserLoggedInDetail'));
    
    if($(window).width() <= 991){
        $(".logouthere").append($lastLogin);
        $(".loginAttacher").append($btnLogin);
        $(".attachUserNameMob").append($detchUser);
        
        if (UserDetailData != null && UserDetailData != "") {
            $(".profIcohide").hide().next(".profIcoactive").css("display","block");
            if (UserDetailData.isguestuser == 1) {
                $('.mobBeforelogin, .guestIco, .logouthere').show();
                $('.mobAfterlogin, .menIco').hide();
            } else {
                $('.mobBeforelogin, .guestIco').hide();
                $('.mobAfterlogin, .menIco').show();
            }
        }else if (UserLoggedInDetail != null && UserLoggedInDetail != "") {
            $(".profIcohide").hide().next(".profIcoactive").css("display","block");
            if (UserLoggedInDetail.isguestuser == 1) {
                $('.mobBeforelogin, .guestIco, .logouthere').show();
                $('.mobAfterlogin, .menIco').hide();
            } else {
                $('.mobBeforelogin, .guestIco').hide();
                $('.mobAfterlogin, .menIco').show();
            }
        }
        else {
            $(".profIcohide").css("display","block").next(".profIcoactive").hide();
            $('.mobBeforelogin, .guestIco').show();
            $('.mobAfterlogin, .menIco, .logouthere').hide();
        }
    }else{
        $(".logoutSec").append($lastLogin);
        $(".logoutSec").append($btnLogin);
        $(".attachUserNameDesk").append($detchUser);
    }
    
}
/** Header Detach Attahc **/


/** input animation **/

function inputFocus() {
    var input = $('.input-block input, .block input');
    input.focus(function () {
     $(this).parent().addClass('focus');
    });
    input.focusout(function () {
        var inputfeild = $(this);
    if($(".datepicker").length >1){
        if ($(".datepicker").datepicker("widget").is(":visible")) {
            setTimeout(function () {
                if ($(".datepicker").datepicker("widget").is(":visible")) {

                } else {
                    if (inputfeild.val() == "") {
                        inputfeild.parent().removeClass('focus');
                    } else {
                        inputfeild.parent().addClass('focus');
                    }
                }
            }, 300)
        } 
}
else if (inputfeild.val() == "") {
            inputfeild.parent().removeClass('focus');
        } else {
            inputfeild.parent().addClass('focus');
        }
      
    });
}

/** input animation **/

/** selectbox js **/
function selectList(){
       $(".selectMain select").selectbox({
         speed: 50,         
         onChange: function (val, inst) {   
            var sgh = $(this).attr('id');           
            $(this).parents('.drp').find('label').css('top','-30px');
            $(this).parents('.selectMain').find('.sbSelector').css('opacity','1');
            $(this).parents('.block').addClass('focus');
        }

     });
}
/** selectbox js **/

function autocompleteBlock(){
$( function() {
    var availableTags = [
      // "ActionScript",
      // "AppleScript",
      // "Asp",
      // "BASIC",
      // "C",
      // "C++",
      // "Clojure",
      // "COBOL",
      // "ColdFusion",
      // "Erlang",
      // "Fortran",
      // "Groovy",
      // "Haskell",
      // "Java",
      // "JavaScript",
      // "Lisp",
      // "Perl",
      // "PHP",
      // "Python",
      // "Ruby",
      // "Scala",
      // "Scheme"
    ];
    $( "#txtCarMakeAndModel" ).autocomplete({
      source: availableTags
    });
  });


$( function() {
    var availableTags = [
      // "ActionScript",
      // "AppleScript",
      // "Asp",
      // "BASIC",
      // "C",
      // "C++",
      // "Clojure",
      // "COBOL",
      // "ColdFusion",
      // "Erlang",
      // "Fortran",
      // "Groovy",
      // "Haskell",
      // "Java",
      // "JavaScript",
      // "Lisp",
      // "Perl",
      // "PHP",
      // "Python",
      // "Ruby",
      // "Scala",
      // "Scheme"
    ];
    $( "#city-reg" ).autocomplete({
      source: availableTags
    });
  });

}



function formBlockslide(){
        //   $('.js-form-proceed').click(function(){
        //   var $par = $(this).parents('.form-slide');
        //   $par.animate({'left':'-100%', opacity:0 }, 300, function(){
        //       $(this).hide(100);
        //       $par.next('.form-slide').show(100, function(){
        //         $par.next('.form-slide').animate({'left':'0', opacity: 1}, 300);
        //       });
        //   });
        // });

        $('.jsGoBack').click(function(e){
         var $par = $(this).parents('.form-slide');
         $par.animate({'left':'100%', opacity:0 }, 200, function(){
            $(this).hide(100);
            $par.prev('.form-slide').show(100, function(){
              $par.prev('.form-slide').animate({'left':'0', opacity: 1}, 200);
            });
         });
         e.preventDefault();
      });


    $('.jsomvBack').click(function(e){
         var $par = $(this).parents('.form-slide');
         $par.animate({'left':'100%', opacity:0 }, 200, function(){
            $(this).hide(100);
            $par.prev('.form-slide').show(100, function(){
              $par.prev('.form-slide').animate({'left':'0', opacity: 1}, 200);
            });
         });
         e.preventDefault();
      });
}






/********************* form validation ***************************/



function ErrorOnFocus(el){
    var $this = el;
    if($this.hasClass('vl-name')){
        if($this.val() == '' || !regName.test($this.val()) || /^\s/.test($this.val())){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('vl-mobile')){
        if(!regMobile.test($this.val())){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('vl-eml')){
        if(!regEmail.test($this.val()) || !/^\S*$/.test($this.val())){
            showError($this);
        }else{
            hideError($this);
        }
    }

    if($this.hasClass('valSelt')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }

}


function showError(el){
  el.parents('.input-block').find('.ui-error').show();
  el.parents('.block').find('.ui-error').show();
  (el).parents('.check-feild').find('.ui-error').show();
}
function hideError(el){
  el.parents('.input-block').find('.ui-error').hide();
  el.parents('.block').find('.ui-error').hide();
  (el).parents('.check-feild').find('.ui-error').hide();
}


function somvform(){
    var valid = true,
    insomvname = $('.vl-somv-name'),
    insoveMobileno = $('.vl-somv-mobile'),
    insoveEmailid = $('.vl-somv-eml'),
    insoveVehicleowner = $('.vl-somv-terms');
    
    if(insomvname.val() == '' || (insomvname.val()).length < 3|| !regName.test(insomvname.val()) || /^\s/.test(insomvname.val())) {
        showError(insomvname);
        valid = false; 
    }

    if(!regMobile.test(insoveMobileno.val())){
        showError(insoveMobileno);
        valid = false; 
    }
    if(!regEmail.test(insoveEmailid.val()) || !/^\S*$/.test(insoveEmailid.val())){
        showError(insoveEmailid);
        valid = false; 
    }

    if(!insoveVehicleowner.is(':checked')){
        showError(insoveVehicleowner);
        valid = false;
    }   

    if(valid){

    }
    return valid;
}



function nofvehicleDtl(){
    var valid = true,
    innofcars = $('.sbSelector'),
    innoftwveh = $('.sbSelector');

    if(innofcars.text() == 'SelectSelect') {
       showError(innofcars);
        valid = false;
    }
    if(innoftwveh.text() == 'SelectSelect') {
       showError(innoftwveh);
        valid = false;
    }
        
    if(valid){
    }
    return valid;
}


function carRegistrationform(){
    var valid = true,
    invehdetail = $('.vl-name'),
    inMobileno = $('.vl-mobile'),
    inEmailid = $('.vl-eml'),
    inankm = $('.sbSelector'),
    inVehicleowner = $('.vl-terms'),
    inAnnualKM = $('#ddlAnnualKilometerUsage');

    if(invehdetail.val() == '' || (invehdetail.val()).length < 3 || !regName.test(invehdetail.val())|| /^\s/.test(invehdetail.val())){
        showError(invehdetail);
        valid = false; 
    }
    if(!regMobile.test(inMobileno.val())){
        showError(inMobileno);
        valid = false; 
    }
    if(!regEmail.test(inEmailid.val()) || !/^\S*$/.test(inEmailid.val())){
        showError(inEmailid);
        valid = false; 
    }
    // if(inankm.val() == 0) {
    //     showError(inankm);
    //     valid = false;
    // }
    if(inankm.text() == 'SelectSelect Year') {
        showError(inankm);
       // inankm.parents('.form-slide1').find('.ui-error').show();
        valid = false;
    }
    if(!inVehicleowner.is(':checked')){
        showError(inVehicleowner);
        valid = false;
    }
    
    if(inAnnualKM.val() == null || inAnnualKM.val() == 0)
    {
        $('.valSelt').children('.ui-error').css("display","block");
        valid = false;
    }else{
        $('.valSelt').children('.ui-error').css("display","none");
    }

    if(valid){

    }
    return valid;
}

function carmakeModelformsomv(){
    var valid = true,
    inmekamodel = $('#ddlnooftw'),
    inyearreg = $('#ddlnooffw');


    if($(inmekamodel).parents('.block').find('.sbSelector').text() == 'Select' || $(inmekamodel).parents('.block').find('.sbSelector').text() == "") {
       showError(inmekamodel);
        //inyearreg.parents('.form-slide2').find('.ui-error').show();
        valid = false;
    }
    if($(inyearreg).parents('.block').find('.sbSelector').text() == 'Select' || $(inyearreg).parents('.block').find('.sbSelector').text() == '') {
       showError(inyearreg);
       $('#ddlnooftw').parents('.sInput').find('.ui-error1').hide();
        //inyearreg.parents('.form-slide2').find('.ui-error').show();
        valid = false;
    }
   
    if(valid){
        var total = parseInt($("#ddlnooftw").parents('.block').find('.sbSelector').text()) + parseInt($("#ddlnooffw").parents('.block').find('.sbSelector').text());
         if( total <= 1 ) {
            $('#ddlnooftw').parents('.sInput').find('.ui-error1').show();
            valid = false;
            } 
            else{                
            $('#ddlnooftw').parents('.sInput').find('.ui-error1').hide();
            }
        } 
    return valid;
}


function carmakeModelform(){
    var valid = true,
    inmekamodel = $('.vl-makemodel'),
    inyearreg = $('#ddlYearPurchase'),
    incityre = $('.vl-cityreg');

    if(inmekamodel.val() == ''){
        showError(inmekamodel);
        inmekamodel.parents('.input-block').find('.ui-error').text("Please enter make & model");
        valid = false; 
    }
    else if(PlanPageObj.VehicleMakeModelCode == "" || PlanPageObj.VehicleMakeModelCode < 1 ){
        showError(inmekamodel);
        inmekamodel.parents('.input-block').find('.ui-error').text("Please enter valid vehicle make name");
        valid = false; 
    }
    if($(inyearreg).parents('.block').find('.sbSelector').text() == 'Select Year' || $(inyearreg).parents('.block').find('.sbSelector').text() == "") {
       showError(inyearreg);
        //inyearreg.parents('.form-slide2').find('.ui-error').show();
        valid = false;
    }
    if(incityre.val() == ''){
        showError(incityre);
        incityre.parents('.input-block').find('.ui-error').text("Please enter city name");
        valid = false; 
    }
    else if(PlanPageObj.RTO_LOCATION_CODE == "" || PlanPageObj.RTO_LOCATION_CODE < 1){
        showError(incityre);
        incityre.parents('.input-block').find('.ui-error').text("Please enter valid city name");
        valid = false; 
    }
    if(valid){

    }
    return valid;
}


function funThankYou(){
    $('.js-required').val('');
    $('.prodSel1').val('');
}

function landingEvents(){


$(document).on('click', '.js-somv-proceed', function() {
    $('.drp').find('.ui-error').hide();
    var $par = $(this).parents('.form-slide');
    if(somvform()){
        //alert('Submitted');
        $par.animate({'left':'-100%', opacity:0 }, 200, function(){
        $(this).hide(100);
        $par.next('.form-slide').show(100, function(){
          $par.next('.form-slide').animate({'left':'0', opacity: 1}, 200);
        });
      });
       }
    });


$(document).on('click', '.js-somv-submit', function() {
    //$('.drp').find('.ui-error').show();
        if (nofvehicleDtl()) {
            //alert('Submitted');
        }
    }); 




$(document).on('click', '.js-form-proceed', function() {
    $('.drp').find('.ui-error').hide();
    var $par = $(this).parents('.form-slide');
    if(carRegistrationform()){
        //alert('Submitted');
        $par.animate({'left':'-100%', opacity:0 }, 200, function(){
        $(this).hide(100);
        $par.next('.form-slide').show(100, function(){
          $par.next('.form-slide').animate({'left':'0', opacity: 1}, 200);
        });
      });
       }
    });

/*$(document).on('click', '.js-form-submit', function() {
    $('.drp').find('.ui-error').hide();
        if (carmakeModelform()) {
            // $('.js-required').val('');
            // $('.prodSel1').val('');
        $('#thankyou-block').addClass("active");
        }
        else{
            return false;
        }
    }); 

$(document).on('click', '#btnFormSubmitSomv', function() {
    $('.drp').find('.ui-error').hide();
        if (carmakeModelformsomv()) {
            // $('.js-required').val('');
            // $('.prodSel1').val('');
        $('#thankyou-block').addClass("active");
        }
        else{
            return false;
        }
    }); 
*/

    
    
  $('.form-slide select').on('keypress change paste', function(){
    $(this).parents('.block').find('.ui-error').hide();
  });



$('.check-feild .input-check').click(function () {
    $(this).parents('.check-feild').find('.ui-error').hide();
 })

$('.js-required').on('focusout', function(){
        ErrorOnFocus($(this));
});

$('.js-required').on('keypress change', function(){
        hideError($(this)); 
});

  $('.form-slide .sbOptions li').on('click', function(){
    $(this).parents('.block').find('.ui-error').hide();
  });




}


/********************* form validation ***************************/


function tabs() {
    $(document).on('click', '.js-tab-head li', function (event) {
        event.preventDefault();
        var currtab, barcurrindex, tabParent, tabcontent;

        currtab = $(this);
        bar = $(currtab).siblings('.bar');
        currindex = currtab.index();
        tabParent = $(this).parents('.js-tab-wrap');
        tabcontent = $(tabParent).find('.tab-content-body .tab-content')

        if (!currtab.hasClass('active')) {
            currtab.addClass('active').siblings().removeClass('active');
            tabcontent.removeClass('active');
            tabcontent.eq(currindex).addClass('active')
            var left = currtab.position().left
            bar.animate({ left: left }, 500, function () { });
        }

        

    });

$('#PayAsYouUse').on('click', function(){
    $(this).parents('.banner-bg').removeClass('pay-hydbanner', '100');
    $(this).parents('.banner-bg').removeClass('single-omvbanner', '100');
    $(this).parents('.banner-bg').find('.payhowyouDrive').hide();
    $(this).parents('.banner-bg').find('.singleownerMveh').hide();
    $(this).parents('.banner-bg').find('.payasyouUse').show();
    $('.payhowyoublock').hide();
    $('.singleownerblock').hide();
    $('.payasyoublock').show();
});

$('#PayHowYouDrive').on('click', function(){
    $(this).parents('.banner-bg').addClass('pay-hydbanner', '300');
    $(this).parents('.banner-bg').removeClass('single-omvbanner', '100');
    $(this).parents('.banner-bg').find('.singleownerMveh').hide();
    $(this).parents('.banner-bg').find('.payasyouUse').hide();
    $(this).parents('.banner-bg').find('.payhowyouDrive').show();
    $('.payhowyoublock').show();
    $('.singleownerblock').hide();
    $('.payasyoublock').hide();
});

$('#SingleOwnerMultipleVehicle').on('click', function(){
    $(this).parents('.banner-bg').addClass('single-omvbanner');
    $(this).parents('.banner-bg').removeClass('pay-hydbanner');
    $(this).parents('.banner-bg').find('.payhowyouDrive').hide();
    $(this).parents('.banner-bg').find('.payasyouUse').hide();
    $(this).parents('.banner-bg').find('.singleownerMveh').show();
    $('.singleownerblock').show();
    $('.payasyoublock').hide();
    $('.payhowyoublock').hide();
});

}