export class CourtWithMatches {
    courtName:string;
    slots:MatchSlot[]=[];
}

export class MatchSlot {
    idSlot:number;
    matchCreatorUsername:string;
    isThereAMatch:boolean;
    isThereAPayedMatch:boolean;
}



