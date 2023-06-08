import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getUser: protectedProcedure.query(({ ctx }) => {
    return;
  }),
});
