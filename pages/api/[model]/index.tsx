import { prisma } from "pages/api/api";

export default async function handle(req: any, res: any) {
    if (req.method === 'GET') {
        let itens = await prisma.item.findMany();
        await prisma.$disconnect();
        res.json(itens);
    }

    if (req.method === 'POST') {
        try {
            let itens = await prisma.item.create({
                data: {}
            });
            res.json(itens);
            await prisma.$disconnect();
        } catch (err) {
            console.error('error', err);
            return res.status(500).json(`Can't reach database server`);
        } finally {
            await prisma.$disconnect();
        }
    }
}