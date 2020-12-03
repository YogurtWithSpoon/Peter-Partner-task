export function currencySybmol(charCode){
  const dic = {
    GBP: "£",
    EUR: "€",
    USD: "$"
  }
  return dic[charCode]
}