// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import AzureADProvider from "next-auth/providers/azure-ad";

export default NuxtAuthHandler({
  providers: [
    AzureADProvider.default({
      clientId: 'your client id here',
      clientSecret: 'your client secret here',
      tenantId: 'your tenant id here',
    }),
  ]
})