export default function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
    function discountQty() {
        return Math.max(quantity - product.discountThreshold, 0);
    }
    const basePrice = product.basePrice * quantity;

    const discount = discountQty() * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount};
}

function applyShipping(priceData, shippingMethod) {
    function isShippingDiscounted() {
        return (priceData.basePrice > shippingMethod.discountThreshold);
    }
    const shippingPerCase = isShippingDiscounted() ? shippingMethod.discountedFee : shippingMethod.feePerCase;

    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}

