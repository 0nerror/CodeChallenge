import * as api from "./api";

export class Bank {
    name: string;

    constructor() {
        this.name = "The Bank";
    }

    setCarrierAsDefault(carrierId: number) {
        let carrier = api.getCarrier(carrierId);
        let dispensaries = api.getAllDispensaries();

        carrier.isDefault = true;
        api.updateCarrier(carrier);

        dispensaries.forEach(function (dispensary) {
            if(!dispensary.carrier || dispensary.carrier.isDefault === true)
            {
                dispensary.carrier = carrier!;
                api.updateDispensary(dispensary);
            }
        });
    }

    setPreferedCarrier(dispensaryId: number, carrierId: number) {
        let dispensary = api.getDispensary(dispensaryId);
        const carrier = api.getCarrier(carrierId);
        carrier.setByBank = true;
        dispensary.carrier = carrier;
        api.updateDispensary(dispensary);
    }

    addDispensary(name: string) {
        api.addNewDispensary(name, this);
    }

    addCarrier(name: string) {
        api.addNewCarrier(name);
    }
}
