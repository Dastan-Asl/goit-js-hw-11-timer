const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  divTimer: document.querySelector("#timer-1"),
  divField: document.querySelectorAll(".field"),
  span: document.querySelectorAll(".label"),
  title: document.querySelector(".title"),
};

refs.divTimer.style.display = "flex";
refs.divField.forEach((item) => {
  item.style.margin = "10px";
});
refs.span.forEach((item) => {
  item.style.display = "block";
});

const start = new Date("April 12, 2021 16:14:00");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const difference = start - now;

  const days = pad(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((difference % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;

  if (difference < 0) {
    clearInterval(timer);
    refs.days.textContent = "00";
    refs.hours.textContent = "00";
    refs.mins.textContent = "00";
    refs.secs.textContent = "00";
    refs.title.textContent = "Время закончилось";
  }
});

const pad = (value) => {
  return String(value).padStart(2, "0");
};
