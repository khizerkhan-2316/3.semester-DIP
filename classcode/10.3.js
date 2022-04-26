// associering gruppe 0..* og person 0..1
// Da en person kun være tilmeldt en gruppe af gangen skal den gamle forbindelse brydes, hvis den eksisterer i addPerson fra group f.eks og i setGroup(group)

class Person {
  #name;
  #age;
  #education;
  #group;

  constructor(name, age, education) {
    this.#name = name;
    this.#age = age;
    this.#education = education;
    this.#group = null;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setAge(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setEducation(education) {
    this.#education = education;
  }

  getEducation() {
    return this.#education;
  }

  setGroup(group) {
    if (!(this.#group === group)) {
      if (!(this.#group == null)) {
        this.#group.removePerson(this);
      }
      this.#group = group;
      if (group != null) {
        group.addPerson(this);
      }
    }
  }

  getGroup() {
    return this.#group;
  }

  toString() {
    return [
      'name: ' + this.#name,
      'age: ' + this.#age,
      'Education: ' + this.#education,
    ];
  }
}

class Group {
  #name;
  #members;
  #slogan;
  #persons;

  constructor(name, slogan) {
    this.#name = name;
    this.#members = 0;
    this.#slogan = slogan;
    this.#persons = [];
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  #incrementMembers() {
    this.#members++;
  }

  #decrementMembers() {
    this.#members--;
  }

  getMembersCount() {
    return this.#members;
  }

  setSlogan(slogan) {
    this.#slogan = slogan;
  }

  getSlogan() {
    return this.#slogan;
  }

  addPerson(person) {
    if (!this.#persons.includes(person)) {
      this.#persons.push(person);
      person.setGroup(this);
      this.#incrementMembers();
    }
  }

  removePerson(person) {
    if (this.#persons.includes(person)) {
      this.#persons = this.#persons.filter((p) => p !== person);
      person.setGroup(null);
      this.#decrementMembers();
    }
  }

  getPersons() {
    return this.#persons;
  }

  toString() {
    return [
      'Name: ' + this.#name,
      'Members: ' + this.#members,
      'Slogan: ' + this.#slogan,
    ];
  }
}

const group = new Group('Gruppe 1', 'Vi kører');

const person = new Person('Anders', 18, 'Datamatikeren');

const person1 = new Person('test', 24, 'dsdsd');

const group2 = new Group('Gruppe 2', 'kdskds');

group.addPerson(person1);
group.addPerson(person);

console.log(group.getPersons());
console.log(group2.getPersons());

person.setGroup(group2);
person1.setGroup(group2);

console.log(group.getPersons());
console.log(group2.getPersons());
