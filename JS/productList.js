//mock database for product list in JSON
(function() {
    const locdrop_Menu = document.querySelector("#location");

    var database = [
        {
            name: 'Zakynthos Greece Beach',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2019-digital/your-shot-beach-scenes/016-your-shot-beaches-12380102_uploadsmember741708yourshot-741708-12380102jpg_l3jrr5qcuwugfq3di3pqcm6b5yzxs2udwatjavjxeftgooyp4jfa_5000x3611.jpg',
            location: 'Greece',
            price: 900,
            inhabited: true,
        },
        {
            name: 'Snæfellsnes Peninsula Iceland',
            image: 'https://media.gadventures.com/media-server/cache/46/eb/46eb40ffabbded9bff671bee083188a8.png',
            location: 'Iceland',
            price: 100,
            inhabited: false,
        },
        {
            name:   'Diani Beach',
            image:  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Diani_Beach_Sunrise_Kenya.jpg',
            location: 'Kenya',
            price:  800,
            inhabited: true,
        },
        {
            name: 'Pig Beach',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/pig-island.jpg',
            location: 'Bahamas',
            price: 300,
            inhabited: true,

        },
        {
            name: 'Playa Del Amor',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2017-digital/best-beaches/playa-del-amor-mexico.ngsversion.1529422222271.adapt.1900.1.jpg',
            location: 'Mexico',
            price: 200,
            inhabited: false,
        },
        {
            name: 'Source D\'Argent Seychelles',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/source.jpeg',
            location: 'Seychelles',
            price: 400,
            inhabited: true,
        },
        {
            name: 'Reynisfjara Beach Iceland',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/Grace-Bay-Turks-and-Caicos-1024x683.jpg',
            location: 'Iceland',
            price: 50,
            inhabited: false,
        },
        {
            name: 'Praia do Amor Brazil',
            image: 'https://images.bestday.com/_lib/images/CONTENIDO-EDITORIAL/Blogs/Brasil/Miscelaneas/Melhores-Praias-para-Aproveitar-o-Verao/Praia-do-Amor-near-Pipa-Brazil.jpg',
            location: 'Brazil',
            price: 1000,
            inhabited: true,
        },
        {
            name: 'Praia do Benagil Portugal',
            image: 'https://mansion-global-app.s3.amazonaws.com/stories/portugal-special-report-portuguese-beach-report/media/alcalead_shorthand-mr.jpg',
            location: 'Portugal',
            price: 900,
            inhabited: true,
        },
        {
            name: 'Tayrona National Park, Colombia',
            image: 'https://theculturetrip.com/wp-content/uploads/2018/03/shutterstock_410041762.jpg',
            location: 'Colombia',
            price: 10000,
            inhabited: true,
        },
    ];

    function render(results) {
        var cardContainer = document.querySelector('#results-cards-beaches');

        cardContainer.innerHTML = '';

        cardContainer.innerHTML = results.map(function (beach,index){
            return(`
                <div class = "card-deck">
                        <div class="card" style = "min-width: 10rem;min-height: 10em;">
                                    <img class="card-img-top img-adjusted" src = "${beach.image}" class="img-fluid">
                                    <div class ="card-body">
                                        <h5 class = "card-title">${beach.name}</h5>
                                        <p class = "card-text">$${beach.price} MILL USD</p>
                                    </div>                   
                         </div>
                </div>
            `)
        }).reduce((a, b) => a.concat(b), "")    //a (empty string) same thing consistently. b is new thing. b element in list.

        /***
        cardContainer.innerHtml.forEach(function(cards){
            cardContainer.innerHTML += cards;
        });

         ***/



    }                                           //for loop under hood updating empty string a with an element b

    render(database);



    function orderByInhabitants(inhabited) {


        if (inhabited === "true") {
            var sortedResults = (inhabited === 'true');


            var filteredresults = database.filter(function (result) {
                if (sortedResults === result.inhabited)
                //return sortedResults;
                    return result.inhabited;
            });
            render(filteredresults);

        } else if (inhabited === "false") {
            var sortedResults = (inhabited === 'false');            //trying to convert to boolean false


            var filteredresults = database.filter(function (result) {
                //if (sortedResults === result.inhabited)
                    return !result.inhabited;
            });
            render(filteredresults);
        }
    }

    document.querySelector('#inhabited').addEventListener('change', function(event){
        //var value = event.target.value === 'true';
        //orderBy(value);
        orderByInhabitants(event.target.value);
    });


    function Location(ShowLocation){
        if (!ShowLocation) return render(database);

        var locationresult = database.filter(function(beach){
            if(beach.location === ShowLocation){
                return ShowLocation;
            }
        });
        render(locationresult);

    }

    function orderByLocation(sortValue){
        var sortedResults = (sortValue === 'AtoZ') ?
            database.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA > nameB) {
                    return 1;
                }
                if (nameA < nameB) {
                    return -1;
                }
                //return render(database)
            }) :
            database.sort(function (a, b) {
                return a[sortValue] - b[sortValue];

            });

        return render(sortedResults);
    }


    locdrop_Menu.addEventListener('change', function(event){
        var value = event.target.value;
        orderByLocation(value);
        //Location(value);
    });
    locdrop_Menu.addEventListener('change', function(event){
        var value = event.target.value;
        //return(orderByLocation(value));
        Location(value);
    });

    function orderByPrice(price){
        if (!price) return render(database);

        if(price === "low"){
            var sortedPrices = (price === 'low')?
                database.sort(function(a,b){
                    var price1 = a.price;

                    var price2 = b.price;

                    if(price2 > price1){
                        return -1;
                    }
                    if(price2 < price1){
                        return 1;
                    }
                }) :

                database.sort(function(a,b){
                    return;

                });

            render(sortedPrices);
        }
        else if(price ==="high"){
            var sortedPrices = (price === 'high')?
                database.sort(function(a,b){
                    var price1 = a.price;

                    var price2 = b.price;

                    if (price2 < price1){
                        return -1;
                    }
                    if (price2 > price1){
                        return 1;
                    }
                }):

                database.sort(function(a,b){
                    return;

            });

            render(sortedPrices);
        }
    }
    document.querySelector('#price').addEventListener('change', function (event) {
        orderByPrice(event.target.value);
    });

    //function category()

    /***
    function orderByInhabitants(inhabited) {
        var a = new Array(10);
        ///if (inhabited === "true") {
            var sortedResults = (inhabited === 'true')?
                database.filter(function (result) {
                    var inhab1 = result.inhabited;

                    if (sortedResults === inhab1)
                        return result;
                });
                database.filter(function (b){

                }
    }

***/



})();
