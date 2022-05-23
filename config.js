var config = {
    style: 'mapbox://styles/kuangkeng/cl3i2x6wd005m14l4eb3ur983',
    accessToken: 'pk.eyJ1Ijoia3VhbmdrZW5nIiwiYSI6ImNqeWcwcDN4NjAxcHEzbm5nNXhkNzUwb2sifQ.CE1Z60qZF-AdOPW0FskZkw',
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
            id: 'slug-style-id',
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
            id: 'second-identifier',
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
            callback: '',
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
            id: 'third-identifier',
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
            callback: '',
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
                    layer: 'kurdistan-line',
                    opacity: 1,
                    duration: 500
                }
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
