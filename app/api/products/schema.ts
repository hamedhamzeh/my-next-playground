import { z } from "zod";
import schema from "../users/schema";

z.object({
    name: z.string().min(3),
    price: z.number().min(1).max(100)
});

export default schema;
