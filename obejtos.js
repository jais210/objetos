// Ejercicio Uno
function Rectangulo(base,altura)
{
  this.base = base;
  this.altura = altura;
};

var miRectangulo = new Rectangulo(45,30);

var areaRectangulo = miRectangulo.base * miRectangulo.altura;

console.log(areaRectangulo);

// Ejercicio Dos

function Datos (nombre, dia, mes, anio)
{
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
}
var edad = new Datos ("Fátima", 23, 8, 1991);
var dia = edad.dia;
var mes = edad.mes;
var anio = edad.anio;
var anioActual = 2017;

var edadActual = function (dia, mes, anio)
{ 
  if (dia <= 23 && mes <= 6)
  {
    return anioActual - anio;
  }  else {
      return anioActual- (anio + 1);
    }
     
  }
   
console.log(edadActual(28,8,1991));

//ejercicio Tres

function Constructor (nombre,edad,pasatiempo)
{
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}

var miConstructor = new Constructor ("Juan", 24, "jugar futbol");

var mensaje = "Hola soy " + miConstructor.nombre + ", "+ "tengo " + miConstructor.edad + " " + "años, y me gusta " + miConstructor.pasatiempo;
console.log(mensaje);