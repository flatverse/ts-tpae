export interface Reference {
  type: "property"|"part"|"thing"
  definition: boolean // AKA not an instance
  path: string
}

export interface PropertyDefinitionReference extends Reference {
  type: "property"
  definition: true
}

export interface PartDefinitionReference extends Reference {
  type: "part"
  definition: true
}

export interface ThingDefinitionReference extends Reference {
  type: "thing"
  definition: true
}
