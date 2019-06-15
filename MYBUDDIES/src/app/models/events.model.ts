export class Events {
    teamName:string;//PK
    eventId: string;
    userName:string;
    userEmail: string;//FK
    title:string;
    content:string;
    required:string[];
    optional:string[];
}