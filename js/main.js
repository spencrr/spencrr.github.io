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
});

let getIP = new XMLHttpRequest();
getIP.open('GET', 'https://ipinfo.io/json', true);
getIP.onload = () => {
    let data = JSON.parse(getIP.responseText);
    data['timestamp'] = new Date();
    let sendIP = new XMLHttpRequest();
    sendIP.open('POST', 'https://spencercloud.tk/api/views', true);
    sendIP.setRequestHeader('Content-Type', 'application/json');
    sendIP.send(JSON.stringify(data));

};
getIP.send();