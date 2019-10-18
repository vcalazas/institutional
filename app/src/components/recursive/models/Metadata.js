
import MicroData from './MicroData'

export default class Metadata extends MicroData {
    constructor() {
        super()
        this.t = ""; // type
        this.st = ""; // subtype
        this.f = ""; // field
        /*
        * this.db são referencias aos objetos em que se deseja um valor compartilhados entre todos eles.
        * cada String deste atributo refere-se aos 'f' (field) de um ou mais elementos.
        * */
        this.db = ""; // data bind
        this.ori = 0; // orientation
        this.v = ""; // value
        this.dv = ""; // default value
        this.d = ""; // description
        this.m = ""; // mask
        this.md = [];  // Metadata List
        this.r = false; // required
        this.su = ""; // status
    }

    
}