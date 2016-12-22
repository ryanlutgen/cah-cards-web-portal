let $http;
let angular = require('angular');

function prepareSearch(searchText, searchFuziness) {
    return "{\n" +
        "\"query\": {\n" +
        "    \"multi_match\" : {\n" +
        "        \"query\" : \"" + searchText + "\",\n" +
        "            \"fields\" : \"card_name\",\n" +
        "            \"fuzziness\" : \"" + searchFuziness + "\"\n" +
        "    }\n" +
        "}\n" +
    "}\n";
}

function parseResponse(response) {
    let formattedResponse = [];
    angular.forEach(response.data.hits.hits, (hit) => {
        formattedResponse.push(hit._source);
    });
    return formattedResponse;
}

export default class MainController {
    constructor(_$http) {
        $http = _$http;
        this.searchText = "";
        this.searchFuzziness = "0";
    }

    search() {
        var req = {
            method: 'POST',
            url: 'http://localhost:9200/cards-against-humanity-cards/_search',
            headers: {
                'Content-Type': 'application/json'
            },
            data: prepareSearch(this.searchText, this.searchFuzziness)
        };

        $http(req).then((response) => {
            this.searchResults = parseResponse(response);
            console.log(this.searchResults);
        }, () => {

        });
    }
}