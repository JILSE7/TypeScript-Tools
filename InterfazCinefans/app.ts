interface Service{
    //Metodos
    Renew():void;
    Login():void;
    Cancel():void;
}



class NewFlix implements Service{
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

class Camaron implements Service{
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


class OBH implements Service{
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

const service = <HTMLSelectElement> document.getElementById('service');
const operation = <HTMLSelectElement> document.getElementById('operation');

let selectedService:Service;


service.addEventListener('change', function(){
    switch (service.value) {
        case '1':
                selectedService = new NewFlix()
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

enum ServiceType {
    Renew,
    Login,
    Cancel
}

let currentOPeration: ServiceType;

operation.addEventListener('change', function(){
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


button?.addEventListener('click', () => {
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
})