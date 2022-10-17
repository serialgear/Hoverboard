/**
 * Дедлайн сдачи проекта (if...else)
 *
 * Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию `if...else`.
 *
 * - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
 * - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
 * - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
 * - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`
 */

const deadLine = 1;

if (0 === deadLine) {
  console.log("Сегодня");
} else if (1 === deadLine) {
  console.log("Завтра");
} else if (2 === deadLine) {
  console.log("Послезавтра");
} else {
  console.log("Дата в будущем");
}
