import 'reflect-metadata';
import { container } from 'tsyringe';
import { Container } from '@boot/container';
import { BaseContainer } from '@app/common/BaseContainer';

const app = container.resolve(Container) as BaseContainer;
app.boot();
