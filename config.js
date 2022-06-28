var config = {
    style: 'mapbox://styles/kuangkeng/cl3i2x6wd005m14l4eb3ur983',
    accessToken: 'pk.eyJ1Ijoia3VhbmdrZW5nIiwiYSI6ImNsM2kyZjU4cjBsczYzam54MW1scm0xMzAifQ.2ilwuyf9futhdJCeK2_0tg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'chapter1',
            alignment: 'center',
            hidden: false,
            image: 'images/placeholder-800x600.png',
            description: 'Text box 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [43.64343, 33.40104],
                zoom: 5.28,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter2',
            alignment: 'center',
            hidden: false,
            // image: 'images/placeholder-800x600.png',
            description: 'Text box 2',
            location: {
                center: [43.64343, 33.40104],
                zoom: 5.28,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'kurdistan-line',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'kurdistan-fill',
                    opacity: .5,
                    duration: 500
                },
            ],
            onChapterExit: [
                {
                    layer: 'kurdistan-line',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'kurdistan-fill',
                    opacity: 0,
                    duration: 500
                },
            ]
        },
        {
            id: 'chapter3',
            alignment: 'center',
            hidden: false,
            // image: 'images/placeholder-800x600.png',
            description: 'Text box 3',
            location: {
                center: [44.40172, 35.53583],
                zoom: 6.57,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'kurdistan-flaring',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'kurdistan-fill',
                    opacity: 0,
                    duration: 500
                },
            ],
            onChapterExit: [
                {
                    layer: 'kurdistan-flaring',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'kurdistan-fill',
                    opacity: .5,
                    duration: 500
                },
            ]
        },
        {
            id: 'chapter4',
            alignment: 'center',
            hidden: false,
            // image: 'images/placeholder-800x600.png',
            description: 'Text box 4',
            location: {
                center: [43.64343, 33.40104],
                zoom: 5.28,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'show_timeseries',
            onChapterEnter: [
                {
                    layer: 'kurdistan-flaring',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-1',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-2',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-3',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-4',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'kurdistan-fill',
                    opacity: 0,
                    duration: 500
                },
            ],
            onChapterExit: [
                {
                    layer: 'kurdistan-flaring',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-1',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-2',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-3',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-4',
                    opacity: 0,
                    duration: 500
                },
            ]
        },
        {
            id: 'chapter5',
            alignment: 'center',
            hidden: false,
            // image: 'images/placeholder-800x600.png',
            description: 'Text box 5',
            location: {
                center: [43.64343, 33.40104],
                zoom: 5.28,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hide_timeseries',
            onChapterEnter: [
                {
                    layer: 'iraq-flaring2-month-1',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-2',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-3',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'iraq-flaring2-month-4',
                    opacity: 0,
                    duration: 500
                },

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter6',
            alignment: 'center',
            hidden: false,
            // image: 'images/placeholder-800x600.png',
            description: 'Text box 6',
            location: {
                center: [43.64343, 33.40104],
                zoom: 5.28,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [


            ],
            onChapterExit: [

            ]
        },
        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: 'images/placeholder-800x600.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
dates = ['2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07'];
allmonths = ['2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12','2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12','2022-01','2022-02','2022-03','2022-04'];
months1 = ['2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07'];
months2 = ['2019-07','2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03','2020-04','2020-05'];
months3 = ['2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12','2021-01','2021-02','2021-03','2021-04','2021-05'];
months4 = ['2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12','2022-01','2022-02','2022-03','2022-04'];

function show_timeseries(){
    console.log("show timeseries");
    document.getElementById("timeseries_btn").style.display = 'block';
}

function hide_timeseries(){
    console.log("hide timeseries");
    document.getElementById("timeseries_btn").style.display = 'none';
}

function start_timeseries() {
    console.log("start timeseries");
    var counter = 0;
    var a = setInterval(function(){
        filter(counter)
        counter++;
        if(counter === allmonths.length) {
            clearInterval(a);
            document.getElementById("timeseries_btn").innerHTML = 'Play again';
        }
    }, 350);
}

function filter(counter){
    map.setFilter('iraq-flaring2-month-1', ['==', 'Flaring_time_str', allmonths[counter]]);
    map.setFilter('iraq-flaring2-month-2', ['==', 'Flaring_time_str', allmonths[counter]]);
    map.setFilter('iraq-flaring2-month-3', ['==', 'Flaring_time_str', allmonths[counter]]);
    map.setFilter('iraq-flaring2-month-4', ['==', 'Flaring_time_str', allmonths[counter]]);
    console.log(allmonths[counter]);
    document.getElementById("timeseries_btn").innerHTML = allmonths[counter];
}

document.getElementById("timeseries_btn").addEventListener("click",start_timeseries );



