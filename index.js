const app = {
    init(selector){
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
    },

    renderListItem(flick){
        const item = this.template.cloneNode(true);
        item.classList.remove('template');
        item.dataset.id = flick.id;
        item
            .querySelector('.flickName')
            .textContent = flick.name;
        return item
    },

    handelSubmit(ev){
        const flick = {
            id: ++this.max,
            name: ev.target.flickName.value,
        }

        this.flicks.unshift(flick);

        const item = this.renderListItem(flick);
        this.list.insertBefore(item, this.list.firstChild);

        ev.target.reset();
    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})