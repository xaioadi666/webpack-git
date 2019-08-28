function component() {
    let element = document.createElement('div');
    // lodash(目前通过一个script引入)对于执行这一行是必须的
    element.innerHTML = _.join(['Hello','webpack'],' ');
    return element;
}

document.body.appendChild(component());