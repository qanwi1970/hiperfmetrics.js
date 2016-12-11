/*!
 * Created by Bill DeLude on 12/9/2016.
 */
(function() {

    var metricName = "";
    var tasks = [];
    var currentTask = {};

    function create( name ) {
        metricName = name;
    }

    function start( stepName ) {
        currentTask = new {"stepName":stepName, "startTime": new Date(), "stopTime": {}};
    }

    function stop() {
        currentTask.stopTime = new Date();
        tasks.push(currentTask);
    }

    return {
        create: create,
        start: start,
        stop: stop
    };
}());