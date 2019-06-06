import Account from './Account-refac';
import AccountType from './AccountType-refac';

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