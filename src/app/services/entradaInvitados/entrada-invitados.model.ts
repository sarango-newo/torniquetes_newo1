import { BaseEntity } from 'src/model/base-entity';
import { Invitados } from '../invitados/invitados.model';
import { Sedes } from '../sedes/sedes.model';

export class EntradaInvitados implements BaseEntity {
    constructor(
        public id?: number,
        public registroFecha?: any,
        public salida?: boolean,
        public tiempoMaximo?: boolean,
        public sede?: Sedes,
        public invitado?: Invitados,
    ) {
        this.salida = false;
        this.tiempoMaximo = false;
    }
}
