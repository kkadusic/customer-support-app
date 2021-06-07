export const parseDate = (date) => {
    const dateParsed = date.substr(8, 2) + "." +
        date.substr(5, 2) + "." + date.substr(0, 4) + ".";
    const timeParsed = date.substr(11, 5) + "h";
    return dateParsed + " " + timeParsed;
}
