import { PartDefinitionReference } from "./Reference"

/**
 * Represents a Thing Definition for a game.
 * Not a Thing instance as that should just be data/simple-JSON
 * 
 * A collection of Parts
 */
export class Thing {
  /**
   * unique, somewhat readable, string identifier for this type
   * Ideally, all-preferably-kebab-case
   */
  readonly type: string

  /**
   * all of the properties that make up this part
   */
  readonly properties: {
    [key:string]:PartDefinitionReference
  }
}
