export default class Categorias{

    _localStoragePropertie = "categorias";

    constructor(){
        this.categorias = [];
        this._inscritos = [];

        if(localStorage.getItem(this._localStoragePropertie)){
            this.categorias = JSON.parse(localStorage.getItem(this._localStoragePropertie))
        }
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    notificar(){
        localStorage.setItem(this._localStoragePropertie, JSON.stringify(this.categorias))
        this._inscritos.forEach(func=> func(this.categorias))
    }

    adicionarCategoria(categoria){
        this.categorias.push(categoria);
        this.notificar();
    }

    removerCategoria(categoria){
        console.log(this.categorias);
        this.categorias = this.categorias.filter((cat) => categoria !== cat)
        this.notificar()
    }
}