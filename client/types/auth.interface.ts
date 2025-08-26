import { IUser } from "./user.interface";

export interface ILoginFormData extends Pick<IUser, 'email' | 'password'> { }
export interface IRegisterFormData extends Pick<IUser, 'email' | 'password' | 'name'> { }