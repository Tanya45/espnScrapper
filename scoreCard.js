const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const request = require('request')
const cheerio = require('cheerio')

request(url,cb)

function cb(error, response, html){
    if(error){
        console.log(error)
    }else{
        extractMatchDetails(html)
    }
}

function extractMatchDetails(html){
    let $ = cheerio.load(html) 

    let descElem = $('.header-info .description')
    let descArr = descElem.text().split(',')
    // for(let i=0;i<descArr.length;i++){
    //     console.log(descArr[i])
    // }

    let venue = descArr[1].trim()
    let date = descArr[2].trim()

    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text')
    console.log(result.text())
    console.log(venue)
    console.log(date)
    
}