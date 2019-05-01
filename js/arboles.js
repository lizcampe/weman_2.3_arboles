class Tree {
	constructor () {
	this.root =null;
}



function Node() {
	this.valor = val;
	this.derecho = null;
	this.izquierdo= null;
}

add(node) {

}

addArbol(personas) {
		if (this.isEmpty()) {
			this.root = new Node(val)
			return
		}

	var aux = this.root
	while (aux) {
		if (val<aux.value) {
			if (aux.left) {
				aux=aux.left
				} else{
					aux.left=new Node(val)
					return
				}
			}else {
			 if (aux.right) {
			 	aux= aux.right
			 } else {
			 	aux.right=new Node (val)
			 	return
			 }
		 }
	}
}


function isEmpty() {
	return this.root ===null
}

for (let i in personas) 
	(addArbol(personas[i]) )


}
var arbol = new Tree();
addArbol ("prueba");


