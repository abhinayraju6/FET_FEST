export class Event {
    teamID:string;//PK
    creationtime: string;
    createdby:string;
    content: string;//FK
    title:string;   
    required:string;
    optional:string;
    actions:string;
}