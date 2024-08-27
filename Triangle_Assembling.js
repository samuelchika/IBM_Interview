const isValid = (a, b, c) => {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

const assemble_triangle = (triangleToy) => {
    console.log(typeof triangleToy)
    let options = [];
    if(typeof triangleToy == 'object') {
        triangleToy.forEach(data => {
            const tri = data.split(" ");
            if (tri.length === 3) {
                console.log(isValid(tri[0], tri[1], tri[2]))
                // validate the sides
                if (isValid(tri[0], tri[1], tri[2])) {
                    if(tri[0] === tri[1]  && tri[1] === tri[2]) {
                        options.push("Equilateral")
                    } else if (tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[3]) {
                        options.push("Isoseles")
                    } else {
                        options.push("None of these");
                    }
                } else {
                    options.push('None of these')
                }
            } else {
                options.push('None of these')
            }
        })
    } else {
        return []
    }
    return options;
}

function main() {
    const triangleToy = ['2 2 1', '3 3 3', '3 4 5', '1 1 3'];
    const result = assemble_triangle(triangleToy);
    console.log(result)
}

main()