let cant = prompt("Ingrese la cantidad de alumnos que desee cargar")

cant++ 

for(let i=1 ; i < cant ; i++) {
    let Nota = prompt ("Ingrese la nota del alumno " + i )
    if (Nota > 6) 
    {
        alert ("El alumno" +i+ "esta aprobado") 
    }
    else
    {
        alert ("El alumno" +i+ "esta desaprobado") 
    }

}




