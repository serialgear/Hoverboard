/**
 * if...else и логические операторы
 *
 * Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной
 * `hours`.
 *
 * Если значение переменной `hours`:
 *
 * - меньше `17`, выводи строку `"Pending"`
 * - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
 * - больше `24` , выводи строку `"Overdue"`
 */

const hours = 25;

if (17 > hours) {
  console.log("Pending");
} else if (17 <= hours && 24 >= hours) {
  console.log("Expires");
} else {
  console.log("Overdue");
}
