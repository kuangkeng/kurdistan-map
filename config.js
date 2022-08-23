var config = {
    style: 'mapbox://styles/kuangkeng/cl3i2x6wd005m14l4eb3ur983',
    // style: 'mapbox://styles/kuangkeng/cl74iooua002z14ny861ik79u',
    accessToken: 'pk.eyJ1Ijoia3VhbmdrZW5nIiwiYSI6ImNsNXVibXhrNzBlNzUzamxhaHlrbHJsemcifQ.pi3jb5qDip_6YHTMDxDO5Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    // projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'chapter0',
            alignment: 'center',
            hidden: false,
            description: 'The smoke coming from the oil refineries is spread by a process known as ‘flaring’, where oil wells burn the excess gas they can’t store or use.',
            location: {
                center: [43.64343, 20.40104],
                // center: [43.64343, 33.40104],
                zoom: 3,
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
            //rotateAnimation: false,
        },
        {
            id: 'chapter1',
            alignment: 'center',
            // image: 'images/placeholder-800x600.png',
            description: 'We used satellite data to map incidents of flaring all around Iraq, pinpointing which parts of the country were most at risk.',
            location: {
                center: [43.64343, 30.40104],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5,
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
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
            id: 'chapter2',
            alignment: 'center',
            hidden: false,
            description: 'Using data collected from 2018, we identified Erbil and its surrounding villages — including fringe communities living in Kawergosk and Lalish — as showing the highest incidents of flaring.',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5,
            },
            mapAnimation: 'flyTo',        
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
        },
        {
            id: 'chapter3',
            alignment: 'center',
            hidden: false,
            description: 'With residents suffering deteriorating health, the Kurdistan RegionalGovernment (KRG) issued oil and gas companies a directive to phase-out all flaring by 2023, giving them 18 months to comply.',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
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
        },
        {
            id: 'chapter4',
            alignment: 'center',
            hidden: false,
            description: 'Our investigation used satellite data from 2018 onwards to measure the progress companies had made at the halfway mark, nine months after the government directed them to stop flaring.',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
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
            id: 'chapter5',
            alignment: 'center',
            hidden: false,
            description: 'We tracked changes in real-time satellite imagery to gather the locations and times of hot pixel detections, to identify flaring hotspots from 2018 to April 2022. We calculated the total incidents of flaring to identify the level of flaring in the Kurdistan region throughout the ‘phase out’ period.',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: 'hide_timeseries_btn',
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
                {
                    layer: 'kurdistan-flaring-above2',
                    opacity: 0,
                    duration: 0
                },
            ],
        },
        {
            id: 'chapter6',
            alignment: 'center',
            hidden: false,
            description: 'Although the winter months showed a drop off in flaring activity, historical data reveals flaring levels have not decreased relative to previous years (2018-19).',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: 'start_timeseries_kurd',
            onChapterEnter: [
                {
                    layer: 'kurdistan-flaring',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'kurdistan-flaring-above2',
                    opacity: 1,
                    duration: 500
                },
            ],
        },
        {
            id: 'chapter7',
            alignment: 'center',
            hidden: false,
            image: 'images/placeholder-800x600.png',
            description: 'As of May 2022, flaring levels have begun to creep back up again.Our findings project that flaring will increase, not decrease, relative to 2021 — in violation of the commitment made by the KRG.',
            location: {
                center: [44.40172, 34.53583],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: 'hide_timeseries_btn',
            onChapterEnter: [],
        },
        {
            id: 'chapter8',
            alignment: 'center',
            hidden: false,
            description: 'Companies serious about phasing out flaring would need to implement infrastructure in order to capture the gas or sell it, reducing the amount they burn. But our findings show the reverse is happening.',
        },

    ]
};

allmonths = ['2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12','2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09','2021-10','2021-11','2021-12','2022-01','2022-02','2022-03','2022-04'];
allmonths_name =['Oct 2018','Nov 2018','Dec 2018','Jan 2019','Feb 2019','Mar 2019','Apr 2019','May 2019','Jun 2019','Jul 2019','Aug 2019','Sep 2019','Oct 2019','Nov 2019','Dec 2019','Jan 2020','Feb 2020','Mar 2020','Apr 2020','May 2020','Jun 2020','Jul 2020','Aug 2020','Sep 2020','Oct 2020','Nov 2020','Dec 2020','Jan 2021','Feb 2021','Mar 2021','Apr 2021','May 2021','Jun 2021','Jul 2021','Aug 2021','Sep 2021','Oct 2021','Nov 2021','Dec 2021','Jan 2022','Feb 2022','Mar 2022','Apr 2022'];
var timeseries_kurd;

function hide_timeseries_btn(){
    document.getElementById("timeseries_btn_kurd").style.display = 'none';
    document.getElementById("timeseries_btn_kurd").innerHTML = '';
    clearInterval(timeseries_kurd);
    map.setFilter('kurdistan-flaring-above2',['==', 'Flaring_time_str', '']); //so that the timeseries start with no marker
}

function start_timeseries_kurd() {
    var counter = 0;
    document.getElementById("timeseries_btn_kurd").style.pointerEvents = 'none';
    timeseries_kurd = setInterval(function(){
        filter_kurdistan(counter)
        counter++;
        if(counter === allmonths.length) {
            clearInterval(timeseries_kurd);
            document.getElementById("timeseries_btn_kurd").innerHTML = 'Play again';
            document.getElementById("timeseries_btn_kurd").style.pointerEvents = 'auto';
        }
    }, 350);
    document.getElementById("timeseries_btn_kurd").style.display = 'block';
    document.getElementById("timeseries_btn_kurd").innerHTML = allmonths_name[0]; //set the first month else it would appear blank
}

function filter_kurdistan(counter){
    map.setFilter('kurdistan-flaring-above2', ['==', 'Flaring_time_str', allmonths[counter]]);
    document.getElementById("timeseries_btn_kurd").innerHTML = allmonths_name[counter];
}

document.getElementById("timeseries_btn_kurd").addEventListener("click",start_timeseries_kurd );