import 'reflect-metadata';
import { container } from 'tsyringe';
import { AppContainer } from 'boot/container';
import { Container } from 'common/Container';

const app = container.resolve(AppContainer) as Container;
app.boot();
