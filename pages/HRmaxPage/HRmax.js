function view(num)
        {
            document.getElementById("result").value+=num
        }

        function compute()
        {
            let x = document.getElementById("result").value
            let y = eval(x)
            document.getElementById("result").value = y
        }

        function clr()
        {
            document.getElementById("result").value = ""
        }

        //50%
        function fiftyperc() {

            let HRmax = document.getElementById("getperc").value
            let results = HRmax * 0.50
            document.getElementById("getperc").value = results
        }

        //60%
        function sixtyperc() {

            let HRmax = document.getElementById("get60perc").value
            let results = HRmax * 0.60
            document.getElementById("get60perc").value = results
        }

        //70%
        function seventyperc() {

            let HRmax = document.getElementById("get70perc").value
            let results = HRmax * 0.70
            document.getElementById("get70perc").value = results
        }

        //80%
        function eightyperc() {

            let HRmax = document.getElementById("get80perc").value
            let results = HRmax * 0.80
            document.getElementById("get80perc").value = results
        }

        //90%
        function ninetyperc() {

            let HRmax = document.getElementById("get90perc").value
            let results = HRmax * 0.90
            document.getElementById("get90perc").value = results
        }

        //100%
        function fullperc() {

            let HRmax = document.getElementById("get100perc").value
            let results = HRmax * 0.10
            document.getElementById("get100perc").value = results
        }