export function toDate(a: string): Date {
  const dateParts: string[] = a.split(".");
  return new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
}

export function isDate (a: string): boolean {
  const dateParts: string[] = a.split(".");
  const date = new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  )
  return isFinite(+date);
}