let typed = new Typed('.interests', {
    strings: ['SpaceX Enthusiast', 'Maker', 'Developer',
        'Tech Visionary', 'Computer Scientist', 'Photographer', 'Beta Tester'
    ],
    typeSpeed: 30,
    backSpeed: 30,
    startDelay: 500,
    backDelay: 1500,
    loop: true,
    shuffle: true,
    smartBackspace: true,
});

let getIP = new XMLHttpRequest();
getIP.open('GET', 'https://ipinfo.io/json', true);
getIP.onload = () => {
    let data = JSON.parse(getIP.responseText);
    data['iat'] = new Date();
    let sendIP = new XMLHttpRequest();
    sendIP.open("POST", 'http://35.202.160.152:5000/api/log', true);
    sendIP.setRequestHeader('Content-Type', 'application/json');
    sendIP.send(JSON.stringify(data));

};
getIP.send();