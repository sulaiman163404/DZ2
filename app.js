var starbucks = {
    coffee: {
        cappuccino: false,
        latte: 'Эспрессо с молоком и молочной пенкой',
        americano: 'Классический эспрессо с добавлением горячей воды',
    },
    tea: {
        berry: 'Чай с ягодами по вкусу',
        ginger: 'Чай с имбирем и медом',
        green: false,
    }
};

var drinkOrder = prompt('Что хотите заказать?');

if (drinkOrder in starbucks.coffee) {
    if (starbucks.coffee[drinkOrder]) {
        // console.log(drinkOrder + ' ' + starbucks.coffee[drinkOrder])
        alert('Ваш заказ: '+ drinkOrder.toUpperCase() + ' - ' + starbucks.coffee[drinkOrder]);
    } else {
        alert('Извините, этот напиток временно не доступен. Выберите что-то другое');
    }
}
else if (drinkOrder in starbucks.tea) {
    if (starbucks.tea[drinkOrder]) {
        alert('Ваш заказ: '+ drinkOrder.toUpperCase() + ' - ' + starbucks.tea[drinkOrder]);
    } else {
        alert('Извините, этот напиток временно не доступен. Выберите что-то другое');
    }
}
else {
        alert('Извините, этого напитка нет в меню');
}