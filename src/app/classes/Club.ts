export class Club {
    private _id:string;
	private _name:string;
	private _city:string;
    private _logo:string;
    
    public set id(_id:string) {
        this._id=_id;
    }

    public get id():string {
        return this._id;
    }

    public set name(_name:string) {
        this._name=_name;
    }

    public get name():string {
        return this._name;
    }

    public set city(_city:string) {
        this._city=_city;
    }

    public get city():string {
        return this._city;
    }

    public set logo(_logo:string) {
        this._logo=_logo;
    }

    public get logo():string {
        return this._logo;
    }

}

export const HOURS:number[] = [8,9,10,11,12,13,14,15,16,17,18,19,20]
export const MINUTES:number[]=[0,30]
export const DURATION_HOURS:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
export const OPEN = {
    hour: 8,
    minute: 30
}
export const CLOSE = {
    hour: 22,
    minute: 0
}

