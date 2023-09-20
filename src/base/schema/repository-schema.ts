export type RepositorySchemaKey = {
    type: any | any[] | Function;
    required?: boolean;
}

export type RepositorySchema = {
    [key: string]: RepositorySchemaKey;
}