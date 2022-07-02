import {HelloServiceContract} from "@ioc:Hello/Hello";
import {HiServiceContract} from "@ioc:Hi/Hi";

export default class HelloService implements HelloServiceContract {
    private readonly num: number
    constructor(private hi: HiServiceContract) {
        this.num = Math.random()
    }
    sayHello(): string {
        return 'Heloo ' + this.num + this.hi.sayHi()
    }
}