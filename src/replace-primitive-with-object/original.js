export default function countImportantOrders(orders) {
    return orders.filter(order => "high" === order.priority ||
                                  "rush" === order.priority)
        .length
}