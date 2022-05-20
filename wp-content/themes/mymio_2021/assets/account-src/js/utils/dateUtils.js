export const getDateFromString = (dateString) => {
    const parts = dateString.split('.');
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    return date.toDateString();
}

export const calculateAge = (birthday) => {
    const birthdayDate = getDateFromString(birthday);
    const ageDifMs = Date.now() - new Date(birthdayDate).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}