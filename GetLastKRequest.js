const getLatestKRequest = (requests, size) => {
    let distintReturn = new Set();
    if(typeof requests === 'object') {
        const revreq = requests.reverse()
        for(i = 0; i < revreq.length; i++) {
            if (distintReturn.size !== size) {
                distintReturn.add(revreq[i])
            }
            // prevent further query and resource usage when we are satisfied with client need
            if(distintReturn.size === size) {
                break;
            }
        }
    } else {
        return []
    }
    return distintReturn.size !== 0 ? Array.from(distintReturn) : [];
}

function main () {
    const k = 3;
    const requests = ["item1", "item2", "item3", "item1", "item3"];
    const result = getLatestKRequest(requests, k);
    console.log(result)
}

main()