/*Importación de clases*/
import {Cliente} from './Cuentas/Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Gerente } from './Empleados/Gerente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//------------------------------Definir Cliente------------------------------------//
const cliente = new Cliente('Marcello','13804050','123224');
const cliente2 = new Cliente('Yexenia','16979808','8989');

//------------------------------Definir Cuenta Corriente-----------------------------------------//
const cuentaCorrienteMarcello = new CuentaCorriente('Corriente', cliente, '1', '001');
const cuentaCorrienteYexenia = new CuentaCorriente('Corriente', cliente2,'2','002');

//-------------------------------Definir Cuenta de Ahorro-----------------------------------------//
const cuentaDeAhorroMarcello = new CuentaAhorro(cliente, '763008849', 'Lima', 0);
const cuentaDeAhorroYexenia = new CuentaAhorro(cliente2, '763008843', 'Lima', 0);

//-------------------------------Definir Cuenta Nomina-----------------------------------------//
const cuentaNominaMarcello = new CuentaNomina(cliente, '763008849', 'Lima', 0)

//-------------------------------Definir Empleado Gerente-----------------------------------------//
const gerente = new Gerente('Marcello', '76300884', 15000);
const empleado = new Empleado('empleado', '87544556', 10000);
empleado.asignarClave('12345');
const director = new Director('Director', '765447887', 12000);

//-------------------------------Sistema de Autenticación-----------------------------------------//
// cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'));
console.log(SistemaAutenticacion.login(empleado, '12345'));



//----------------------------------Zona de Pruebas------------------------------------------------//
// console.log(gerente.verBono());
// console.log(empleado.verBono());
// console.log(director.verBono());


// cuentaNominaMarcello.depositoEnCuenta(300);
// console.log(cuentaNominaMarcello.verSaldo());
// cuentaNominaMarcello.retirarDeCuenta(100);
// console.log(cuentaNominaMarcello.verSaldo());
// console.log(cuentaCorrienteMarcello);
// console.log(cuentaCorrienteMarcello.verSaldo());
// cuentaCorrienteMarcello.depositoEnCuenta(100);
// console.log(cuentaCorrienteMarcello.verSaldo());
// cuentaCorrienteMarcello.retirarDeCuenta(20);
// console.log(cuentaCorrienteMarcello.verSaldo());

// console.log(cuentaDeAhorroYexenia);
// console.log(cuentaDeAhorroYexenia.verSaldo());
// cuentaDeAhorroYexenia.depositoEnCuenta(100);
// console.log(cuentaDeAhorroYexenia.verSaldo());
// cuentaDeAhorroYexenia.retirarDeCuenta(20);
// console.log(cuentaDeAhorroYexenia.verSaldo());