const { PrismaClient } = require("@prisma/client");

const globalForPrisma = global;

exports.prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = exports.prisma;
