export type FieldsErrors = {
  [field: string]: string[]
  // exemplo: name: required, string, 255...
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors // mensagens de erro
  validatedData: PropsValidated // campos
  validate(data: any): boolean // método que fará a validação
}
