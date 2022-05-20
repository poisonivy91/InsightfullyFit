    function maleBMR() {

        let w = document.getElementById("weight").value / 2.2
        let h = document.getElementById("height").value
        let a = document.getElementById("age").value
        let results = 10 * w + 6.25 * h - 5 * a + 5
    }

    function FemaleBMR() {

        let w = document.getElementById("weight").value / 2.2
        let h = document.getElementById("height").value * 2.54
        let a = document.getElementById("age").value
        let results = 10 * w + 6.25 * h - 5 * a -161
    }