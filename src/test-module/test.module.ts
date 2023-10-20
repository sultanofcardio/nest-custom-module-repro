import { Module } from '@nestjs/common';
import { TestService } from './test.service';

export const TEST_TOKEN = 'TEST_TOKEN' as const;

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
