//Класс Classroom +
function Classroom() {

  this.students = [];
  this.parents = [];
};
//метод addStudent(добавить)
  Classroom.prototype.addStudent = function(student) {

    this.students.push(student);
  };
//метод removeStudent(удалить)
  Classroom.prototype.removeStudent = function(student) {
 for (var i = 0; i < this.students.length; i++) {

   if (this.students[i] == student) {

    for (i = 0; i < this.students.length; i++) {

      this.students[i] = this.students[i+1];
    }
    students.pop();
    }
  }
};

//Класс People +
function People(name, surname, gender) { 

  this.name = name;
  this.surname = surname;
  this.gender = gender;
  this._nationality = "UK";
};
//Метод changegetNationality
  People.prototype.changeNationality = function(nationality) {
    
    if (!this.nationality) {

      return this._nationality;
    }
  };
//Метод sayMyName
  People.prototype.sayMyName = function(name) {
    self = this;
    this.name = name;

    if (self.name = 'male') {

      return('Mr.' + self.name);
    }
    else if (self.name = 'female') {

      return('Mrs.' + self.name);
    }
  };
//Класс Student +
  function Student(name, sername, gender, subjects) {

    this.People.apply(this, arguments);
    subjects = [];
  };

 Student.prototype.addSubject = function(subject) {
  this.subjects.push(subject);
 };

 Student.prototype.removeSubject = function(subjtct) {
  for (var i = 0; i < subjects.length; i++) {
    if(subjects[i] == subjects) {
      for(i = 0; i < subjects.length; i++) {
        subjects[i] = subject[i+1];
      }
      subjects.pop();
    }
  }
 };

//наследование и конструктор Student
Student.prototype = Object.create(People.prototype);
Student.prototype.constructor = Student;

//Класс Parent + 
function Parent(name, surname, gender, rigor) {

  People.apply(this, arguments);
  this.rigor = rigor;
};

//наследование и конструктор Parent 
Parent.prototype = Object.create(People.prototype);
Parent.prototype.constructor = Parent;

