import 'reflect-metadata';
import { container } from 'tsyringe';
import { App } from 'boot/app';
import { Container } from 'common/Container';

const app = container.resolve(App) as Container;
app.boot();
