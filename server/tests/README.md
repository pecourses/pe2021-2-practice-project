# FAQs about development modes

## Q: С какими БД устанавливается соединение при тестировании app?

A: Скрипт (`package.json`)

```
"test": "mocha ./tests/\*.test.js"
```

не меняет значения переменной окружения NODE_ENV, соответственно, при использовании app в тестах в `models/index.js` и `models/mongoModels/index.js` по дефолту устанавливается соединение с конфигами для режима разработки "development", если не установлено иначе.

## Q: Какой режим разработки использовать при тестировании?

A: Для тестирования, как правило, используют тестовые базы данных, для чего устанавливается режим разработки "test".

Для этого нужно:

1. Проверить, есть ли конфиги для баз данных в config/\* для режима test (если нет, то прописать в свойстве "test")

2. Создать PostgreSQL БД, выполнив скрипты:

```
   npx sequelize --env 'test' db:create
   npx sequelize --env 'test' db:migrate
   npx sequelize --env 'test' db:seed:all
```

- при опции --env 'test' sequelize будет брать настройки подключения к бд из конфигов в свойстве "test".

3. Установить переменную окружения NODE_ENV=test при запуске `npm test`, изменив скрипт:

```
   "test": "NODE_ENV=test mocha ./tests/\*.test.js"
```

- для тестового app будет устанавливаться подключения к бд из конфигов в свойстве "test".
