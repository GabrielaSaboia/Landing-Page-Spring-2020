//mock database for product list in JSON
(function() {
    let filter = 0;
    let name = 0;
    let location = 0;
    let price = 0;
    let beachlist = []


    const namedrop_Menu = document.querySelector("#name_dropdown");
    const locdrop_Menu = document.querySelector("#loc_dropdown");
    const pricedrop_Menu = document.querySelector("#price_dropdown");

    const names = new Set()
    const locations = new Set()

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
            price: '900',
        },
        {
            name: 'Snæfellsnes Peninsula Iceland',
            image: 'https://media.gadventures.com/media-server/cache/46/eb/46eb40ffabbded9bff671bee083188a8.png',
            location: 'Iceland',
            price: '100',
        },
        {
            name:   'Diani Beach',
            image:  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Diani_Beach_Sunrise_Kenya.jpg',
            location: 'Kenya',
            price:  '800',
        },
        {
            name: 'Pig Beach',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/pig-island.jpg',
            location: 'Bahamas',
            price: '300',

        },
        {
            name: 'Playa Del Amor',
            image: 'https://www.nationalgeographic.com/content/dam/travel/2017-digital/best-beaches/playa-del-amor-mexico.ngsversion.1529422222271.adapt.1900.1.jpg',
            location: 'Mexico',
            price: '200',
        },
        {
            name: 'Source D\'Argent Seychelles',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/source.jpeg',
            location: 'Seychelles',
            price: '400',
        },
        {
            name: 'Reynisfjara Beach Iceland',
            image: 'https://bigseventravel.com/wp-content/uploads/2019/07/Grace-Bay-Turks-and-Caicos-1024x683.jpg',
            location: 'Iceland',
            price: '50',
        },
        {
            name: 'Praia do Amor Brazil',
            image: 'https://images.bestday.com/_lib/images/CONTENIDO-EDITORIAL/Blogs/Brasil/Miscelaneas/Melhores-Praias-para-Aproveitar-o-Verao/Praia-do-Amor-near-Pipa-Brazil.jpg',
            location: 'Brazil',
            price: '1000'
        },
        {
            name: 'Praia do Benagil Portugal',
            image: 'https://mansion-global-app.s3.amazonaws.com/stories/portugal-special-report-portuguese-beach-report/media/alcalead_shorthand-mr.jpg',
            location: 'Portugal',
            price: '900',
        },
        {
            name: 'Tayrona National Park, Colombia',
            image: 'https://theculturetrip.com/wp-content/uploads/2018/03/shutterstock_410041762.jpg',
            location: 'Colombia',
            price: '10000',
        },
    ];

    function render(results) {
        var cardContainer = document.querySelector('#results-cards-beaches');

        cardContainer.innerHTML = '';

        cardContainer.innerHTML = results.map(function (beach,index){
            return(`
                       
                        <div class = "container">
                           
                                <div class="row">
                                    <div class="col-md-3 col-sm-6">
                         
                                        <div class = "card">    
                                            
                                            <img src = "${beach.image}" class="img-fluid">
                                            <div class ="card-body">
                                                <h5 class = "card-title">${beach.name}</h5>
                                                <p class = "card-text">$${beach.price} BILL USD</p>
                                            </div>
                                            </img>
                                         </div>
                                     
                                     </div>
                                     
                                 </div>
                              
                           
                            
                        </div>
                        
                     
                `)
        }).reduce((a, b) => a.concat(b), "")    //a (empty string) same thing consistently. b is new thing. b element in list.
    }                                           //for loop under hood updating empty string a with an element b

    render(database);
})() //wrapping entire file with locally exec function
      //variable scope: local scope


