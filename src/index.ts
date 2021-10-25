import 'reflect-metadata';
import { container } from 'tsyringe';
import { Container } from '@boot/container';

const app = container.resolve(Container);
app.boot();
