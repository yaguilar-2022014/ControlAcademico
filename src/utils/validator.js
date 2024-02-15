import { hash } from "bcrypt"

export const encrypt = (password)=>{
    try {
        return hash(password, 10)
    } catch (err) {
        console.log(err)
        return err
    }
}