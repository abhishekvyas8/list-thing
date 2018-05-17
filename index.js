const app = {
    init: function(selector){
        this.max = 0;
        this.list = document.querySelector(selector.listSelector);

        document
            .querySelector(selector.formSelector)
            .addEventListener('submit', (ev)=>{
                ev.preventDefault();
                this.handelSubmit(ev);
            })
    },

    renderListItem: function(flick){
        const item = document.createElement('li');
        item.textContent = flick.name;
        return item
    },

    handelSubmit: function(ev){
        const flick = {
            id: ++this.max,
            name: ev.target.flickName.value,
        }

        const item = this.renderListItem(flick);
        this.list.appendChild(item);

        ev.target.reset();
    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
})