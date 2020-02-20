//mock database for product list in JSON
(function() {
    let filter = 0;
    let name = 0;
    let location = 0;
    let price = 0;


    const namedrop_Menu = document.querySelector("#name_dropdown");
    const locdrop_Menu = document.querySelector("#loc_dropdown");
    const pricedrop_Menu = document.querySelector("#price_dropdown");

    function nameFilter(beach) {

    }

    function locationFilter(beach) {

    }

    function priceFilter(beach) {

    }

    var database = [
        {
            name: 'Zakynthos Greece Beach',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2019-digital/your-shot-beach-scenes/016-your-shot-beaches-12380102_uploadsmember741708yourshot-741708-12380102jpg_l3jrr5qcuwugfq3di3pqcm6b5yzxs2udwatjavjxeftgooyp4jfa_5000x3611.jpg',
            location: 'Greece',
            price: '900 mill',
        },
        {
            name: 'Pig Beach',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/pig-island.jpg',
            location: 'Bahamas',
            price: '2 billion USD',

        },
    ];

    function render(results) {
        var cardContainer = document.querySelector('#results-cards beaches');

        cardContainer.innerHTML = '';

        var cardRows = results.map(function (result,index){
            return(`
                <div class = "beach-card">
                    <img src = "${beach.image}"></img>

                </div>
                `)
        })
    }
})() //wrapping entire file with locally exec function
      //variable scope: local scope

    render(database);
