class Producto{
    constructor(nombre, codigo, precio, cantidad){
        this.nombre=nombre;
        this.codigo=codigo;
        this.precio=precio;
        this.cantidad=cantidad;
        this.izquierdo=null;
        this.derecho=null;
    }
}
class BinaryTree{
    constructor(){
      this.raiz=null;
    }
    agregar(nuevo){
      if (this.raiz==null){
        this.raiz = nuevo;
      }else 
      this.agregate(nuevo,this.raiz);
    }
    agregate(nuevo, nodox){
      if (nuevo.codigo < nodox.codigo){
        if (nodox.izquierdo == null){
          nodox.izquierdo = nuevo;
        }else 
            this.agregate(nuevo, nodox.izquierdo);
      }else 
      if (nodox.derecho == null){
        nodox.derecho = nuevo;
      }else 
      this.agregate(nuevo, nodox.derecho);
    }

    buscar(codigo){
      if(this.raiz==null){
        return null;
      }else if(this.raiz.codigo==codigo){
        return this.raiz;
      }
      else{
        return this.buscarRec(codigo,this.raiz);
      }
    }

    buscarRec(codigo,nodox){
      if (codigo<nodox.codigo){
        if(nodox.izquierdo==null){
          return null;
        }else if (nodox.izquierdo==codigo){
          return nodox.izquierdo;
        }else{
            this.buscarRec(codigo,nodox.izquierdo);
        }
      }else{
        if(nodox.derecho==null){
          return null;
        }else if(nodox.derecho==codigo){
          return nodox.derecho;
        }else{
          this.buscarRec(codigo,nodox.derecho);
        }
      }
    }
  

    preOrder(){
        if (this.raiz == null){
          return "";
        }else
        return this.preOrderRec(this.raiz);
      }
    
      preOrderRec(nodox){
        let info= nodox.codigo;
        if (nodox.izquierdo != null){
          info += "-" + this.preOrderRec(nodox.izquierdo);
        }
        if (nodox.derecho != null){
          info += "-" + this.preOrderRec(nodox.derecho);
        }
        return info;
      }
  
    inOrder(){
      if (this.raiz == null){
        return "";
      }else
      return this.inOrderRec(this.raiz);
    }
  
    inOrderRec (nodox){
      let info = "";
      if (nodox.izquierdo != null){
        info += this.inOrderRec(nodox.izquierdo);
      }
      info += nodox.codigo + "-";
      if (nodox.derecho != null){
        info += this.inOrderRec(nodox.derecho);
      }
      return info;
    }

    postOrder(){
        if(this.raiz==null){
            return "";
        }else{
            return this.postOrderRec(this.raiz);
        }
    }

    postOrderRec(nodox){
        let info="";
        if(nodox.izquierdo!=null){
            info+=this.postOrderRec(nodox.izquierdo)+"-";
        }
        if(nodox.derecho!=null){
            info+=this.postOrderRec(nodox.derecho)+"-";
        }
        info+=nodox.codigo;
        return info;
    }
  }