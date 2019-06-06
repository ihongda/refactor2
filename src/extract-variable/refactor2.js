import {Order} from './Order'

export default function price(aRecord) {
    let order = new Order(aRecord);

    return order.price;
}