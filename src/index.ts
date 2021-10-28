import 'reflect-metadata';
import { container } from 'tsyringe';
import { Container } from 'boot/container';
import { Container as BaseContainer } from 'common/Container';

const app = container.resolve(Container) as BaseContainer;
app.boot();
