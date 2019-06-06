import Priority from "./Priority";

export default function countImportantOrders(orders) {
    let normalPriority = new Priority("normal");
    return orders.filter(order => order.priority.higherThan(normalPriority))
                 .length
}