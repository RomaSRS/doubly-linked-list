const Node = require('./node');

class LinkedList {
    constructor(length = 0, _head = null, _tail = null) {
		this.length = length;
		this._head = _head;
		this._tail = _tail;
	}

	append(data) {
		var node = new Node(data);
		
		if (this.length) {
			this._tail.next = node;
			node.prev = this._tail;
			this._tail = node;
		} else {
			this._head = node;
			this._tail = node;
		}

		this.length++;

		return this;
	}

    head() {
		if (this._head) {
			return this._head.data;
		} else {
			return null;
		}
	}

    tail() {
		if (this._tail) {
			return this._tail.data;
		} else {
			return null;
		}
	}

    at(index) {
		var currentNode = this._head,
        count = 0;

		if (index > this.length) {
			return null;
		}

		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}

		return currentNode.data;
	}

    insertAt(index, data) { 
		var sNode = this._head, 
		insNode = new Node(data), 
		count = 0; 

		if (!sNode) { 
			this.append(data); 
		} else { 
			while (count < index) { 
				sNode = sNode.next; 
				count++; 
			} 

			insNode.prev = sNode.prev; 
			insNode.next = sNode; 
			sNode.prev.next = insNode; 
			sNode.prev = insNode; 

			this.length++; 
		} 

		return this; 
	}

    isEmpty() {
		if (this._head === null) {
			return true;
		} else {
			return false;
		}
	}

    clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
		return this;
	}

    deleteAt(index) { 
		var sNode = this._head, 
		count = 0; 

		if (index != 0) { 
			while (count < index) { 
			sNode = sNode.next; 
			count++; 
			} 

			sNode.prev.next = sNode.next; 
			sNode.next.prev = sNode.prev; 
		} else { 
			if ( this.length == 1 ) { 
				this.clear(); 
			} else { 
				if (index == 0) { 
					this._head = this._head.next; 
					this._head.prev = null; 
				} 
				if (index == this.length - 1) { 
					this._tail = this._tail.prev; 
					this._tail.next = null; 
				} 
			} 
		} 
		return this; 
} 

    reverse() { 
		while (true) { 
			this._head.prev = [this._head.next, this._head.next = this._head.prev][0]; 

			if (!this._head.prev) {
				break;
			} else {
				this._head = this._head.prev;
			}
		} 

		var sNode = this._head, 
		count = 1; 

		while (count < this.length) { 
			sNode = sNode.next; 
			count++; 
		} 

		this._tail = sNode; 

		return this; 
	}

    indexOf(data) {
		var currentNode = this._head,
        count = 0;

		while (count < this.length) {
			if (data === currentNode.data) {
				return count;
			} else {
				currentNode = currentNode.next;
				count++;
			}
		}
		
		if (count === this.length) {
			return -1;
		}
	}
}

module.exports = LinkedList;
