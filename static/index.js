const temp1 = document.querySelector('[name="temp1"]')

const getTemp1 = () => fetch('./temp1')
    .then(r => r.text())

const updateTemp1 = () => getTemp1()
    .then(v => temp1.value = v)

poll(updateTemp1, 5000)
