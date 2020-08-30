import { Dispensery as Dispensary, Dispensery } from "./dispensary";
import { Carrier } from "./carrier";
import { Bank } from "./bank";

let dispensaries: Dispensary[] = [];
let carriers: Carrier[] = [];

    export function getDispensary(id: number): Dispensary {
        const dispensary = dispensaries.find(d => d.id === id);
        if(!dispensary) { throw new ReferenceError('No dispensary found with that id'); }
        return dispensary;
    }

    export function getAllDispensaries(): Dispensery[] {
        return dispensaries;
    }

    export function addNewDispensary(name: string, theBank: Bank) {
        dispensaries.push(new Dispensary(name, theBank, dispensaries.length + 1))
    }

    export function updateDispensary(updatedDispensary: Dispensary) {
        const checkDispensary = dispensaries.find(d => d.id === updatedDispensary.id);
        if(checkDispensary) {
            const index = dispensaries.findIndex(d => d.id === updatedDispensary.id);
            dispensaries[index] = updatedDispensary;
        }
    }

    export function getCarrier(id: number): Carrier {
        const carrier = carriers.find(c => c.id === id);
        if(!carrier) { throw new ReferenceError('No carrier found with that id'); }
        return carrier;
    }

    export function getAllCarriers(): Carrier[] {
        return carriers;
    }

    export function getDefaultCarrier(): Carrier {
        const carrier = carriers.find(c => c.isDefault === true)
        if(!carrier) { return null as any; }
        return carrier;
    }

    export function addNewCarrier(theName: string) {
        carriers.push(new Carrier(theName, carriers.length + 1))
    }

    export function updateCarrier(updatedCarrier: Carrier) {
        const checkCarrier = carriers.find(c => c.id === updatedCarrier.id);
        if(checkCarrier) {
            const index = carriers.findIndex(c => c.id === updatedCarrier.id)
            carriers[index] = updatedCarrier;
        }
    }
    

