
export class Pokemon{
    count:number;
    next:string;
    previous:string;
    results:PokeResult[];
}

export class PokeResult{
    name:string;
    url:string;
    id:string;
    imageUrl:string;
}