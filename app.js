const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

const arrayCorrectAnswer = ['B', 'A', 'A', 'B', 'B'];

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === arrayCorrectAnswer[index]) {
      score += 20;
    }
  });

  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
