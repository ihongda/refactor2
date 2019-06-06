import Site from "./Site";

export default function getCustomerInfo(siteData) {
    return new Site(siteData).getCustomer();
}
