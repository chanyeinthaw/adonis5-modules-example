import {inject} from "@adonisjs/fold";
import Hello, {HelloServiceContract} from "@ioc:Hello/Hello";
import Hi, {HiServiceContract} from "@ioc:Hi/Hi";

/**
 * Constructor property injection
 */
@inject(['@ioc:Hello/Hello', '@ioc:Hi/Hi'])
export default class HomeController {
    constructor(
        private helloService: HelloServiceContract,
        private hiService: HiServiceContract
    ) {}

    /**
     * Method parameter injection
     */
    @inject([null, '@ioc:Hello/Hello', "@ioc:Hi/Hi"])
    public index(_, helloServiceParam: HelloServiceContract, hiServiceParam: HiServiceContract) {
        return {
            hi: {
                prop: this.hiService.sayHi(),
                param: hiServiceParam.sayHi(),
                singleton: Hi.sayHi()
            },
            hello: {
                prop: this.helloService.sayHello(),
                param: helloServiceParam.sayHello(),
                singleton: Hello.sayHello()
            },
        }
    }
}