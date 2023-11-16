const btn = document.querySelector("#agregar");
btn.addEventListener("click", () => {
    Swal.fire({
        title: "Listo!",
        text: "El alumno ha sido ingresado",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
    })
})

const btnGuardarStorage = document.querySelector("#guardar");
btnGuardarStorage.addEventListener("click", () => {
    Swal.fire({
        title: "Guardado en el storage!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
    })
}) 

const btnCancelar = document.querySelector("#eliminarAlumnos");
btnCancelar.addEventListener("click", () => {
    Swal.fire({
        title:"Quieres eliminar la lista de alumnos?",
        icon: "question",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No",
        cancelButtonText: "Cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire("Eliminada!", "", "success")
            document.getElementById("alumnos").style.display = "none";
        }else if(result.isDenied){
            Swal.fire("No se ha borrado la lista de alumnos", "", "info")
        }
    })
}) 
