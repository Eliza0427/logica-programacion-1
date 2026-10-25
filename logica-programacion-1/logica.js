let numeros =[];
for(let i=0 ; i<3; i++){  //mi ciclo ya está indicando que se va a repeir 3 veces con i<3
    let numero = Number(prompt("Ingresa un número número: ") );
   numeros.push(numero); //Aqui se da la instrucción para que los guarde.
}


if (numeros[0]===numeros[1] && numeros[1]===numeros[2]) {
   console.log("Los tres números son iguales")
     
}

else if(
    numeros[0] === numeros[1] ||
    numeros[0] === numeros[2] ||
    numeros[1] === numeros[2]
){
  console.log("Hay dos nímeor iguales");  
  

}
   numeros.sort((a,b) => a-b);
   let menor =numeros[0];
   let centro = numeros[1];
   let mayor = numeros[2]; 


 console.log(menor);
 console.log(centro);
 console.log(mayor);

console.log("numeros de menor a mayor:", numeros);
console.log("numeros de mayor a menor", [...numeros].reverse());


document.getElementById("menor").textContent =
    menor;

document.getElementById("centro").textContent =
    centro;

document.getElementById("mayor").textContent =
   //Esto puede ponerse si quiero que aparezca la etiqueta (Numero mayor; + numeor;)
   mayor;

document.getElementById("invertido").textContent=
[...numeros].reverse().join(",");