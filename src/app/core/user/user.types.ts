export interface User
{
    id: string;
    name: string;
    email: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Buyer_Full_Name__c: string;
    avatar?: string;
    status?: string;
}
