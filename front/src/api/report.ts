import {api} from "./cn_api";
import {useAuth} from "./authentication";
import {SupplierDto} from "../ts/SupplierDto";


export async function getReportEnrolled()
{
    // @ts-ignore
    let supplier : SupplierDto = useAuth().getAuth()?.supplier
    const { data } = await api().get('/api/v1/report/'+supplier.id);

    return data;
}