// this function will replace one node of object with another

function replaceNode(obj, node, newNode) {

if (typeof obj === 'object') {
        for (var key in obj) {
            if (obj[key] === node) {
                obj[key] = newNode;
            } else {
                replaceNode(obj[key], node, newNode);
            }
        }
    }

}