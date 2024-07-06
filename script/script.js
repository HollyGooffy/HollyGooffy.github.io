window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var header = document.getElementById("header");
  
  if (winScroll > 10) { // Измените число на нужное значение
    header.style.opacity = "0.91"; // Уменьшаем прозрачность
  } else {
    header.style.opacity = "1"; // Восстанавливаем прозрачность
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Собираем все поля ввода в массив
  var inputs = document.querySelectorAll('.inputBox input');

  // Функция для проверки заполненности всех полей
  function checkInputs() {
      var allFilled = true;
      inputs.forEach(function(input) {
          if (input.value.trim() === '') {
              allFilled = false;
              alert('Все поля должны быть заполнены');
              return false; // Прекращаем перебор после первого пустого поля
          }
      });
      return allFilled;
  }

  // Добавляем обработчик события клика на кнопку отправки
  document.querySelector('.btn').addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем стандартную отправку формы

      if (checkInputs()) { // Если все поля заполнены
          alert('Форма отправлена');
          // Здесь можно добавить код для отправки формы
      }
  });
});