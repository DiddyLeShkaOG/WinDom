function botAnswer(question) {
  const answers = {
    "привет": "Привет! Чем могу помочь?",
    "цена": "Наши окна от 6990 рублей. Актуальные цены на главной странице.",
    "доставка": "Доставка по Приднестровью — бесплатно при заказе от 2-х окон.",
    "гарантия": "Гарантия на окна — 5 лет. Подробнее в разделе 'Справка'.",
    "поддержка": "Вы можете написать нам в разделе 'Поддержка'.",
    "регистрация": "Чтобы зарегистрироваться, нажмите на иконку профиля в углу.",
    "телеграм": "Наш Telegram: https://t.me/windom_help",
    "вайбер": "Viber: viber://chat?number=+37300000000"
  };
  return answers[question.toLowerCase()] || "Извините, я не понял вопрос. Попробуйте иначе.";
}

function toggleProfilePopup() {
  const popup = document.getElementById("profilePopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
