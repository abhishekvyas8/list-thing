const app = {
    init: function(selctor){
        document
            .querySelector(selctor)
            .addEventListener('submit', this.handelSubmit)
    },

    handelSubmit: function(ev){
        ev.preventDefault();
        console.log(ev.target.flickName.value);
        ev.target.flickName.value = '';
    },
}

app.init('#flickForm');