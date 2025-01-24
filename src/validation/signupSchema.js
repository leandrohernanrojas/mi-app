import {object,string,ref} from 'yup';

export const signupSchema = object({
    confirmarPassword: string()
    .oneOf([ref("password")],"Passwords no coinciden")
    .required("Confirmar password es requerido"),
    password: string()
    .min(8,"Password debe tener al menos 8 caracteres")
    .required("Password es requerido")
    .matches(/^(?=.*[A-Z])(?=.*\d).+$/,"Password debe tener al menos una letra mayuscula y un numero"),
    email: string()
    .email("Email no es valido")
    .required("Email es requerido"),
    
})