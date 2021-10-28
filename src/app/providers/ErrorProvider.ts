import { Server } from 'boot/server';
import { autoInjectable, singleton } from 'tsyringe';
import { ProviderInterface } from 'interfaces/ProviderInterface';
import { TypeORMError } from 'typeorm';

@singleton()
@autoInjectable()
export class ErrorProvider implements ProviderInterface {

  constructor(private server: Server) {}

  boot(): void {
    this.server.app.use((error, req, res, next) => {
      const status = error.status || 400;
      if(error) {
        res.status(status);
        if(error instanceof TypeORMError) {
          return res.json({
            code: error.name,
            error: error.message
          });
        }
        return res.json({
          error: error.message
        });
      }
      return next();
    })    
  }
}