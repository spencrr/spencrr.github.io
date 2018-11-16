// document.getElementById('numbers').graph.addEventListener('click', () => {
//     let go = parseInt(numbers.go.value)
//     let stop = parseInt(numbers.stop.value)
//     let choose = parseInt(numbers.choose.value)
//     let n = parseInt(numbers.n.value)
//     let y = Array(go + 1)
//     y.fill(0)
//     for (let i = 0; i < n; i++) {
//         let f = ((g, s, c) => {
//             let init = g;
//             for (let j = 0; j < c; j++) {
//                 let h = Math.floor(Math.random() * (g + s))
//                 if (h < g) {
//                     g--
//                 } else {
//                     s--
//                 }
//             }
//             return init - g
//         })(go, stop, choose)
//         y[f]++
//     }
//     let x = Array(go + 1).fill(0).map((v, i) => i)
//     Plotly.newPlot('graph', [{ x, y, type: 'scatter', mode: 'marker' }], { title: 'Cars That Do Not Stop', xaxis: { title: 'Number of Cars', range: [0, Math.min(go, choose)] }, yaxis: { title: 'Times Stopped', range: [0, Math.max(y)] } })
// }, false)

document.getElementById('numbers').graph.addEventListener('click', () => {
    let p = parseFloat(numbers.p.value)
    let n = parseInt(numbers.n.value)
    let points = 1000

    let y = Array(points).fill(0)
    let x = y.map((element, index) => {
        return index / points
    })
    y = Math.n

    console.log(x, y)

    Plotly.newPlot('graph',
        [{ x, y, type: 'scatter', mode: 'marker' }], {
            title: 'Binomial Distribution',
            // xaxis: { title: 'Number of Cars', range: [0, Math.min(go, choose)] },
            // yaxis: { title: 'Times Stopped', range: [0, Math.max(y)] }
        })
}, false)