// agree = confirm("Согласны ли Вы с пользовательским соглашением?");
// console.log(agree);

// типы данных

/*

String -> строка  '', "", ``
 e.g. -> "Don't cry"

Number -> все числа
1_000_000 == 1000000

 */

console.log(typeof ('1_000_000'));
console.log(typeof (1_000_000));
console.log(typeof (1000000));

console.log(document);

const div = document.querySelector('#block');
const block = document.querySelector('.block');
const block_1 = document.querySelector(".block-1");
console.log(div);
console.log(block);

//region Timer1 поиск идет быстрее
console.time();
console.log(div);
console.timeEnd();
//endregion

//region Timer2 поиск идет медленнее
console.time();
console.log(block);
console.timeEnd();
//endregion

//замена содержимого контента
block.textContent = "Привет из JS!"; // отображает только текст
div.innerHTML = "<h1>hello</h1>"; // отображает HTML контент
block_1.style.color = "red";
block_1.style.fontSize = "22px";
block_1.style.fontStyle = 'italic';
block_1.style.border = "2px solid skyblue";
block_1.style.padding = "10px";
block_1.style.textAlign = "center";





