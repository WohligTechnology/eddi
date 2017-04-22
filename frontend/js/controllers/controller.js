myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();


$scope.openModal = function() {
        var modalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                size: 'lg',
                windowClass: 'eddy-modal',
                templateUrl: "views/modal/login.html"
            });
};
            
$scope.openModal();

        $scope.mySlides = [
            'img/01.jpg',
            'img/02.jpg',
            'img/01.jpg'

        ];
        $scope.listdata = [
            '100% scholarship for few exceptional students',
            '30% assured scholarship for all students',
            'More than 30% scholarship for select students',
            'Part-time job assistance while studying',
            'Fulltime job assistance in Japan post studies',
            'Attractive career opportunities in India & overseas'

        ];
        $scope.course = [
            'Courses offered by O-HARA College Of Business',
            'National Civil Servants · Local Civil Servants',
            'Police Officer and Firefighter',
            'Certified Public Accountant / Tax Accountant',
            'Business · Accounting · Clerical · Sales',
            'Administrative Scrivener · Home Owner',
            'Information processing · SE · Programmer',
            'CG · Game · Web · Creator',
            'Medical Clerical / Medical Secretary',
            'Dental Hygienist',
            'Care Worker / Social Worker',
            'Childcare Professional / Kindergarten Teacher',
            'Dental Hygienist',
            'Sports Trainer',
            'Manga · Animation',
            'Voice actor · Narrator · Announcer',
            'Hotel · Travel tourism · Airline',
            'Bridal',
            'Beauty',
            'Hairdresser',
            'Confectionery · Bakery · Pastry Cheeses',
            'Pet',
            'Automobile Mechanic',
            'Emergency Life-Saving Assistant '

        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };
        $scope.services = [{
            img: 'img/v1.png',
            name: 'Counseling Students & Parents '
        }, {
            img: 'img/v2.png',
            name: 'Coaching in Japanese Language'
        }, {
            img: 'img/v3.png',
            name: 'Admission/Application Process'
        }, {
            img: 'img/v4.png',
            name: 'Student Visa Assistance'
        }];
        $scope.services2 = [{
            img: 'img/v5.png',
            name: 'Educational Loan Assistance '
        }, {
            img: 'img/v6.png',
            name: 'Foreign Exchange, Insurance and Ticketing'
        }, {
            img: 'img/v7.png',
            name: 'Admission/Application Process'
        }, {
            img: 'img/v8.png',
            name: 'Accommodation & Local Assistance'
        }];

        // $scope.openUpload = function () {
        //     console.log("clla");
        //     $uibModal.open({
        //         animation: true,
        //         templateUrl: 'views/modal/login.html',
        //         scope: $scope,
        //         size: 'lg',
        //         // windowClass: 'modal-content-radi0'
        //     });
        // };


    })

    .controller('AboutoharaCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about-ohara.html");
        TemplateService.title = "About O-Hara"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/about-ahora.jpg',
            'img/ohara2.jpg',
            'img/ohara3.jpg'

        ];

    })
    .controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about-us.html");
        TemplateService.title = "About Edwork"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ServicesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/services.html");
        TemplateService.title = "Services"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/contact.html");
        TemplateService.title = "Contact"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('CourseCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/course.html");
        TemplateService.title = "Course"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ExploreljapanCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/explore-japan.html");
        TemplateService.title = "Explore Japan"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/slide-1.jpg',
            'img/slide-2.jpg',
            'img/slide-3.jpg'

        ];

    })
    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });
