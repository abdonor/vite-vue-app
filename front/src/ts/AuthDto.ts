import {SupplierDto} from "./SupplierDto";
import {UserDto} from "./UsetDto";

export interface AuthDto {
    isLoggingOut : boolean,
    jwt : string,
    supplier: SupplierDto,
    user: UserDto,
}