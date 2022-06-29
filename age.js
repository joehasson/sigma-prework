const date = new Date(prompt("Enter a date in YYYY-MM-DD format"));
const currentDate = new Date();
const isAnniversaryPast =
  currentDate.getMonth() > date.getMonth() ||
  (currentDate.getMonth() === date.getMonth() &&
    currentDate.getDate() >= date.getDate());
console.log(
  currentDate.getFullYear() - date.getFullYear() - (isAnniversaryPast ? 0 : 1)
);
