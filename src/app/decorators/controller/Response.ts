export const defineJsonResponse = (wrapper: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const next = args[args.length - 1];
    try {
      const result = await originalMethod.apply(this, args);
      const res = args.find((e) => e.json);
      return res.json({ [wrapper]: result });
    } catch(error) {
      return next(error);
    }
  }

  return descriptor;
}

export const defineTextResponse = (descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const next = args[args.length - 1];
    try {
      const result = await originalMethod.apply(this, args);
      const res = args.find((e) => e.send);
      return res.send(result);
    } catch(error) {
      return next(error);
    }
  }

  return descriptor;
}

export const JsonResponse = (wrapper = 'data'): MethodDecorator => {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineJsonResponse(wrapper, descriptor);
  };
};

export const TextResponse = (): MethodDecorator => {
  return (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineTextResponse(descriptor);
  };
};