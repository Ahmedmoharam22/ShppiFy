export  const priceDiscount = (price , discount) => {

  return price - price * (discount / 100)
}
export   const formatPrice = (price) =>
new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
}).format(price);