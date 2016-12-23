import $ from 'jquery';

let $timeout;
export default class SearchCardsTextbox {
    constructor(_$timeout) {
        this.template = "" +
                "<div style='float:left'>" +
                "    <div><label>Search Text: </label><input ng-model='mc.searchText' ng-enter='mc.search()' /> <button ng-click='mc.search()'>Search</button></div>" +
                "    <div><label>Search Fuzziness: </label><select ng-model='mc.searchFuzziness'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select></div>" +
                "</div>" +
                "<div class='jsonview' style='text-align: left; float:right; width: 50%; overflow-y: scroll'>" +
                "    <json-formatter json=\"mc.searchResults\" open=\"2\"></json-formatter>" +
                "</div>";

        $timeout = _$timeout;
    }

    link() {
        $timeout(() => {
            let viewHeight = $(document).height() - 42;
            $('.jsonview').css({height: viewHeight + "px"});
        }, 1000)
    }
}