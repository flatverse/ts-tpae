
/*
 * JSON types adapted from
 * https://dev.to/ankittanna/how-to-create-a-type-for-complex-json-object-in-typescript-d81 
 */
// export type JSONValue = string|number|boolean|null|JSONObject|JSONList
// export interface JSONObject {
//   [key:string]:JSONValue
// }
// export interface JSONList extends Array<JSONValue> {}

/**
 * A property definition, basically just a type
 * A property instance is simply a key/id, and value
 */
// export interface Property {
//   /**
//    * list is an array of properties
//    * table is a dictionar/object of properties
//    */
//   type: "string"|"number"|"boolean"|"null"|"list"|"table"
//   // FUTURE: editor metadata like label? tip? description? tags? disabled?
// }

// export interface Reference {
//   type: "thing"|"part"|"property"
// }

export type PropertyType = "string"|"number"|"boolean"|"null"|"list"|"table"|"thing"|"reference"
