"use strict";
class NewFlix {
    Renew() {
        console.log('Renew NewFlix');
    }
    Login() {
        console.log('Login NewFlix');
    }
    Cancel() {
        console.log('Cancel NewFlix');
    }
}
class Camaron {
    Renew() {
        console.log('Renew Camaron');
    }
    Login() {
        console.log('Login Camaron');
    }
    Cancel() {
        console.log('Cancel Camaron');
    }
}
class OBH {
    Renew() {
        console.log('Renew OBH');
    }
    Login() {
        console.log('Login OBH');
    }
    Cancel() {
        console.log('Cancel OBH');
    }
}
const button = document.getElementById('btn');
console.log(button);
const service = document.getElementById('service');
const operation = document.getElementById('operation');
let selectedService;
service.addEventListener('change', function () {
    switch (service.value) {
        case '1':
            selectedService = new NewFlix();
            break;
        case '2':
            selectedService = new Camaron();
            break;
        case '3':
            selectedService = new OBH();
            break;
        default:
            break;
    }
});
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["Renew"] = 0] = "Renew";
    ServiceType[ServiceType["Login"] = 1] = "Login";
    ServiceType[ServiceType["Cancel"] = 2] = "Cancel";
})(ServiceType || (ServiceType = {}));
let currentOPeration;
operation.addEventListener('change', function () {
    switch (operation.value) {
        case '1':
            currentOPeration = ServiceType.Renew;
            break;
        case '2':
            currentOPeration = ServiceType.Login;
            break;
        case '3':
            currentOPeration = ServiceType.Cancel;
            break;
        default:
            break;
    }
});
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    switch (currentOPeration) {
        case ServiceType.Renew:
            selectedService.Renew();
            break;
        case ServiceType.Login:
            selectedService.Login();
            break;
        case ServiceType.Cancel:
            selectedService.Cancel();
            break;
        default:
            break;
    }
});
