// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "../functions/functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/base/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

import { mainArray } from "../../components/Main/PersonalCards/PersonalCards.jsx";

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('#d', {
   content: 'Во время открытого бета-тестирования будет доступна часть функций'
});
export function addTippy() {
   for (let item of Object.values(mainArray[0])) {
      flsModules.tippy = tippy(`[data-tippy-content]`, {
         theme: 'custom'
      })
   }
}
addTippy()


