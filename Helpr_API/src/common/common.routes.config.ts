import express from 'express';

export abstract class CommonRoutesConfig {
  public constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;

    this.configureRoutes();
  }

  protected app: express.Application;
  private name: string;

  public getName(): string {
    return this.name;
  }

  protected abstract configureRoutes(): express.Application;
}
