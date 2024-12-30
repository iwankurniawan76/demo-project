import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// async function main() {
//   const allUsers = await prisma.user.findMany();
//   console.log(allUsers);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
// export async function GET() {
//   try {
//     const allUsers = await prisma.user.findMany();
//     return NextResponse.json({ posts: allUsers });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: error.message });
//   }
// }

export async function GET() {
  try {
    const alluser = await prisma.user.create({
      data: {
        email: "iwan@prisma.io",
        name: "iwan",
      },
    });
    return NextResponse.json({ posts: alluser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
