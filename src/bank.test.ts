import { Bank } from "./bank";
import * as api from "./api";

test('create a new instance of bank', () => {
    expect(new Bank ().name).toBe('The Bank');
});

test('create a new instance of bank, then uses it to create a new dispensary', () => {
    const bank = new Bank();
    bank.addDispensary('newDisp');
    expect(api.getDispensary(1).name).toBe('newDisp');
});

test('create a new instance of bank, then uses it to creaate a new carrier', () => {
    const bank = new Bank();
    bank.addCarrier('newCarrier');
    expect(api.getCarrier(1).name).toBe('newCarrier');
});

test('create a new instance of bank, create a carrier, assign carrier as default', () => {
    const bank = new Bank();
    bank.setCarrierAsDefault(1);
    expect(api.getDefaultCarrier().name).toBe('newCarrier');
    expect(api.getDispensary(1).carrier?.name).toBe('newCarrier');
});

test('create a new instance of bank, create a carrier, create a dispensary, mark carrier as prefered for dispensary', () => {
    const bank = new Bank();
    bank.addCarrier('bankPrefered');
    bank.setPreferedCarrier(1,2);
    expect(api.getDispensary(1).carrier?.name).toBe('bankPrefered');
    expect(api.getDispensary(1).carrier?.setByBank).toBe(true);
});



