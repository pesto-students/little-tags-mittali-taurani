export function getRelevantProducts(data, query=""){
    
    const keywords = query.split(" ");
    const dataWithScore = data.map((item)=> {
            return {
                ...item, score: getScore(item, keywords)
            }
    });
    dataWithScore.sort((a,b)=> b.score - a.score)
    return dataWithScore;
}


function getScore(item, words){
    let score = 0;
    words.map((word)=>{
        let trimWord = word.trim();
        if(item["brand_name"] && item["brand_name"].toLowerCase().includes(trimWord)){
            score+=0.5;
        }
        if(item["brand"] && item["brand"].toLowerCase().includes(trimWord)){
            score+=0.5;
        }
        if(item["short_description"] && item["short_description"].toLowerCase().includes(trimWord)){
            score+=0.3;
        }
        if(item["color1"] && item["color1"].toLowerCase().includes(trimWord)){
            score+=0.7;
        }
    })
    return score;
}