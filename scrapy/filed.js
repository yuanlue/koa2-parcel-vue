
const puppeteer = require('puppeteer')
var events = require('events');
var emitter = new events.EventEmitter();
emitter.setMaxListeners(20)
 getNum=(text)=>{
  var value = text.replace(/[^0-9]/ig,""); 
  return value
 }
;(async () => {
  const browser = await puppeteer.launch({
  	headless:true,
  	executablePath:"/Applications/Chromium 2.app/Contents/MacOS/Chromium"
  });
  const page = await browser.newPage();
  await page.goto('http://www.51job.com/?from=baidupz');
  
  await page.click('#kwdselectid')
  await page.type('#kwdselectid','前端')
  await page.click('.ush button')
 
  // await page.waitForNavigation();
	 await page.waitFor(3000)
    const pageNum = await page.evaluate(()=>{
      return parseInt($('.p_in .td').text().replace(/[^0-9]/ig,""))
    })
    for (let i =0 ;i < pageNum;i++){
      console.log('正在爬取前程无忧网站')
         await page.waitFor(3000)

          const singeArr = await page.evaluate(() => {
          let singeAr = [] 
          $('.el').each(function(index,item){
           if(!$(item).find('.t1 a').text()){
            return 
           }
             singeAr.push({
              careerId:$(item).find('.t1 a').attr('href').split('/')[4].split('?')[0].replace(/[^0-9]/ig,""),
              title:$(item).find('.t1 a').text(),
              company:$(item).find('.t2 a').text(),
              address:$(item).find('.t3').text(),
              salary:$(item).find('.t4').text(),
              createDate:$(item).find('.t5').text()
             })

          })
          return singeAr
  });
          for(let item in singeArr){
            page.waitFor(2000)
              if(singeArr[item]){
              await page.goto(`http://jobs.51job.com/xian/${singeArr[item].careerId}.html?s=01&t=0`)
              let detail =await  page.evaluate(()=>{
                return $('.job_msg').html()
              })
              singeArr[item].detail = detail
              await process.send(singeArr[item])
              await page.goBack()
            }
          }
         await page.click('.p_in li:last-child>a')
    }
  // console.log(content)
 // console.log(content[0])
 let testarr= [] 
  //process.exit(0)
  await browser.close();


})();

