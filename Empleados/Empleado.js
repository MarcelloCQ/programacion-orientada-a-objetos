export class Empleado {
  #nombre;
  #dni;
  #salario;
  #clave;

  constructor(nombre, dni, salario, clave) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = '';
  }

  asignarClave(clave) {
    this.#clave = clave;
    return this.#clave;
  }

  autenticable(clave) {
    return clave === this.#clave;
  }

  verBono() {
    return this.#salario;
  }

  _verBono(bono) {
    return this.#salario + this.#salario * bono / 100;
  }
}