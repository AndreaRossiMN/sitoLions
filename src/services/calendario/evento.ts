export class Event {
    
    public Id: string;

    public title: string;

    public date: Date;

    constructor(){
        this.Id = '';
        this.title = '';
        this.date = new Date();
    }
}

export class EventoAws {
    public Id: string;
    public Nome: string;
    public Data: Date;

    constructor(){
        this.Id = '';
        this.Nome = '';
        this.Data = new Date();
    }
}
export class EditEventoAws {
    public Id: string;
    public Nome: string;
    public Data: Date;
    public OldData: Date;

    constructor(){
        this.Id = '';
        this.Nome = '';
        this.Data = new Date();
    }
}