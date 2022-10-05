// get json

$.ajax({
    url: 'js/vehicles.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
        $(data.cars).each(function (index, value) {
            console.log(value.name);
            $('.results_cards').append($('\
                <div class="card_'+ index +' card">\
                    <div class="card_img_main">\
                        <p>' + value.advert_classification + '</p>\
                        <div class="car_filters">\
                            <span>' + value.odometer_value + value.odometer_units + '</span>\
                            <span>EV</span>\
                            <span>' + value.body_type + '</span>\
                            <span>' + value.colour + '</span>\
                        </div>\
                    </div>\
                    <div class="card_stats">\
                        <div class="car_details">\
                            <p class="car_make">' + value.make + '<span><button>New</button><i class="far fa-star"></i></span></p>\
                            <p class="car_model">' + value.model + '</p>\
                        </div>\
                        <div class="car_price">\
                            <span class="results_tab_filters">' + value.odometer_value + value.odometer_units + ' | EV</span><p class="car_monthly_price">£' + value.price + ' <span>/mo (PCP)</span></p>\
                            <span class="results_tab_filters">' + value.body_type + ' | ' + value.body_type + '</span><p class="car_total_price discount">£' + value.price + ' <span class="old_price">£' + value.price_when_new + '</span> <span><a href="">Calculate finance</a></span></p>\
                        </div>\
                    </div>\
                </div>\
            '));
        })
    }
})

