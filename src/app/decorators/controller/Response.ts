export const defineJsonResponse = (wrapper: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const result = await originalMethod.apply(this, args);
    return args[1].json({ [wrapper]: result });
  }

  return descriptor;
}

export const defineTextResponse = (wrapper: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const result = await originalMethod.apply(this, args);
    return args[1].send(result);
  }

  return descriptor;
}

export const JsonResponse = (wrapper = 'data'): MethodDecorator => {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineJsonResponse(wrapper, descriptor);
  };
};

export const TextResponse = (wrapper = 'data'): MethodDecorator => {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineTextResponse(wrapper, descriptor);
  };
};