export interface IRepositoryFunctions<T> {
    create: (data: T) => Promise<T>;
    createMany: (data: Array<T>) => Promise<Array<T>>;
    update: (data: T) => Promise<T>;
    updateMany: (data: Array<T>) => Promise<Array<T>>;
    delete: (data: T) => Promise<T>;
    deleteMany: (data: Array<T>) => Promise<Array<T>>;
    disable: (data: T) => Promise<T>;
    disableMany: (data: Array<T>) => Promise<Array<T>>;
}