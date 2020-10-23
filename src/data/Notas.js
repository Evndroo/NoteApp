export default class Notas{

    _localStoragePropertie = "notas";

    constructor(){
        this.notas = [];
        this.notasFiltradas = [];
        this.filtroNotas = "";
        this._inscritos = [];

        if(localStorage.getItem(this._localStoragePropertie)){
            this.notas = JSON.parse(localStorage.getItem(this._localStoragePropertie))
            this.notasFiltradas = this.notas
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
        this._inscritos.forEach(func=> func(this.notasFiltradas))
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota);
        if(this.filtroNotas === categoria){
            this.notasFiltradas.push(novaNota)
        }

        if(!this.filtroNotas){
            this.notasFiltradas = this.notas
        }

        this.notificar();
    }

    filtrarNotas(filtro){
        this.filtroNotas = filtro
        if(filtro){
            this.notasFiltradas = this.notas.filter(nota=> nota.categoria === filtro)
        }else{
            if(this.notasFiltradas.length !== this.notas.length){
                this.notasFiltradas = this.notas;
            }
        }

        this.notificar()
    }

    deletarNota(index){
        if(this.filtroNotas !== ""){
            const nota = this.notasFiltradas[index];
            const notasNovas = this.notas.filter(item=>{
                return item.categoria !== nota.categoria ||
                        item.titulo !== nota.titulo || 
                        item.texto !== nota.texto
            })
            const notasFiltradasNovas = this.notasFiltradas.filter(item=>{
                return item.categoria !== nota.categoria ||
                        item.titulo !== nota.titulo || 
                        item.texto !== nota.texto
            })
            this.notas = notasNovas;
            this.notasFiltradas = notasFiltradasNovas
        }else{
            const nota = this.notas[index];
            const filtrado = this.notas.filter(item=>{
                return item.categoria !== nota.categoria ||
                        item.titulo !== nota.titulo || 
                        item.texto !== nota.texto
            })
            this.notas = filtrado
            this.notasFiltradas = this.notas
        }
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