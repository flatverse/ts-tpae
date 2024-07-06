import { PropertyDefinitionReference } from "./Reference"

/**
 * Represents a Part of a Thing definition for a game.
 * Not a Part instance as that should just be data/simple-JSON
 * 
 * A collection of Properties
 */
export interface Part {
  /**
   * unique, somewhat readable, string identifier for this type
   * Ideally, all-preferably-kebab-case
   */
  readonly type: string

  // FUTURE: editor metadata like label? tip? description? tags? disabled?

  /**
   * all of the properties that make up this part
   */
  readonly properties: {
    [key:string]:PropertyDefinitionReference
  }
}
