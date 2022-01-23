import { Deta } from "deta";
import Base from "deta/dist/types/base";
import TypeOfDeta from "deta/dist/types/deta";
import { GetResponse, PutResponse } from "deta/dist/types/types/base/response";
import { DetaType } from "deta/dist/types/types/basic";
import { serialize } from "v8";

export class CloudStorage{
    deta!: TypeOfDeta
    database!: Base
    constructor() {
       
    }
    public init() {
        this.deta = Deta(process.env.DETA_PROJECT_KEY);
        console.log("init->");
        return;
    }
    public connectToDB(name: string) {
        this.database = this.deta.Base(name);
        console.log("connectToDB->");
    }
    public async AddtoDB(serializedPayloadWithKey: Record<string, any>) {
        const response = await (this.database as Base).put(serializedPayloadWithKey)
        console.log("AddToDB->");
        if (response)
            return response;
        return null;
    }
    public async GetFromDB(key: string){
        const response = await (this.database as Base).get(key);
        console.log("GetFromDB->");
        if (response)
            return response;
        
        return null;
    }
    public async FetchAllFromDB(filters: string | undefined = undefined){
        if (!filters) {
            let res = await (this.database as Base).fetch();
            let allItems = res.items;
            console.log("FetchAllFromDB->",allItems);
            return allItems;
        }
    }
}