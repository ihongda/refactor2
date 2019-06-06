export default function price(order) {
    let basePrice = order.quantity * order.itemPrice;
    let quantifyDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shipping = Math.min(basePrice * 0.1, 100);

    return basePrice - quantifyDiscount + shipping;
}