class App{
    constructor(selector){
        this.flicks = [];
        this.max = 0;
        this.list = document.querySelector(selector.listSelector);
        this.template = document.querySelector(selector.templateSelector);

        document
            .querySelector(selector.formSelector)
            .addEventListener('submit', (ev)=>{
                ev.preventDefault();
                this.handelSubmit(ev);
            })
    }

    removeFlick(item, flick, ev){
       item.remove();

       const i = this.flicks.indexOf(flick);
       this.flicks.splice(i, 1);
    }

    favFlick(item, flick, ev){
        flick.fav = item.classList.toggle('fav');
    }

    renderListItem(flick){
        const item = this.template.cloneNode(true);
        item.classList.remove('template');
        item.dataset.id = flick.id;
        item
            .querySelector('.flickName')
            .textContent = flick.name;
        
        item
            .querySelector('.remove.button')
            .addEventListener('click', this.removeFlick.bind(this,item, flick));
        
        item
            .querySelector('.fav.button')
            .addEventListener('click', this.favFlick.bind(this, item, flick));

        return item
    }

    handelSubmit(ev){
        const flick = {
            id: ++this.max,
            name: ev.target.flickName.value,
            fav: false,
        }

        this.flicks.unshift(flick);

        const item = this.renderListItem(flick);
        this.list.insertBefore(item, this.list.firstChild);

        ev.target.reset();
    }
}

const app = new App({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
});
