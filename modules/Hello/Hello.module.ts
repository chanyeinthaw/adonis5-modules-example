declare module '@ioc:Hello/Hello' {
    import { HelloServiceContract } from "Modules/Hello/Contracts/Hello.service";

    const HelloService: HelloServiceContract

    export default HelloService
    export {
        HelloServiceContract
    }
}