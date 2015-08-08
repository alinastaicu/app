var rentCheckbox = document.querySelector('#rent');
var rentOptionsDiv = document.querySelector('#rent_options');
var maritalStatusSelect = document.querySelector('#marital_status');
var professionPartenerDiv = document.querySelector('#profession_partener');
var checkboxPrivat = document.querySelector('#privat');
var checkboxJob = document.querySelector('#job');
var checkboxTransport = document.querySelector('#transport');
var checkboxHome = document.querySelector('#home');
var selectTypeJob = document.querySelector('#job_type');
var selectTypePartener = document.querySelector('#job_type_partener');
var selectRentNoProperties = document.querySelector('#rent_no_properties');
var selectRentIncome = document.querySelector('#rent_income');
var buttoneCompare = document.querySelector('#compare');


rentCheckbox.addEventListener('change', function() {
  if (rentCheckbox.checked) {
    rentOptionsDiv.classList.remove('hide');
  } else {
    rentOptionsDiv.classList.add('hide');
  }
});

maritalStatusSelect.addEventListener('change', function() {
  if (maritalStatusSelect.value == '1' || maritalStatusSelect.value == '2') {
    professionPartenerDiv.classList.add('hide');
  } else {
    professionPartenerDiv.classList.remove('hide');
  }
});

buttoneCompare.addEventListener('click', function() {
  var url = [
    'b2BAdPartner=ch24_v_go_co_re',
    'b2BPartner=ch24_google',
    'businessNumberOfEmployees=0',
    'employmentStatus=' + selectTypeJob.value,
    'familyStatus=' + maritalStatusSelect.value,
    'featureMode=list',
    'insuredPersonBirthdate=1980-07-24T22:00:00.000Z',
    'maxContractPeriodYears=1',
    'maxInsuranceSelfParticipation=150',
    'minInsuranceCoverage=300000',
    'numberOfPropertiesRentedOut=' + selectRentNoProperties.value,
    'paymentPeriod=4',
    'wantsBusiness=false',
    'wantsOccupation=' + checkboxJob.checked,
    'wantsPrivate=' + checkboxPrivat.checked,
    'wantsRent=' + rentCheckbox.checked,
    'wantsResidence=' + checkboxHome.checked,
    'wantsTraffic=' + checkboxTransport.checked,
    'yearlyGrossRentingIncome=' + selectRentIncome.value
  ].join('&');

  url = 'http://localhost:4000/tariffs?' + url;

  var ajaxParam = {
    url: url,
  };
  $.ajax(ajaxParam).done(function(data) {
    debugger;
  }).fail(function(data) {
    debugger;
  });

});

function getData(param) {
  var para = document.createElement('div');
  var t = document.createTextNode(param.firstName + ' ' + param.lastName);
  para.appendChild(t)
  return para;
}

var pip = {
  firstName: 'John',
  lastName: 'Doe'
};

document.querySelector('body').appendChild(getData(pip));
