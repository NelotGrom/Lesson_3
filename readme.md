# Инструкция по установке и запуску тестов

## Исходные данные:
- удаленный и локальный репозиторий с тестируемым скриптом
- установленный node.js

---

- [ ] 1. Установить пакетный менеджер (NPM\JARN).
    - В локальном репозитории вызвать терминал и ввести команду 'npm init'
    - Создать файл gitignore и добавить в него папку node_modules. 

- [ ] 2. Установить библиотеку Jest.
    - В терминале из репозитория ввести команду 'npm install jest --save-dev'.
    - Дождаться окончания установки.

- [ ] 3. Сделать Jest дефолтным тест раннером.
    - В файл package.json ключу "test" присвоить значение "jest".
    
- [ ] 4. Создать импорт из тестируемого скрипта.
    - В файле тестируемого скрипта добавить module.exports = 'название тестируемой функции'.

- [ ] 5. Создать файл теста в формате 'название.spec.js'.

- [ ] 6. Подключить тестирумый скрипт к файлу теста с помощью команды require, указав относительный путь (const result = require('./example.js')).    

- [ ] 7. Написать реализацию тестов. 

- [ ] 8. Запустить тесты с помощью команды в терминале npm run test или npx jest.

- [ ] 9. Проанализировать результаты.

## Измерение покрытия:

1. Установка npm install babel-plugin-istanbul .
2. Запуск тестов с ключом --coverage .
3. Анализ результатов в форме таблицы из консоли или в папке проекта coverage\Icov-report\index.html .

Покрытие измеряется по пройденным:
- объявлениям;
- веткам (ветвление по условиям if \ else if и др.);
- функциям;
- строкам;

В html версии отчёта есть детализация, по которой видно количество обращений к каждой строке кода.
Чем больше повторяемых обращений - тем дольше выполняются наши тесты.
Необходимо контролировать избыточность тестов для оптимизации затрат ресурсов.

Отличие измерений в том, что для тестирования когда мы можем обращаемся к одной и той же функции, возможно на одной и той же строке; соответственно возможны ситцуации, когда покрытие по функциям и строкам полное, но мы не протестировали все условия. 
Для того чтобы обеспечить максимальное покрытие нужно тестировать каждое ответвление.
