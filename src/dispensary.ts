import { Carrier } from "./carrier";
import { Bank } from "./bank";
import { getDefaultCarrier, getCarrier, updateDispensary } from "./api";

export class Dispensary {
    id: number;
    name: string;
    carrier?: Carrier;
    bank: Bank;

    constructor(theName: string, theBank: Bank, dispenseryId: number) {
        this.id = dispenseryId;
        this.name = theName;
        this.bank = theBank;
        this.carrier = getDefaultCarrier();
    }

    setPreferedCarrier(id: number) {
        if(!this.carrier || this.carrier.isDefault === true || this.carrier.setByBank === false) {
            const preferedCarrier = getCarrier(id);
            if(!preferedCarrier) { 
                throw new ReferenceError('No carrier with that id found');
             }
            this.carrier = preferedCarrier;
            updateDispensary(this);
        }
    }
}