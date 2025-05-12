
const form = document.querySelector('.footer__question-form');

if (form !== null) {
  const submitBtn = form.querySelector('.footer__question-submit');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Відправка...';
    submitBtn.classList.add('sending');

    setTimeout(() => {
      submitBtn.textContent = 'Відправлено!';
      submitBtn.classList.remove('sending');
      submitBtn.classList.add('sent');
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('sent');
        form.reset();
      }, 1500);
    }, 1200);
  })
}
