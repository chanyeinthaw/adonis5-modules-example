import HelloService from "./Services/Hello.service";
import ModuleProvider from "../../lib/ModuleProvider";

export default class HelloProvider extends ModuleProvider {
    resolve = () => ({
        'Hello/Hello': () => new HelloService(this.resolveBinding('Hi/Hi'))
    })
}