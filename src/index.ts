import 'reflect-metadata';
import { container } from 'tsyringe';
import { Container } from 'start';

const app = container.resolve(Container);
app.start();
