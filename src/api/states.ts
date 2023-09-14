import { get } from "./request.config";

export async function getStates() {
    try {
        const data = await get('https://servicodados.ibge.gov.br/api/v1/localidades/estados', true);

        return data;
    } catch (err: any) {
        console.log(err);

        return err;
    };
};