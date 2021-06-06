const evaluar = () => {
  const edad = prompt("Ingrese su edad");
  const numero = parseInt(edad);
  if (numero >= 18) {
    alert("Usted es mayor de edad");
  }
};

evaluar();

const comparar = () => {
  const edad1 = prompt("Ingrese su edad");
  const edad2 = prompt("Ingrese su edad");
  const edad3 = prompt("Ingrese su edad");
  const numero1 = parseInt(edad1);
  const numero2 = parseInt(edad2);
  const numero3 = parseInt(edad3);
  if (numero1 > numero2 && numero1 > numero3) {
    alert("El mayor es " + numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    alert("El mayor es " + numero2);
  } else {
    alert("El mayor es " + numero3);
  }
};
comparar();
