export function currencySybmol(CharCode){
  const dic = {
    GBP: "£",
    EUR: "€",
    USD: "$"
  }
  return dic[CharCode]
}