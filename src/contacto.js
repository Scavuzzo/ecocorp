import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core';


const Contacto = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const enviar = data => {
        console.log(data);
        alert("Mensaje enviado, por favor revise la consola");
    };

    const useStyles = makeStyles({
        btn: {
            backgroundColor: 'var(--color-brown)',
            marginTop: "20px",
            "&:hover": {
                backgroundColor: 'var(--color-brown0)',
            }
        },

    });
    const classes = useStyles();

    return (
        <div className="bg-brown">
            <div className="container contact">
                <div className="contact__form">
                    <form onSubmit={handleSubmit(enviar)}>
                        <h2>CONTACTO</h2>
                        
                        {errors.nombre && <><span className="contact__errors">Ingrese un nombre válido (máx. 14)</span></>}
                        <input type="text" {...register('nombre', { required: true, maxLength: "14", minLength: "2", pattern: /^[A-Za-z]+$/i })} placeholder="Nombre"/>
                        {errors.apellido && <><span className="contact__errors">Ingrese un apellido válido (máx. 14)</span></>}
                        <input type="text" {...register("apellido", { required: true, maxLength: "14", minLength: "2", pattern: /^[A-Za-z]+$/i })} placeholder="Apellido"/>
                        {errors.email && <><span className="contact__errors">Ingrese un correo válido</span></>}
                        <input type="text" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Correo electrónico" />
                        {errors.nacimiento && <><span className="contact__errors">Ingrese una fecha válida</span></>}
                        <input type="date" {...register("nacimiento", { required: true })} placeholder="Fecha de nacimiento"/>
                        {errors.mensaje && <><span className="contact__errors">Ingrese un mensaje válido</span></>}
                        <textarea {...register("mensaje", { required: true })} width="450px" rows="10" placeholder="Mensaje"></textarea>
                        <Button variant="contained" type="submit" className={classes.btn}>Enviar</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto;