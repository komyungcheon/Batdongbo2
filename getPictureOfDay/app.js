const axios = require("axios");
function getPictureOfDay() {
    return new Promise(resolve => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=0XbW5PsFnsd0C2Rpt12CuijcObV34FE93ZA4rRSF`)
            .then(function (json) {
                resolve(json.data)
            })
    })
}
getPictureOfDay().then((result)=>{
    console.log(result.hdurl)
})



