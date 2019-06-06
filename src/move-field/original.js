import Account from './Account';
import AccountType from './AccountType';

export default function buildAccount(number, type, interestRate) {
    return new Account(number, buildAccountType(type), interestRate);
}

function buildAccountType(type) {
    switch (type) {
        case 'Premium':
            return new AccountType(type, true);
        case 'Standard':
            return new AccountType(type, false);
        default:
            throw new Error('Unknown AccountType: ' + type);
    }
}
