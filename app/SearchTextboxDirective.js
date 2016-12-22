import $ from 'jquery';

let $timeout;
export default class SearchCardsTextbox {
    constructor(_$timeout) {
        this.template = "" +
            "<div style='float:left'>" +
            "    <input ng-model='mc.searchText' /> <button ng-click='mc.search()'>Search</button>" +
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