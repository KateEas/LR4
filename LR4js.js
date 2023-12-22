function numbers_N() {
    let numb = Number(document.getElementById('numb_n').value);
    if (numb > 10) {
        alert('максимально допустимое число: 10');
        numb = 10;
    }
    var list_of_numbers = [];
    for (let i = 0; i < numb; i++) {
        let number_for_push = Number(prompt('number'));
        while (isNaN(number_for_push)) {
            number_for_push = Number(prompt('Вы ввели не число, исправьте'));
        }
        list_of_numbers.push(number_for_push);
    }
    alert(list_of_numbers)
    return list_of_numbers
}

function sum_between() {
    let list_of_number = numbers_N();
    let k, l = '?';
    while (isNaN(k) || 1 > k || k > list_of_number.length) {
        k = Number(prompt('Введите левую границу'));
    }
    while (isNaN(l) || k > l || l > list_of_number.length) {
        l = Number(prompt('Введите правую границу'));
    }
    let sum_between_k_l = 0;
    for (let i = 0; i < list_of_number.length; i++) {
        if (i < k-1 || i > l-1) {
            sum_between_k_l += list_of_number[i];
        }
    }
    alert('Сумма равна: ' + sum_between_k_l)
}

function number_A() {
    let list_of_number = numbers_N();
    let max_el = Number(-1000);
    let min_el = Number(1000);
    for (let i = 0; i < list_of_number.length; i++) {
        if (list_of_number[i] > max_el) {
            var max_id = i;
            max_el = list_of_number[i];
        }
        if (list_of_number[i] < min_el) {
            var min_id = i;
            min_el = list_of_number[i];
        }
    }
    if (min_id > max_id) {
        let c = max_id;
        max_id = min_id;
        min_id = c;
    }
    for (let i = 0; i < Math.floor((max_id - min_id) / 2 + 1); i++) {
        var c = list_of_number[i + min_id];
        list_of_number[i + min_id] = list_of_number[max_id - i];
        list_of_number[max_id - i] = c;
    }
    alert(list_of_number)
}
