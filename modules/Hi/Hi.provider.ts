import HiService from "./Services/Hi.service";
import ModuleProvider from "../../lib/ModuleProvider";

export default class HiProvider extends ModuleProvider{
    resolve = () => ({
        'Hi/Hi': () => new HiService()
    })
}