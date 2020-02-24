//mock database for product list in JSON
(function() {
    /***
    let name = 0;
    let location = 0;
    let price = 0;
    let beachlist = []
    ***/

    //const namedrop_Menu = document.querySelector("#name");
    const locdrop_Menu = document.querySelector("#location");
    //const pricedrop_Menu = document.querySelector("#price");
    /**
    const names = new Set()

    const locations = new Set()
    **/
    //using lecture notes for testing knowledge


    /***
    function nameFilter(beach) {
        var sortedResult = (beach === 'name') ?
            database.sort(function(a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }):
            database.sort(function(a,b){

                return a[beach] - b[beach];
            });
            render(sortedResult);
    }
    function location(beach){
        var sortedResult =
            database.sort(function(a, b) {
                var nameA = a.location.toUpperCase();
                var nameB = b.location.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            });
            render(sortedResult);
    }
     ***/

    /****
    function priceFilter(beach) {
        var sortedResult = database.sort(function(a,b){

            return a[beach] - b[beach];
        });
        render(sortedResult);

    }
     ****/

    var database = [
        {
            name: 'Zakynthos Greece Beach',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2019-digital/your-shot-beach-scenes/016-your-shot-beaches-12380102_uploadsmember741708yourshot-741708-12380102jpg_l3jrr5qcuwugfq3di3pqcm6b5yzxs2udwatjavjxeftgooyp4jfa_5000x3611.jpg',
            location: 'Greece',
            price: '900',
            inhabited: true,
        },
        {
            name: 'Snæfellsnes Peninsula Iceland',
            image: 'https://media.gadventures.com/media-server/cache/46/eb/46eb40ffabbded9bff671bee083188a8.png',
            location: 'Iceland',
            price: '100',
            inhabited: false,
        },
        {
            name:   'Diani Beach',
            image:  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Diani_Beach_Sunrise_Kenya.jpg',
            location: 'Kenya',
            price:  '800',
            inhabited: true,
        },
        {
            name: 'Pig Beach',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/pig-island.jpg',
            location: 'Bahamas',
            price: '300',
            inhabited: true,

        },
        {
            name: 'Playa Del Amor',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2017-digital/best-beaches/playa-del-amor-mexico.ngsversion.1529422222271.adapt.1900.1.jpg',
            location: 'Mexico',
            price: '200',
            inhabited: false,
        },
        {
            name: 'Source D\'Argent Seychelles',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/source.jpeg',
            location: 'Seychelles',
            price: '400',
            inhabited: true,
        },
        {
            name: 'Reynisfjara Beach Iceland',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/Grace-Bay-Turks-and-Caicos-1024x683.jpg',
            location: 'Iceland',
            price: '50',
            inhabited: false,
        },
        {
            name: 'Praia do Amor Brazil',
            image: 'https://images.bestday.com/_lib/images/CONTENIDO-EDITORIAL/Blogs/Brasil/Miscelaneas/Melhores-Praias-para-Aproveitar-o-Verao/Praia-do-Amor-near-Pipa-Brazil.jpg',
            location: 'Brazil',
            price: '1000',
            inhabited: true,
        },
        {
            name: 'Praia do Benagil Portugal',
            image: 'https://mansion-global-app.s3.amazonaws.com/stories/portugal-special-report-portuguese-beach-report/media/alcalead_shorthand-mr.jpg',
            location: 'Portugal',
            price: '900',
            inhabited: true,
        },
        {
            name: 'Tayrona National Park, Colombia',
            image: 'https://theculturetrip.com/wp-content/uploads/2018/03/shutterstock_410041762.jpg',
            location: 'Colombia',
            price: '10000',
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
    }                                           //for loop under hood updating empty string a with an element b

    render(database);



    function orderBy(inhabited) {			//booleans count as numbers. 1 =true .0 = false
        // Sort method varies based on what type of value we're sorting
        var filteredResults = database.filter(function(result){
            return inhabited || result.inhabited;
        });
        render(filteredResults);
    }


    document.querySelector('#inhabited').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        //var value = event.target.value ==='true'; //=== 'true';
        if(event.target.value === 'true')
        {
            var value = event.target.value === 'true';
            orderBy(value);
        }
        if(event.target.value === 'false')
        {
            var value = event.target.value === 'false';
            orderBy(value);
        }
    });

/***

    document.querySelector('#orderBy').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });
***/











    function Location(ShowLocation){
        var locationresult = database.filter(function(beach){
            if(beach.location === ShowLocation){
                return ShowLocation;
            }
        });
        render(locationresult);

    }

    function Price(ShowPrice){

    }


    /****
    locdrop_Menu.addEventListener('change', function(event){
        var value = event.target.selectedIndex;
        Location(value);
    });
    ****/




    /****
    namedrop_Menu.addEventListener('change', function(event){
        name = event.target.selectedIndex;
        render()
    })
    ****/
    locdrop_Menu.addEventListener('change', function(event){
        var value = event.target.value;
        Location(value);
    });
    /***
    pricedrop_Menu.addEventListener('change', function(event){
        price = event.target.selectedIndex;
        render()
    })
    ***/
/***
    function Inhabited(showInhabited) {
        // If showPublished is TRUE, only display published results
        // Filter will only inclue objects that return TRUE from it's query
        var filteredResults = database.filter(function (result) {					//map will create an array of legnth of old value. filter returns true or false. true if value included. false if not
            // If showPublished is TRUE, always show.											///fals e if you do not want to include it in array
            // Otherweise only show if published is TRUE


            //return showInhabited || result.inhabited;
            if(showInhabited === result.inhabited) {
                return showInhabited;
            }
            else if(showInhabited !== result.inhabited){
                showInhabited = 'false';
                return showInhabited;
            }

            else if(showInhabited === false){
                return showInhabited;
            }

        });
        render(filteredResults);
    }
 ***/



})(); //wrapping entire file with locally exec function
      //variable scope: local scope


