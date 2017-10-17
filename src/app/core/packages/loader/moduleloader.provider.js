import {NgModuleFactoryLoader} from '@angular/core';
import {ModuleLoader} from './moduleloader';

export const ModuleLoaderProvider = {
  provide: NgModuleFactoryLoader,
  useClass: ModuleLoader,
};
