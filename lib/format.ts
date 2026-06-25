export const formatPrice = (n: number, lease = false) => {
  if (lease) return `$${n}/sq ft`;
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
};

export const formatNumber = (n: number) =>
  new Intl.NumberFormat("en-CA").format(n);

export const displayPrice = (price: number, status: string) =>
  status === "For Lease" ? formatPrice(price, true) : formatPrice(price);

export const formatEventDate = (iso: string) =>
  new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
