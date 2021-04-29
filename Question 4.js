// Object literal
let linkedList = {
    head: { data: 1, next: null },
    addNode: function(data) {
        if (this.head.next === null) {
            this.head.next = {
                data: data,
                next: null
            };
        } else {
            let node = this.head;
            while (node) {
                node = node.next;
            }
            node = {
                data: data,
                next: null
            };
        }
    },
    printNodes: function() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    },
    removeNode: function(data) {
        let node = this.head;
        while (node.next) {
            if ((node.data = data)) break;
        }
        node = node.next;
    }
};

let linkedListObject = Object.create(linkedList);
linkedListObject.addNode(2);
linkedListObject.printNodes();
linkedListObject.removeNode(2);
linkedListObject.printNodes();


// Constructor function
let LinkedList = function(initialData){
    this.head = {
        data: initialData,
        next: null
    };
}
LinkedList.prototype.addNode = function(data){
    if (this.head.next === null) {
        this.head.next = {
            data: data,
            next: null
        };
    } else {
        let node = this.head;
        while (node) {
            node = node.next;
        }
        node = {
            data: data,
            next: null
        };
    }
}
LinkedList.prototype.printNodes= function(){
    let node = this.head;
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}

LinkedList.prototype.removeNode = function(data){
    let node = this.head;
    while (node.next) {
        if ((node.data = data)) break;
    }
    node = node.next;
}

let linkedListFunction = new LinkedList(1);
linkedListFunction.addNode(2);
linkedListFunction.printNodes();
linkedListFunction.removeNode(2);
linkedListFunction.printNodes();
