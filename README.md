# LinearGradient
При клике на кнопку менять кнопке цвет фона на случайный градиентный

### Памятка

1. Найдём и сохраним кнопку по которой будем кликать.
2. Повесим на кнопку слушатель события и обработчик события. В обработчике события скоро будем менять цвет кнопки на случайный. Теперь при каждом клике на кнопку будет вызываться функция () => {}, которая пока ничего не делает.
3. Чтобы поменять цвет кнопки используем button.style.backgroundImage.
4. Для получения градиентного цвета придётся написать дополнительную функцию по созданию градиента.
5. Вызовем функцию getRandomGradient(), а результат работы сохраним в переменную gradient, в которой будет храниться цвет.
6. Создадим функцию getRandomGradient().
7. Так как результатом работы функции будет — цвет, то сразу его вернём как результат работы этой функции.
8. Так как градиент при каждом клике должен быть случайным, вместо указанного цвета #fff и #000, используем переменные, которые при каждом клике будут менять своё значение.
9. Так как градиент при каждом клике должен быть случайным, вместо указанного цвета #fff и #000, используем переменные, которые при каждом клике будут менять своё значение.
10. Функция getRandomColor при каждом клике на кнопку будет создавать новый цвет.
11. Создадим функцию getRandomColor, которая будет возвращать новый цвет return color.
12. Hex-значение может иметь одно из 16 значений, например #fff, #f00, #bbccee. Заведём словарь из которого будем создавать цвет.
13. Любое hex-значение начинается с #, поэтому сразу создадим стартовое значение после которого будем добавлять цвета.
14. Так как значение может состоять из 6 символов, создадим цикл, который будет повторяться 6 раз. В каждой итерации цикла будем добавлять в конец строки ``` случайный символ из массива letters. После завершения цикла в переменной color будет храниться строка из 6 символов + начальный #.
15. color += letters[Math.floor(Math.random() * 16)]. В каждой итерации цикла к переменной color добавляется случайный символ из строки letters. Для этого используется функция Math.random(), которая возвращает случайное число от 0 (включительно) до 1 (исключительно), умноженное на 16. Затем Math.floor() округляет полученное число вниз до ближайшего целого значения, чтобы получить индекс символа в строке letters. Таким образом, каждый символ цвета выбирается случайным образом из допустимых символов в HEX-кодировке.
16. Теперь можете бесконечно нажимать на кнопку «Нажми», чтобы получить новый цвет.
17. В чём хороши любые языки программирования, так это в гибкости. Теперь мы можем лёгким движением руки менять цвет не кнопки, а фона сайта. Можно сменить угол направления градиента, чтобы получить более красивый эффект. А также добавить третий, промежуточный, цвет для ещё более красивого эффекта.
