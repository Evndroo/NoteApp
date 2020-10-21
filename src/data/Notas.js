export default class Notas{

    _localStoragePropertie = "notas";

    constructor(){
        this.notas = [];
        this._inscritos = [];

        if(localStorage.getItem(this._localStoragePropertie)){
            this.notas = JSON.parse(localStorage.getItem(this._localStoragePropertie))
        }
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(item => item !== func)
    }

    notificar(){
        localStorage.setItem(this._localStoragePropertie, JSON.stringify(this.notas));
        this._inscritos.forEach(func=> func(this.notas))
    }

    adicionarNota(titulo, texto, categoria){
        this.notas.push(new Nota(titulo, texto, categoria));
        this.notificar();
    }

    deletarNota(index){
        this.notas.splice(index,1);
        this.notificar();
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}