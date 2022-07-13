import type { HTTP_GET } from "./../../path-types/pet/findByStatus.types.js";
import type { Pet } from "./../../components/Pet.js";
import { PetSchema } from "./../../components/Pet.js";
export const GET: HTTP_GET = ({ query, context, tools }) => {
  const statusCode = tools.oneOf(["200", "400"]);

  if (statusCode === "200") {
    if (tools.accepts("application/xml")) {
      return {
        status: 200,
        contentType: "application/xml",
        body: tools.randomFromSchema({
          type: "array",
          items: PetSchema,
        }) as Array<Pet>,
      };
    }
    if (tools.accepts("application/json")) {
      return {
        status: 200,
        contentType: "application/json",
        body: tools.randomFromSchema({
          type: "array",
          items: PetSchema,
        }) as Array<Pet>,
      };
    }
  }
  if (statusCode === "400") {
    return {
      status: 400,
    };
  }

  return {
    status: 415,
    contentType: "text/plain",
    body: "HTTP 415: Unsupported Media Type",
  };
};
