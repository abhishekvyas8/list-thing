const app = {
    init(selector){
        this.flicks = [];
        this.max = 0;
        this.list = document.querySelector(selector.listSelector);

        document
            .querySelector(selector.formSelector)
            .addEventListener('submit', (ev)=>{
                ev.preventDefault();
                this.handelSubmit(ev);
            })
    },

    renderListItem(flick){
        const item = document.createElement('li');
        item.dataset.id = flick.id;
        item.textContent = flick.name;
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
})