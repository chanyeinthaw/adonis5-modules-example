declare module '@ioc:Hi/Hi' {
    export interface HiServiceContract {
        sayHi(): string
    }

    const Hi: HiServiceContract
    export default Hi
}