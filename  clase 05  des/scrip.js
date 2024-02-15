/*
class Gafete {
    //constructor publico
    constructor(nombre, fechanac, departamento, telefono, anio){
        this.nombre = nombre;
        this.fechanac = fechanac;
        this.departamento = departamento;
        this.telefono = telefono
        this.anio = anio
    }

    edad(){
        let edad = this.anio - this.fechanac
        return edad;
    }

    //Destructor de constructor
    //~Destroy()
    informacion(){
        return `${this.nombre} + ${this.departamento} + ${this.telefono}`
    }
}

nombre =  prompt('Digite su nombre')
fechanac = prompt('Digite su año de nacimiento')
Departamento =  prompt('departamento donde vive')
telefono =  prompt('Digite su telefono')


let persona1 = new Gafete(nombre, fechanac, Departamento, telefono, 2024)
document.getElementById('nombre').innerHTML = persona1.nombre
document.getElementById('edad').innerHTML = persona1.edad()
document.getElementById('departamento').innerHTML = persona1.departamento
document.getElementById('telefono').innerHTML = persona1.telefono
persona1.informacion();
*/


// //ejercicio 3
// class IMC{
//     constructor(peso, altura){
//         this.peso = peso
//         this.altura = altura
//     }

//     calcular(){
//         let IMC = this.peso / (this.altura * this.altura)
//         return IMC
//     }
// }
// function CalcularIMC(){
//     let pesoKG = parseFloat(document.getElementById('pesokg').value)
//     let alturaMetros = parseFloat(document.getElementById('alturam').value)

//     let Indice = new IMC (pesoKG, alturaMetros)
//     let resultado = Indice.calcular().toFixed(2)
//     alert(resultado)
// }


//ejercicio 4
// class Datos{
//     constructor(nombre, dui, telefono){
//         this.nombre= nombre
//         this.dui = dui
//         this.telefono = telefono
//     }
//     verdatos(){
//         return`$(thi.nombre) $(thi.dui) $(thi.telefono)`
//     }
// }

// class Empresa{
//     constructor(empresa, puesto, salario){
//         this.empresa= empresa
//         this.puesto = puesto
//         this.salario = salario
//     }
//     verdatosempresa(){
//         return`$(thi.empresa) $(thi.puesto) $(thi.salario)`

//     }
// }

// function Obtenerdata(){
//     let  nombre = document.getElementById('nombre').value
//     let  dui =document.getElementById('dui').value
//     let  telefono = document.getElementById('telefono').value
//     let  empresa = document.getElementById('empresa').value
//     let  puesto = document.getElementById('puesto').value
//     let  salario = document.getElementById('salario').value

//     infoEmpleado = new Datos(nombre, dui, telefono)
//     infoEmpresa = new Empresa(empresa, puesto, salario)
//     infoEmpleado.verdatos()
//     infoEmpresa.verdatosempresa()

//     document.getElementById('conteniendoDatos').innerHTML = 
//     '<table border="1">'+
//     '<tr>'+
//     '<th>Nombre</th>'+
//     '<th>Dui</th>'+
//     '<th>Telefono</th>'+
//     '<th>Empresa</th>'+
//     '<th>Puesto</th>'+
//     '<th>Salario ($)</th>'+
//     '</tr>'+
//     '<tr>'+
//     '<td>label id = "nom"</label></td>'+
//     '<td>label id = "d"</label></td>'+
//     '<td>label id = "t"</label></td>'+
//     '<td>label id = "e"</label></td>'+
//     '<td>label id = "p"</label></td>'+
//     '<td>label id = "s"</label></td>'+
//     '</tr>'+
//     '</table>';

//     document.getElementById('nom').innerHTML= infoEmpleado.nombre;
//     document.getElementById('d').innerHTML= infoEmpleado.dui;
//     document.getElementById('t').innerHTML= infoEmpleado.telefono;

//     document.getElementById('e').innerHTML= infoEmpresa.empresa;
//     document.getElementById('p').innerHTML= infoEmpresa.puesto;
//     document.getElementById('s').innerHTML= infoEmpresa.salario;
// }