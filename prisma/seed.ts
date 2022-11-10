import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: any = [
  {
    username: 'admin',
    password: '$2a$08$OQF3mPEsZVp0yVLEi4lSUugWnHW2vY9TQkI/NHFpp/hDSqFnWNMMy',
    role: 'Operator'
  }
]
const palletData: any = [
  {
    palletNo: '001',
    part1: 'part A5',
    part2: 'part A2',
    part3: 'part A3',
    part4: 'part A1',
    status: 'Finished'
  },
  {
    palletNo: '002',
    part1: 'part A5',
    part2: 'part A2',
    part3: 'part A3',
    part4: 'part A1',
    status: 'Repack'
  }
]
async function main() {
  console.log(`Start seeding ...`)
  //create many not support sqlite
  await prisma.user.createMany({
    data: userData
  })
  await prisma.pallet.createMany({
    data: palletData
  })
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
