import {Injectable, Compiler} from '@angular/core';

const NAMESPACE = 'pizzashop';
const SEPARATOR = '#';

@Injectable()
export class ModuleLoader {
  constructor(compiler: Compiler) {
    this.compiler = compiler;
  }
  load(path) {
    let {modulePath, moduleNamespace, moduleName} = this.splitPath(path);
    return new Promise((resolve, reject) => {
      let loadedModule =
        window[NAMESPACE] && window[NAMESPACE][moduleNamespace];
      if (loadedModule) {
        resolve(loadedModule);
      }
      let script = document.createElement('script');
      script.src = modulePath;
      script.onload = () => {
        this.compiler
          .compileModuleAsync(window[NAMESPACE][moduleNamespace][moduleName])
          .then((ngModule) => {
            script.remove();
            resolve(ngModule);
          })
          .catch((error) => {
            reject(error);
          });
      };
      script.onerror = (error) => {
        reject(`Could not load ${path}`);
      };
      document.head.appendChild(script);
    });
  }
  splitPath(path) {
    let [modulePath, moduleNamespace, moduleName] = path.split(SEPARATOR);
    return {modulePath, moduleNamespace, moduleName};
  }
}
