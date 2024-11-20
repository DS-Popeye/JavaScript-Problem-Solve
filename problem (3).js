function queryStringToObject(query) {
    const params = query.split("?")[1];
    const result = {};

    if (params) {
        const pairs = params.split("&");

        pairs.forEach((param) => {
            const [key, value] = param.split("=");
            if (key && value) {
                result[decodeURIComponent(key)] = decodeURIComponent(value);
            }
        });
    }

    return result;
}

const queryString = "?name=Hasib&age=23&city=Dhaka";
const queryObject = queryStringToObject(queryString);
console.log(queryObject);