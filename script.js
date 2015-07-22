/*
  Prototypal inheritance
  =========================

  A basic animal object
*/
function Animal () {
  this.family = "animal";
  console.log(this);
}

/*
  Explain why just calling Animal()
  here causes the console.log(this)
  above to output the Window object.
 */
Animal();

/*
  So now we create a new Animal object
  and then afterwards, JavaScript lets
  you add another property.
 */
var salamander = new Animal();
salamander.property = "slimy";
console.log('salamander',salamander);

/*
  Create another animal object and give
  it the same property, but with a different
  value.

  Notice that the properties show when we
  log the new objects we created, but not
  on the Animal object itself. It shows
  that we are creating new instances of
  the Animal function, not sharing it between
  salamander and kangaroo.
 */
var kangaroo = new Animal();
kangaroo.property = "jumpy";
console.log('kangaroo', kangaroo);

/*
  Now prototypes. We declare a new function
  and set its prototype to Animal. This
  will combine species (which is set on
  this object) and the family property
  (which is set on the prototype) and
  puts them both on Doge
 */
function Doge () {
  this.species = "Doge";
}
Doge.prototype = new Animal();

/*
  View the output of the console log below
  and make sure you expand the __proto__ object
  on it to see that family is inherited from
  the prototype.
 */
var doge = new Doge();
console.log('doge',doge);


/*
  More inheritance. We set the prototype of
  the Angus function to Doge.

  Angus inherits from Doge which inherits from Animal
 */
function Angus () {
  this.name = "Angus";
}
Angus.prototype = new Doge();

var angus = new Angus();
console.log('angus',angus);

// This explicitly show 
console.log('angus',angus.family, angus.species, angus.name);

