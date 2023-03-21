const formEL = document.querySelector('[name="contact_form"]');

formEL.addEventListener('submit', event => {
  event.preventDefault();
  const { user_name, user_phone, user_email } = event.currentTarget.elements;
  if (user_name.value !== '' && user_email.value !== '' && user_phone.value !== '') {
    console.log('Імʼя користувача:', user_name.value);
    console.log('Телефон користувача:', user_phone.value);
    console.log('Пошта користувача:', user_email.value);
  } else {
    alert('Ведіть дані в поля форми');
  }
});
