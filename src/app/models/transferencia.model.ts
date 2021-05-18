export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string | number;
  data?: string; //essa interrogação descreve o atributo como opcional
}
