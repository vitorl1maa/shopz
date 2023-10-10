import { createSchema } from "sanity";
import { schemaTypes } from ".";
import product from "./product";
import category from "./category";
import blockContent from "./blockContent";
import iPhones from "./iPhones";
import notebooks from "./notebooks";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, category, blockContent, iPhones, notebooks])
})