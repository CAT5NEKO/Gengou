export{}
/1901年以降の数値をランダムで出力するように提起/
const year = Math.round(Math.random() * 120) + 1901;
/出力された年号から元号を割り出す/
if (year < 1912){
    const gengou = year - 1867;
    console.log(`${year}年は明治${gengou}年`!)
}else if (year < 1926){
    const gengou = year - 1911;
    console.log(`${year}年は大正${gengou}年`!)
}else if (year < 1989){
    const gengou = year - 1925;
    console.log(`${year}年は昭和${gengou}年`!)
}else if (year < 2019){
    const gengou = year - 1988;
    console.log(`${year}年は平成${gengou}年`!)
}else {
    const gengou = year - 2018;
    console.log(`${year}年は令和${gengou}年`!)
}
