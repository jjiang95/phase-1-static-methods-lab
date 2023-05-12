class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g ,"");
  }

  static titleize(string) {
    const stringArray = string.split(` `);
    const newStringArray = stringArray.map(word => {
      if ((word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") && word !== string[0]) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    return newStringArray.join(" ");
  }
}