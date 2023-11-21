import { prismaClient } from "../config";

class PartnerService {

    static getAll() {
        return prismaClient.partners.findMany();
    }

    static async getDomains(): Promise<string[]> {

        const result = await prismaClient.partners.findMany({
            select: {
                domain: true
            }
        });

        return result.map(d => d.domain);
    }

}

export default PartnerService;