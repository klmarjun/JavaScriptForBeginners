//Object computed property names
var action = 'sleep';
var activity = {
    awake(){
        console.log('The person is not in '+action);
    },
    [action](){
        console.log('The person is in '+action);
    }
}
activity.awake();
activity[action]();