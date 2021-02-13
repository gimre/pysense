const makeGraph = (title, container) => {
    const opts = {
        title,
        width: 800,
        height: 600,
        cursor: {
            drag: {
                setScale: false,
            }
        },
        select: {
            show: false,
        },
        series: [
            {},
            {
                label: 'Temperature',
                scale: '%',
                value: (u, v) => v == null ? "-" : v.toFixed(1),
                stroke: 'red',
            },
        ],
        axes: [
            {},
            {
                scale: '%',
                values: (u, vals, space) => vals.map(v => v.toFixed(1)),
            },
        ]
    };

    return new uPlot(opts, [[], []], container);
}

const poll = (fn, timeout) =>
    void fn() || setInterval(fn, timeout)
