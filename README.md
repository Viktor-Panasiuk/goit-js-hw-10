# URL документація із командного проекта

1.  https://www.youtube.com/watch?v=vU9FtJIm590 як ставити і налаштовувати
    Parcel і деплоїти на GitHUB. Омнови командної роботи

2.  https://docs.google.com/document/d/1SitE5vyqHtShflt1WOhuiwaektmVXfiQaLBsgJbBHSY/edit#heading=h.17dp8vu
    текстова інструкція

======================================================================================================================
Проект HTML/CSS 1.Скринкаст по командній роботі на HTML+CSS:
https://youtu.be/4NSXg7J54oY 1.1 Скринкаст по плануванню проєкта
https://youtu.be/vU9FtJIm590 2.Презентація:
https://docs.google.com/presentation/d/1_xJNGy2_j2nQKGxvuieyspxtNwS57U2BPadAvcOT2lg/edit#slide=id.g1213dc4fa4d_0_4712
3.Проект по HTML+CSS (інструкція для студентів):
https://docs.google.com/document/d/1SitE5vyqHtShflt1WOhuiwaektmVXfiQaLBsgJbBHSY/edit#heading=h.17dp8vu
4.Інструкція по плануванню на HTML+CSS (менторам+студентам)
https://docs.google.com/document/d/17eLHSGiC7Q4AGPSJl1s7lSuIkExGGHO5r30N61AM6Vk/edit
5.Додаток для планування: https://www.scrumpoker-online.org/en/ 6.Командна
робота з Git
https://docs.google.com/document/d/1H79qCZbQnz5GK4ds9nolY4HGZqqcyqCR32MJ1UiRxyQ/edit
7.Скринкаст по командній роботі з git
https://www.youtube.com/watch?v=sxeW_z5-sq4 8.Інструкція по роботі з git в
терміналі
https://docs.google.com/document/d/1jRgH4AD_l535xXqZjGXX1YLFq3qiAMILD-d4w0-c54w/edit
8.1.Інструкція по работі з git в терміналі(скрінкаст)
https://www.youtube.com/watch?v=wFY5HVuQBgw 9.Інструкція по створенню Trello та
роботі в ньому (dev)
https://docs.google.com/document/d/1PvwscZhKhXM_ow0_RMJEWJ2xgtsEb65lLeGG3mEzFMs/edit
10.Відео по роботі з trello https://www.youtube.com/watch?v=egaM6SR8mwk
11.TECH-Критерії прийняття проекту по HTML+CSS
https://docs.google.com/document/d/1eyN71cunwzcdtPcVYcdTqYyhv_QGdfnSiiqZEToyVxc/edit
12.Чек лист по презентації
https://docs.google.com/document/d/1DwxZLnk9-ubphYQiPFV0eZT23UFffyA41tCm3PDislU/edit
13.Шаблон презентації проекта
https://docs.google.com/presentation/d/1jmqIu26at0E1A8mg9eL7rPhPQVDj4NVHNMayqjeQuDo/edit#slide=id.g1213a43354d_0_694
Посилання на ТЗ
https://docs.google.com/document/d/1RF3LSuIGe_bOFrusBger_BDbBcYDiHEx-eSnjNN4Syw/edit
Посилання на макет
https://www.figma.com/file/q1ByTQ3xVmyaC2wphwAeRs/IceCream-(Copy)-(Copy)-(Copy)?node-id=0%3A1
======================================================================================================================

# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
