import Account from './Account';
import AccountType from './AccountType';

export default function buildAccount(daysOverdrawn, accountType) {
    return new Account({daysOverdrawn: daysOverdrawn}, buildAccountType(accountType));
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

