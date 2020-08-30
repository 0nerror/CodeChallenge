import * as api from "./api";
import { Bank } from "./bank";

test('use dispensary to set carrier as prefered', () => {
    const bank = new Bank();
    bank.addDispensary('newDispensary');
    bank.addCarrier('newCarrier');
    let dispensary = api.getDispensary(1);
    dispensary.setPreferedCarrier(1);
    expect(api.getDispensary(1).carrier?.name).toBe('newCarrier');
});

test('set dispensary carrier to bank prefered and then try to re-set it with dispensary', () => {
    const bank = new Bank();
    bank.addCarrier('bankPrefered');
    bank.addCarrier('dispensaryPrefered');
    bank.setPreferedCarrier(1,2);
    let dispensary = api.getDispensary(1);
    dispensary.setPreferedCarrier(3);
    expect(api.getDispensary(1).carrier?.name).toBe('bankPrefered');
    expect(api.getDispensary(1).carrier?.setByBank).toBe(true);
});

