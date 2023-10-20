import { Inject, Injectable } from '@nestjs/common';
import { TEST_TOKEN } from './test.module';

@Injectable()
export class TestService {
  constructor(@Inject(TEST_TOKEN) value: string) {
    console.log(`Hello ${value}`);
  }
}
