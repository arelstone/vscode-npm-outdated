import type { RequestOptions } from "@rheactor/rheactor-core";

export type ExecCallback = (error: string | null, stdout: string | null) => void;

interface MockedModulesBehavior {
  childProcessExec:
    | ((command: string, options: ExecCallback | undefined, callback?: ExecCallback) => unknown)
    | undefined;
  fsPromisesAccess: ((file: string) => Promise<void>) | undefined;
  fsPromisesReadFile: ((file: string) => Promise<string>) | undefined;
  utilsCacheEnabled: (() => boolean) | undefined;
  utilsRequestSafe: (<T>(options: RequestOptions) => Promise<T | undefined>) | undefined;
}

export const MockedModules: MockedModulesBehavior = {
  childProcessExec: undefined,
  fsPromisesAccess: undefined,
  fsPromisesReadFile: undefined,
  utilsCacheEnabled: undefined,
  utilsRequestSafe: undefined,
};
