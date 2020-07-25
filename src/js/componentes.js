import '../css/componentes.css';

export const saludo = function(nombre){
    console.log('Creando elemento H1')
    const etiqueta = document.createElement('h1');
    etiqueta.innerText = `Hola ${nombre}`;
    document.body.append(etiqueta);
}
