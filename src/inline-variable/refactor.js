export default function calcLineTotal(order) {
    let basePrice = order.quantity * order.itemPrice;
    let qtyDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - qtyDiscount + shipping;
}