class CsvParserUtils {

    parseCsvFilesToJson(files) {
        return new Promise((resolve, reject) => {
            if (files && files.length > 0) {
                const file = files.item(0);
                const reader = new FileReader();
                reader.readAsText(file);
                reader.onload = (e) => {
                    const csvString = reader.result;
                    const json = this.convertCsvToJson(csvString);
                    resolve(json);
                };
            } else {
                reject('No files found.');
            }
        });
    }

    convertCsvToJson(string, headers, quoteChar = '"', delimiter = ',') {
        const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs');
        const match = string => [...string.matchAll(regex)].map(match => match[2])
            .filter((_, i, a) => i < a.length - 1); // cut off blank match at end

        const lines = string.split('\n');
        const heads = headers || match(lines.splice(0, 1)[0]);

        return lines.map(line => match(line).reduce((acc, cur, i) => ({
            ...acc,
            [heads[i] || `extra_${i}`]: (cur.length > 0) ? (Number(cur) || cur) : null
        }), {}));
    }

}

export default new CsvParserUtils();
