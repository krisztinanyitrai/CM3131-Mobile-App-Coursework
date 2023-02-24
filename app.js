// Tabs navigation

    const homeNav = document.querySelector('#home-nav');
    const homePage = document.querySelector('#home-page');
    homeNav.root = homePage;

    const newsNav = document.querySelector('#news-nav');
    const newsPage = document.querySelector('#news-page');
    newsNav.root = newsPage;

    const ideasNav = document.querySelector('#ideas-nav');
    const ideasPage = document.querySelector('#ideas-page');
    ideasNav.root = ideasPage;

// Day display

    const day = new Date();
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const dayOfWeek = daysOfWeek[day.getDay()];
    document.getElementById("day").innerHTML = dayOfWeek + ",";

// Date display

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth();
    let dd = today.getDate();

    var monthNames = [        
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var month = monthNames[mm];

    const formattedToday = dd + ' ' + month + ' ' + yyyy;

    document.getElementById('date').innerHTML = formattedToday;

// Add points

    const addPointsBtn = document.getElementById('add-points-btn');
    const pointsTotal = document.getElementById('points-total');

    addPointsBtn.addEventListener('click', AddPoints)
    
    function AddPoints() {

        const currentPoints = parseInt(pointsTotal.textContent);
        const newPoints = currentPoints + 15;

        pointsTotal.textContent = newPoints;
    };