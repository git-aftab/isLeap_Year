// Write a function to find whether the entered year is a leap year or not

const leap_year = (year) => {
  if (typeof year === "string") {
    throw new Error("Please Enter a valid year or Number");
  } else if (year % 4 == 0) {
    console.log(`${year} is a leap year!`);
  } else if (year % 100 == 0) {
    console.log(`${year} is not a leap year!`);
  } else if (year % 400 == 0) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year!`);
  }
};

leap_year(2000);
leap_year(2024);
leap_year(1990);
// leap_year("1990");
