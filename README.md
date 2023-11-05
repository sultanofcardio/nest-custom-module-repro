# NestJS Custom Module Minimal Reproduction

> [!NOTE]
> This issue is caused by a circular import and has been patched. To view the un-patched reproduction, see [1048376d][1048376d] 

The NestJS DI container is unable to resolve the value of `TEST_TOKEN`, despite it being provided by the `TestModule`.

Run `yarn start` to observe the error

[1048376d]: https://github.com/sultanofcardio/nest-custom-module-repro/tree/1048376d7b749ee9fe6e6f5c01c799763563b1b8
