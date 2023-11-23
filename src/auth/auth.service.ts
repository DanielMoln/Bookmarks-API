import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService
{
  constructor(prisma: PrismaService) {}

  signin()
  {

  }

  signup(dto: AuthDto)
  {

  }
}