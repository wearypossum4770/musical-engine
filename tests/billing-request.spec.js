let cardNumber = "4599 5407 8526 0021";
let propsData = {
  sourceOrganization: "",
  currenciesAccepted: "USD",
  paymentAccepted: ["cash", "debit", "amex"],
};
let details = {
  expires: "",
  invoiceNumber: "INV-00003",
  priority: "Normal",
  get total() {
    return {
      label: "Change of Address",
      amount: Object.fromEntries([
        ["currency", "USD"],
        ["value", this.orderTotal],
      ]),
    };
  },

  get orderTotal() {
    return this.lineItems.reduce(
      (total, item) => total + item.rate * item.quantity,
      0,
    );
  },
  lineItems: [
    {
      itemOrder: 0,
      itemID: "460000000017088",
      rate: 1.85,
      label: "Change of Address",
      description: "Customer used postal service change of address form.",
      quantity: 1,
      productType: "Identity Verification",
      taxID: "460000000017094",
    },
  ],
};

console.log(details.total);
