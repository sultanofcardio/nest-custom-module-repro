import {CanActivate, Inject, Injectable} from "@nestjs/common";
import {TEST_TOKEN} from "./test.module";
import {Observable} from "rxjs";

@Injectable()
export class TestService implements CanActivate {
    constructor(@Inject(TEST_TOKEN) value: string) {
        console.log(`Hello ${value}`)
    }

    canActivate(): boolean | Promise<boolean> | Observable<boolean> {
        return true;
    }
}
