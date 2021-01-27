export class NewClubProposal {
    private _id:number;
    private _name:string;
    private _city:string;
    private _proposalStatus:string;
    private _logoName:string;
    private _logo:any;

    public get id() {
        return this._id;
    }

    public set id(id:number) {
        this._id=id;
    }

    public get name() {
        return this._name;
    }

    public set name(name:string) {
        this._name=name;
    }

    public get city() {
        return this._city;
    }

    public set city(city:string) {
        this._city=city;
    }

    public get proposalStatus() {
        return this._proposalStatus;
    }

    public set proposalStatus(proposalStatus:string) {
        this._proposalStatus=proposalStatus;
    }

    public get logoName() {
        return this._logoName;
    }

    public set logoName(logoName:string) {
        this._logoName=logoName;
    }

    public get logo() {
        return this._logo;
    }

    public set logo(logo:any) {
        this._logo=logo;
    }
}