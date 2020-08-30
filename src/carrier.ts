export class Carrier {
    id: number;
    name: string;
    isDefault: boolean;
    setByBank: boolean;

    constructor(theName: string, carrierId: number) {
        this.id = carrierId;
        this.name = theName;
        this.isDefault = false;
        this.setByBank = false;
    }

    setDefault(value: boolean) {
        this.isDefault = value;
    }

}