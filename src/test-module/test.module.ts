import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TEST_TOKEN } from './constants';

@Module({
  providers: [
    {
      provide: TEST_TOKEN,
      useValue: 'World',
    },
    TestService,
  ],
})
export class TestModule {}
