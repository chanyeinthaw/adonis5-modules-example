import {HiServiceContract} from "@ioc:Hi/Hi";

export default class HiService implements HiServiceContract {
    private readonly num: number
    constructor() {
        this.num = Math.random()
    }
    sayHi(): string {
        return 'Hi ' + this.num
    }
}