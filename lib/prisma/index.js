import { PrismaClient } from '@prisma/client'
import { fieldEncryptionMiddleware } from 'prisma-field-encryption'

const prisma = new PrismaClient()

prisma.$use(fieldEncryptionMiddleware())

export default prisma