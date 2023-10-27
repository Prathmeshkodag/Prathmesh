$(document).ready(function () {

	function getInsuranceType() {
		if ($('#PayAsYouUse1').hasClass('active')) {
			return "Pay As You Use";
		}
		else if ($('#PayHowYouDrive1').hasClass('active')) {
			return "Pay How You Drive";
		}
		else if ($('#SingleOwnerMultipleVehicle1').hasClass('active')) {
			return "Single Owner Multiple Vehicle";
		}
	}

	$('.js-form-submit').click(function () {

		var emailFilter = /^(([^|\\<>/()\[\]\,;:\s@\"]+(\[^<>()\[\]\,;:\s@\"])*)|(\"\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^0-9<>/()[\]\.,;:\s@\"]{2,4})$/;
		var emailFilterTwo = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-]{2,9})+\.)+([a-zA-Z0-9]{2,4})+$/;

		var Name = null;
		var MobileNo = null;
		var Email = null;
		var AnnualKilometerUsage = null;
		var MakeModel = null;
		var MakeCode = null;
		var ModelCode = null;
		var RegistrationYear = null;
		var RegistrationCity = null;
		var RTOCode = null;
		var InsuranceType = null;
		var ckb_status = false;
		var MakeModelCode = null;
		var NumberOfCars = null;
		var NumberOfTwoWheeler = null;

		Name = $('#txtFullname').val();
		MobileNo = $('#txtMobileno').val();
		Email = $('#txtEmail').val();
		AnnualKilometerUsage = $('#ddlAnnualKilometerUsage').val();
		MakeModel = $('#txtCarMakeAndModel').val();
		MakeModelCode = localStorage.getItem('CarMakeModelCode');
		MakeCode = MakeModelCode.substr(0, MakeModelCode.indexOf(','));
		ModelCode = MakeModelCode.substr(MakeModelCode.indexOf(',') + 1);
		RegistrationYear = $('#ddlYearPurchase').val();
		RegistrationCity = $('#txtCityRegistration').val();
		RTOCode = localStorage.getItem('CityRegistration');
		InsuranceType = getInsuranceType();
		NumberOfCars = $('#ddlnooffw').val();
		NumberOfTwoWheeler = $('#ddlnooftw').val();

		var SandboxMotorRequest = {};
		SandboxMotorRequest.Name = Name;
		SandboxMotorRequest.MobileNo = MobileNo;
		SandboxMotorRequest.Email = Email;
		SandboxMotorRequest.AnnualKilometerUsage = AnnualKilometerUsage;
		SandboxMotorRequest.MakeModel = MakeModel;
		SandboxMotorRequest.MakeCode = MakeCode;
		SandboxMotorRequest.ModelCode = ModelCode;
		SandboxMotorRequest.RegistrationYear = RegistrationYear;
		SandboxMotorRequest.RegistrationCity = RegistrationCity;
		SandboxMotorRequest.RTOCode = RTOCode;
		SandboxMotorRequest.InsuranceType = InsuranceType;
		SandboxMotorRequest.NumberOfCars = NumberOfCars;
		SandboxMotorRequest.NumberOfTwoWheeler = NumberOfTwoWheeler;

		ckb_status = $('#tc-main').prop('checked');

		if (ckb_status == true) {

			MasterServices.SaveSanboxMotorLead(SandboxMotorRequest).then(function (response) {
				if (response != null && response.success == true) {
					$('#thankyou-block').addClass("active")
					$('input').val("");
					$('#tc-main').prop('checked', false);
					$('.jsGoBack').click();
				}
				else {
					console.log(response.errorMessage);
				}
			}).catch(function (ex) {
				console.log(ex);
			});
		}
	});

	function showError(el) {
		el.children('.ui-error').css("display", "block");
	}

	function hideError(el) {
		el.children('.ui-error').css("display", "none");
	}

	function hideError1() {
		$('.ui-error1').css("display", "none");
	}

	document.getElementById("ddlnooffw").addEventListener("change", hideError1);
	document.getElementById("ddlnooftw").addEventListener("change", hideError1);

	function resetSelect() {
		document.getElementById("ddlnooffw").selectedIndex = "0";
		document.getElementById("ddlnooftw").selectedIndex = "0";
	}

	function ValidateVehicalUI() {

		var innoFW = $('#ddlnooffw');
		var innoTW = $('#ddlnooftw');

		if (innoFW.val() == '' || innoFW.val() == 'Select' || innoFW.val() == null) {
			showError($('#numberCars'));
		}
		else {
			hideError($('#numberCars'));
		}

		if (innoTW.val() == '' || innoTW.val() == 'Select' || innoTW.val() == null) {
			showError($('#numberTwo'));
		}
		else {
			hideError($('#numberTwo'));
		}

		if (parseInt(innoFW.val()) >= 0 && parseInt(innoTW.val()) >= 0) {
			if (parseInt(innoFW.val()) + parseInt(innoTW.val()) < 2) {
				$('.ui-error1').css("display", "inline");
			}
		}
	}

	$('#btnFormSubmitSomv').click(function () {
		ValidateVehicalUI();
		var Name = null;
		var MobileNo = null;
		var Email = null;
		var InsuranceType = null;
		var ckb_status = false;
		var NumberOfCars = null;
		var NumberOfTwoWheeler = null;
		let TotalNumberOfVehicals = null;

		Name = $('#txtFullname').val();
		MobileNo = $('#txtMobileno').val();
		Email = $('#txtEmail').val();
		InsuranceType = getInsuranceType();
		NumberOfCars = $('#ddlnooffw').val();
		NumberOfTwoWheeler = $('#ddlnooftw').val();
		TotalNumberOfVehicals = parseInt(NumberOfCars) + parseInt(NumberOfTwoWheeler);

		var SandboxMotorRequest = {};
		SandboxMotorRequest.Name = Name;
		SandboxMotorRequest.MobileNo = MobileNo;
		SandboxMotorRequest.Email = Email;
		SandboxMotorRequest.InsuranceType = InsuranceType;
		SandboxMotorRequest.NumberOfCars = NumberOfCars;
		SandboxMotorRequest.NumberOfTwoWheeler = NumberOfTwoWheeler;

		ckb_status = $('#tc-somv').prop('checked');

		if (ckb_status == true && TotalNumberOfVehicals >= 2) {

			MasterServices.SaveSanboxMotorLead(SandboxMotorRequest).then(function (response) {
				if (response != null && response.success == true) {
					$('#thankyou-block').addClass("active")
					$('input').val("");
					resetSelect();
					$('#tc-somv').prop('checked', false);
					$('.jsomvBack').click();
				}
				else {
					console.log(response.errorMessage);
				}
			}).catch(function (ex) {
				console.log(ex);
			});
		}
	});
});