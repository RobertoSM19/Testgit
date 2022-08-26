let bi=new BinaryTree();
const btnAdd=document.getElementById("btnAdd");
const btnPre=document.getElementById("btnPre");
const btnPos=document.getElementById("btnPos");
const btnIn=document.getElementById("btnIn");
const btnFin=document.getElementById("btnFin");
let res=document.getElementById("detalles");

btnAdd.addEventListener('click',()=>{
    let nombre=document.getElementById("nombre").value;
    let codigo=document.getElementById("codigo").value;
    let precio=document.getElementById("precio").value;
    let cantidad=document.getElementById("cantidad").value;
    let prod=new Producto(nombre,codigo,precio,cantidad);
    bi.agregar(prod);
    res.innerHTML+=`<p>Se agrego el producto ${prod.nombre}.</p>`;
    document.getElementById("nombre").value="";
    document.getElementById("codigo").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
});

btnPre.addEventListener('click',()=>{
    res.innerHTML+=`<p>${bi.preOrder()}</p><br>`;
});

btnPos.addEventListener('click',()=>{
    res.innerHTML+=`<p>${bi.postOrder()}</p><br>`;
});

btnIn.addEventListener('click',()=>{
    res.innerHTML+=`<p>${bi.inOrder()}</p><br>`;
});

btnFin.addEventListener('click',()=>{
    let codigo=document.getElementById("codigo").value;
    let prod=bi.buscar(codigo);
    if(prod==null){
        res.innerHTML+=`<p>El producto no existe.</p>`;
    } else{
        return res.innerHTML+=`<p>El producto tiene el nombre: ${prod.nombre}</p>`;
    }
});