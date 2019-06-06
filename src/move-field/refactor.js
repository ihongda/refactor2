import Account from './Account-refac';
import AccountType from './AccountType-refac';

export default function buildAccount(number, type, interestRate) {
    return new Account(number, buildAccountType(type), interestRate);
}

function buildAccountType(type) {
    switch (type) {
        case 'Premium':
            return new AccountType(type, 2.5);
        case 'Standard':
            return new AccountType(type, 5);
        default:
            throw new Error('Unknown AccountType: ' + type);
    }
}
