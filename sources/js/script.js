$(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
});

const form = document.querySelector('form');
const emailInput = document.querySelector('[type="email"]');
const submitBtn = document.querySelector('[type="submit"]')
const connexionRollover = document.getElementById('connexion-rollover');
const formLine = document.querySelector('.form-line');
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|net|org|net|gov|mil|biz|info|mobi|name|uk|aero|org|jobs|museum)\b/;

const displayEmail = (event) => {
  event.preventDefault();
  connexionRollover.textContent = emailInput.value;
  connexionRollover.classList.add('logged-in')
  emailInput.value = '';
  submitBtn.disabled = true;
}

const toggleSubmitBtn = () => {
  if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
    submitBtn.disabled = true;
    formLine.classList.remove('valid-email');
    formLine.classList.add('invalid-email');
  } else {
    submitBtn.disabled = false;
    formLine.classList.remove('invalid-email');
    formLine.classList.add('valid-email');
  }
}

form.addEventListener('submit', displayEmail);
emailInput.addEventListener('keyup', toggleSubmitBtn);
