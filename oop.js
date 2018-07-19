
//

/*
Реализуйте класс Student (Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
 Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
 */

function User(name, surname){

    var name=name;
    this.surname=surname;
    this.getFullName=function(){
        console.log(name + ' ' +this.surname);
    }
}

function Student(name, surname, year) {
    User.apply(this, arguments);
    this.year = year;

        this.getCourse=function(){
            var data = new Date();
            return data.getFullYear() - this.year;
    }
}

var firststudent= new Student('Иван', 'Петров', 2015);
console.log(firststudent.name);//не доступен, т.к name- приватное свойство
console.log(firststudent.surname);
console.log(firststudent.getFullName());//все переменные внутри данной функции являються открытыми, вне функции name - закрыто
console.log(firststudent.getCourse());
