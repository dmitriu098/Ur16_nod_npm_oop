/*
Реализовать работу холодильника с помощю ООП.
 */

//через функциональное ООП

function Fridge(product, power){
    //свойства холодильника
    /*
    производитель, объем, количество камер хранения, потребляемая мощность и т.п., и
    методы: открыть/закрыть холодильник, включить/выключить.
     */

    this.product = product;
    this.power=power;
    var amount=0;

    var status=false;

    this.start=function(){
        if(!status){
            alert('Холодильник включен');
        }
        else{
            alert('Холодильник выключен');
        }
    }

    this.open_close =function(){

    }


}

var myfridge=new Fridge('samsung', 500);

