
import mitt,{Emitter} from 'mitt'
type Events = {
    'foo':string,
    'form-item-created':ValidateFunc
}
export type ValidateFunc = ()=>boolean
export const mitter:Emitter<Events>  = mitt<Events>()