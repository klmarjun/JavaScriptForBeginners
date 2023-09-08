const propName1='Action2';
const actions = {
    action() {
        console.log('action1')
    },
    [propName1](){
        console.log('action2')
    }
}
actions.action()
actions[propName1]()
actions.Action2()