// WEATHER EX

const weatherBtn = document.querySelector(".weather-btn");
const weatherInt = document.getElementById("weatherInt");
const weatherStr = document.getElementById("weatherStr");
const weatherIcon = document.getElementById("weather_icon");

weatherBtn.addEventListener("click", function () {
  calculateWeather();
});

const checkWeather = (string) => {
    if (weatherIcon.classList.contains("fa-snowflake")) {
        weatherIcon.classList.remove("fa-snowflake");
        weatherIcon.classList.add(string);
    } else if (weatherIcon.classList.contains("fa-cloud-sun")) {
        weatherIcon.classList.remove("fa-cloud-sun");
        weatherIcon.classList.add(string);
    } else {
        weatherIcon.classList.remove("fa-fire");
        weatherIcon.classList.add(string);
    }
}

function calculateWeather() {
  const randomTemparature = Math.floor(Math.random() * 45);
  let answer = "cold";
  let iconStr = "fa-snowflake";
  if (randomTemparature < 10) {
    answer = "cold";
    iconStr = "fa-snowflake";
    weatherIcon.style.color = "lightskyblue";
    checkWeather(iconStr);
  } else if (randomTemparature < 32) {
    answer = "moderate";
    iconStr = "fa-cloud-sun";
    weatherIcon.style.color = "orange";
    checkWeather(iconStr);
  } else {
    answer = "hot";
    iconStr = "fa-fire";
    weatherIcon.style.color = "red";
    checkWeather(iconStr);
  }
  weatherInt.innerHTML = randomTemparature;
  weatherStr.innerHTML = answer;
}

// GETTING MAX VALUE

const arr = [1, 7, -3, 9];

const maxValueMathMax = (numbers) => {
  const maxVal = Math.max(...numbers);
  return maxVal;
};

console.log(maxValueMathMax(arr));

const maxValueReduceMathMax = (numbers) => {
  const maxVal = numbers.reduce((acc, cur) => Math.max(acc, cur), -Infinity);
  return maxVal;
};

console.log(maxValueReduceMathMax(arr));

const maxValueReduce = (numbers) => {
  const highestNumber = numbers.reduce((acc, curr) => {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0);
  return highestNumber;
};
console.log(maxValueReduce(arr));

const maxValueForLoop = (numbers) => {
  let maxVal = 0;
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        maxVal = numbers[j];
      } else {
        if (numbers[i] > maxVal) {
          maxVal = numbers[i];
        }
      }
    }
  }
  return maxVal;
};

console.log(maxValueForLoop(arr));

/* 

0-1, 0-2, 0-3 = 9 ---- 1-7, 1-(-3), 1-9
1-2, 1-3      = 9 ---- 7-(-3), 7-9
2-3           = 9 ---- (-3)-9

*/
