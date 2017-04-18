myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "About Eduwork",
        classis: "active",
        anchor: "about-us",
          subnav: []
        // subnav: [{
        //     name: "Subnav1",
        //     classis: "active",
        //     anchor: "home"
        // }]
    }, {
        name: "Course",
        classis: "active",
        anchor: "course",
        subnav: []
    }, {
        name: "Explore Japan",
        classis: "active",
        anchor: "explore-japan",
        subnav: []
    }, {
        name: "About o-hara",
        classis: "active",
        anchor: "about-ohara",
        subnav: []
    }, {
        name: "Services",
        classis: "active",
        anchor: "services",
        subnav: []
    }, {
        name: "Contact us",
        classis: "active",
        anchor: "contact",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});
