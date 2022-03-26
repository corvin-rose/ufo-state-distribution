
const DISTRIBUTION_MODE = 1;
const POPULATION_RATE_MODE = 2;
const DISTRIBUTION_MODE_COLOR = '#C91F37';
const POPULATION_RATE_MODE_COLOR = '#FFA631';

const MIN_CIRCLE_SIZE = 5;
const MAX_CIRCLE_SIZE = 25;    //old 100
const USA_POP = 311591917;

let mode = POPULATION_RATE_MODE;
let color;
if (mode == DISTRIBUTION_MODE) {
    color = DISTRIBUTION_MODE_COLOR;
} else if (mode == POPULATION_RATE_MODE) {
    color = POPULATION_RATE_MODE_COLOR;
}

let ufoDataObj = ufoData.replace(/\s{2,}/g, ';').split('\n').map(v => v.split(';'));
let geoDataObj = geoData.replace(/\s{2,}/g, ';').split('\n').map(v => v.split(';'));
let popDataObj = usaPopData.replace(/\./g, '').split('\n').map(v => v.split('\t'));

ufoDataObj.map(v => {
    let geo = geoDataObj.find(s => s[0] === v[0].toUpperCase());
    v.push(geo[1], geo[2], geo[3]);
    let pop = popDataObj.find(s => s[0] === v[4]);
    if (!pop) return;
    v.push(pop[1], v[1] / (pop[1] / 100000));
});


let mapContainer;
let canvas;
let ctx;
let ufoMap;
let dragging = false;
let maxVal = Math.max(...ufoDataObj.map(v => v[1] ? +v[1] : 0));

const mappa = new Mappa('Leaflet');

const options = {
    lat: 38,
    lng: -95,
    zoom: 4,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

document.addEventListener("DOMContentLoaded", function(event) {
    mapContainer = document.getElementById('map');
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');
    ufoMap = mappa.tileMap(options);
    ufoMap.overlay(mapContainer);

    setTimeout(() => {
        draw();
        
        let dragContainer = document.getElementsByClassName('leaflet-container')[0];
        dragContainer.addEventListener('mousedown', (e) => dragging = true);
        dragContainer.addEventListener('mouseup', (e) => dragging = false);
        dragContainer.addEventListener('mousemove', function(e) {
            if (dragging) {
                draw();
            }
        });
        window.addEventListener('mousewheel', function(e) {
            setTimeout(draw, 500);
        }, true);
        window.addEventListener('wheel', function(e) {
            setTimeout(draw, 500);
        }, true);

        let buttons = document.getElementsByTagName('a');
        for (let button of buttons) {
            button.addEventListener('click', function(e) {
                setTimeout(draw, 500);
            }, true);
        }
    }, 500);
});
window.addEventListener('resize', function() {
    draw();
});

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let data of ufoDataObj) {
        if (!data[2] || !data[3]) continue;
        const p = ufoMap.latLngToPixel(data[2], data[3]);
        let range = MAX_CIRCLE_SIZE - MIN_CIRCLE_SIZE;

        if (mode == DISTRIBUTION_MODE) {
            drawCircle(p.x, p.y, data[1] * range / maxVal + MIN_CIRCLE_SIZE);
        } else if (mode == POPULATION_RATE_MODE) {
            maxVal = Math.max(...ufoDataObj.map(v => v[6] ? +v[6] : 0));
            drawCircle(p.x, p.y, data[6] * range / maxVal + MIN_CIRCLE_SIZE);
        }
    }
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color + '44';
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}