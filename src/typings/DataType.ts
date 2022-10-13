export interface CommonSelection {
    name: string,
    code: number,
    description: string,
};

export interface Mode {
    name: string,
    code: number,
    description: string,
};

export interface DataList{
    boxNo: string,
    keyDeposit: number,
    keyRental: number,
    rateNo: number,
    accountNo: string,
    accountType: string,
    bopCode: string,
    staffBenefit: CommonSelection[],
    modeOfOperation: CommonSelection[],
    varianceAmount: number,
    varianceCode: CommonSelection[],
    remarks: string,
    addressCIFNo: string,
    addressSequence: number,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    addressLine4: string,
};