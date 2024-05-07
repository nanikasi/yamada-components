export const toKebabCase = (string: string) => {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(" ")
  return splitted.join("-")
}

export const removePhrase = (text: string, phrase: string) => {
  return text.replace(new RegExp(phrase, "g"), "")
}