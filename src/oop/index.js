export class Customer{
    constructor(id,customerNumber){
        this.id= id;
        this.customerNumber=customerNumber;
    }
}

//protoryping 
//instancin idsi = constructordan gelen id
//instance-in CustomerNumberi = costructoran gelen customerNumber
let customer = new Customer(1,"12345")
customer.name="Faruk"
console.log(customer.name)