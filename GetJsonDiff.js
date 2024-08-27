const getJSONDiff = (json1, json2) => {
    const return_diff = []
    const js1 = Object.entries(JSON.parse(json1))
    const js2 = JSON.parse(json2)
    const js2Keys = Object.keys(JSON.parse(json2))
    
    js1.forEach(([key, value]) => {
        if(js2Keys.includes(key)) {
            // this implies that the key exist
            if(value !== js2[key]) {
                return_diff.push(key.toString());
            }
        }
    })
    return return_diff.sort();
}


function main() {
    const json1 = '{"hello":"world0", "ha": "hello", "you": "me"}';
    const json2 = '{"hello":"world", "ha": "hello0", "you": "me"}';

    const result = getJSONDiff(json1, json2);
    console.log(result);
}

main();