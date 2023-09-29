import { get } from "./request.config";

export async function getCities(id: string) {
    try {
        const data = await get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`, true);

        return data;
    } catch (err: any) {
        console.error(err);
        return err;
    };
};