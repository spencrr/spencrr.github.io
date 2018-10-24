document.getElementById('numbers').graph.addEventListener('click', () => {
    let go = parseInt(numbers.go.value)
    let stop = parseInt(numbers.stop.value)
    let choose = parseInt(numbers.choose.value)
    let n = parseInt(numbers.n.value)
    let y = Array(go + 1)
    y.fill(0)
    for (let i = 0; i < n; i++) {
        let f = ((g, s, c) => {
            let init = g;
            for (let j = 0; j < c; j++) {
                let h = Math.floor(Math.random() * (g + s))
                if (h < g) {
                    g--
                } else {
                    s--
                }
            }
            return init - g
        })(go, stop, choose)
        y[f]++
    }
    let x = Array(go + 1).fill(0).map((v, i) => i)
    Plotly.newPlot('graph', [{ x, y, type: 'scatter', mode: 'marker' }], { title: 'Cars That Do Not Stop', xaxis: { range: [0, go] }, yaxis: { range: [0, Math.max(y)] } })
}, false)

