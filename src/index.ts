import 'reflect-metadata';
import { container } from 'tsyringe';
import { Container } from 'start/Container';
import { Container as AppContainer } from 'core/Container';

const app = container.resolve(Container) as AppContainer;
app.start();
