const app = {
    init: function(selector){
        this.max = 0;
        document
            .querySelector(selector)
            .addEventListener('submit', (ev)=>{
                ev.preventDefault();
                this.handelSubmit(ev);
            })
    },

    handelSubmit: function(ev){
        //ev.preventDefault();
        const flick = {
            id: ++this.max,
            name: ev.target.flickName.value,
        }
        ev.target.reset();
        console.log(flick);
    },
}

app.init('#flickForm');