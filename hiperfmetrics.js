/*!
 * Created by Bill DeLude on 12/9/2016.
 */
(function() {

    var metricName = "";

    function create( name ) {
        metricName = name;
    }

    function start( stepName ) {

    }

    function stop() {

    }

    return {
        create: create,
        start: start,
        stop: stop
    };
}());