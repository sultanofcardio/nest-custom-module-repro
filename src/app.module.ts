import {Module} from '@nestjs/common';
import {TestModule} from "./test-module/test.module";

@Module({
  imports: [TestModule],
})
export class AppModule {}
