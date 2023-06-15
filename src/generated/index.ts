/** unique or primary key constraints on table "apiKeys" */
export enum ApiKeys_Constraint {
  /** unique or primary key constraint on columns "prefix" */
  ApiKeyPkey = 'apiKey_pkey'
}

/** select columns of table "apiKeys" */
export enum ApiKeys_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Key = 'key',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Prefix = 'prefix',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "apiKeys" */
export enum ApiKeys_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Key = 'key',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Prefix = 'prefix',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "authorities" */
export enum Authorities_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuthoritiesPkey = 'authorities_pkey'
}

/** select columns of table "authorities" */
export enum Authorities_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "authorities" */
export enum Authorities_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** unique or primary key constraints on table "integrations" */
export enum Integrations_Constraint {
  /** unique or primary key constraint on columns "name" */
  IntegrationsNameKey = 'integrations_name_key',
  /** unique or primary key constraint on columns "id" */
  IntegrationsPkey = 'integrations_pkey'
}

export enum Integrations_Enum {
  /** Square */
  Square = 'square'
}

/** select columns of table "integrations" */
export enum Integrations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** update columns of table "integrations" */
export enum Integrations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** unique or primary key constraints on table "members" */
export enum Members_Constraint {
  /** unique or primary key constraint on columns "network", "walletAddress", "superAdminAddress", "orgId" */
  MembersPkey = 'members_pkey'
}

/** select columns of table "members" */
export enum Members_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "members" */
export enum Members_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "network" */
export enum Network_Constraint {
  /** unique or primary key constraint on columns "name" */
  NetworkPkey = 'network_pkey'
}

export enum Network_Enum {
  Devnet = 'DEVNET',
  Localnet = 'LOCALNET',
  Mainnet = 'MAINNET'
}

/** select columns of table "network" */
export enum Network_Select_Column {
  /** column name */
  Name = 'name'
}

/** update columns of table "network" */
export enum Network_Update_Column {
  /** column name */
  Name = 'name'
}

/** unique or primary key constraints on table "nfts" */
export enum Nfts_Constraint {
  /** unique or primary key constraint on columns "mintAddress" */
  NftsPkey = 'nfts_pkey'
}

/** select columns of table "nfts" */
export enum Nfts_Select_Column {
  /** column name */
  CollectionAddress = 'collectionAddress',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  OwnerAddress = 'ownerAddress',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "nfts" */
export enum Nfts_Update_Column {
  /** column name */
  CollectionAddress = 'collectionAddress',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  OwnerAddress = 'ownerAddress',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** unique or primary key constraints on table "oauthTokens" */
export enum OauthTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  OauthTokensPkey = 'oauthTokens_pkey'
}

/** select columns of table "oauthTokens" */
export enum OauthTokens_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletIntegrationId = 'walletIntegrationId'
}

/** update columns of table "oauthTokens" */
export enum OauthTokens_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletIntegrationId = 'walletIntegrationId'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "orgs" */
export enum Orgs_Constraint {
  /** unique or primary key constraint on columns "network", "superAdminAddress", "id" */
  OrgPkey = 'org_pkey'
}

/** select columns of table "orgs" */
export enum Orgs_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EncryptedAuthorityKey = 'encryptedAuthorityKey',
  /** column name */
  Id = 'id',
  /** column name */
  Iv = 'iv',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress'
}

/** update columns of table "orgs" */
export enum Orgs_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EncryptedAuthorityKey = 'encryptedAuthorityKey',
  /** column name */
  Id = 'id',
  /** column name */
  Iv = 'iv',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress'
}

/** unique or primary key constraints on table "plans" */
export enum Plans_Constraint {
  /** unique or primary key constraint on columns "type" */
  SubscriptionsPkey = 'subscriptions_pkey'
}

export enum Plans_Enum {
  Developer = 'DEVELOPER',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Starter = 'STARTER'
}

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  Type = 'type'
}

/** update columns of table "plans" */
export enum Plans_Update_Column {
  /** column name */
  Type = 'type'
}

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "network", "mintAddress" */
  ProjectsMintAddressNetworkKey = 'projects_mintAddress_network_key',
  /** unique or primary key constraint on columns "network", "superAdminAddress", "id", "transferable", "compressed", "orgId" */
  ProjectsPkey = 'projects_pkey'
}

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  Compressed = 'compressed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Semifungible = 'semifungible',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Views = 'views'
}

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  Compressed = 'compressed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Semifungible = 'semifungible',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Views = 'views'
}

/** unique or primary key constraints on table "requests" */
export enum Requests_Constraint {
  /** unique or primary key constraint on columns "id" */
  RequestsPkey = 'requests_pkey'
}

/** select columns of table "requests" */
export enum Requests_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Endpoint = 'endpoint',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Network = 'network',
  /** column name */
  Query = 'query',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "requests" */
export enum Requests_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Endpoint = 'endpoint',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Network = 'network',
  /** column name */
  Query = 'query',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "responses" */
export enum Responses_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResponsesPkey = 'responses_pkey',
  /** unique or primary key constraint on columns "requestId" */
  ResponsesRequestIdKey = 'responses_requestId_key'
}

/** select columns of table "responses" */
export enum Responses_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Status = 'status'
}

/** update columns of table "responses" */
export enum Responses_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Status = 'status'
}

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint on columns "name" */
  StatusPkey = 'status_pkey'
}

export enum Status_Enum {
  Burned = 'burned',
  Confirmed = 'confirmed',
  Failed = 'failed',
  Pending = 'pending',
  Processing = 'processing'
}

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Name = 'name'
}

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Name = 'name'
}

/** unique or primary key constraints on table "subscriptions" */
export enum Subscriptions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscriptionsPkey1 = 'subscriptions_pkey1',
  /** unique or primary key constraint on columns "walletAddress" */
  SubscriptionsWalletAddressKey = 'subscriptions_walletAddress_key'
}

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Plan = 'plan',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "subscriptions" */
export enum Subscriptions_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Plan = 'plan',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "tokenManagers" */
export enum TokenManagers_Constraint {
  /** unique or primary key constraint on columns "mintAddress" */
  TokenManagersMintAddressKey = 'tokenManagers_mintAddress_key',
  /** unique or primary key constraint on columns "address" */
  TokenManagersPkey = 'tokenManagers_pkey'
}

/** select columns of table "tokenManagers" */
export enum TokenManagers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Otp = 'otp',
  /** column name */
  RecipientAddress = 'recipientAddress',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "tokenManagers" */
export enum TokenManagers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Otp = 'otp',
  /** column name */
  RecipientAddress = 'recipientAddress',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** unique or primary key constraints on table "transactionTypes" */
export enum TransactionTypes_Constraint {
  /** unique or primary key constraint on columns "type" */
  JobTypesPkey = 'jobTypes_pkey'
}

export enum TransactionTypes_Enum {
  ClaimBadge = 'CLAIM_BADGE',
  CollectionAdd = 'COLLECTION_ADD',
  CollectionCreate = 'COLLECTION_CREATE',
  CollectionCreateDeprecated = 'COLLECTION_CREATE_DEPRECATED',
  CompressedProjectCreate = 'COMPRESSED_PROJECT_CREATE',
  CompressedProjectNftBatch = 'COMPRESSED_PROJECT_NFT_BATCH',
  CompressedProjectNftCreate = 'COMPRESSED_PROJECT_NFT_CREATE',
  CompressedProjectSftBatch = 'COMPRESSED_PROJECT_SFT_BATCH',
  CompressedProjectSftCreate = 'COMPRESSED_PROJECT_SFT_CREATE',
  ConfirmTransaction = 'CONFIRM_TRANSACTION',
  Initialize = 'INITIALIZE',
  ManagedNftRevoke = 'MANAGED_NFT_REVOKE',
  NftCreate = 'NFT_CREATE',
  NftCreateV2 = 'NFT_CREATE_V2',
  NftUpdate = 'NFT_UPDATE',
  OrgCreate = 'ORG_CREATE',
  OrgMemberAdd = 'ORG_MEMBER_ADD',
  ProjectCreate = 'PROJECT_CREATE',
  ProjectNftBurn = 'PROJECT_NFT_BURN',
  ProjectNftCreate = 'PROJECT_NFT_CREATE',
  ProjectNftRevoke = 'PROJECT_NFT_REVOKE',
  ProjectNftUpdate = 'PROJECT_NFT_UPDATE',
  ProjectUpdate = 'PROJECT_UPDATE'
}

/** select columns of table "transactionTypes" */
export enum TransactionTypes_Select_Column {
  /** column name */
  Type = 'type'
}

/** update columns of table "transactionTypes" */
export enum TransactionTypes_Update_Column {
  /** column name */
  Type = 'type'
}

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  JobsPkey = 'jobs_pkey'
}

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  RequestId = 'requestId',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "trees" */
export enum Trees_Constraint {
  /** unique or primary key constraint on columns "network", "address" */
  TreesPkey = 'trees_pkey'
}

/** select columns of table "trees" */
export enum Trees_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Capacity = 'capacity',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Index = 'index',
  /** column name */
  Network = 'network',
  /** column name */
  ProjectMintAddress = 'projectMintAddress'
}

/** update columns of table "trees" */
export enum Trees_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Capacity = 'capacity',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Index = 'index',
  /** column name */
  Network = 'network',
  /** column name */
  ProjectMintAddress = 'projectMintAddress'
}

/** unique or primary key constraints on table "triggers" */
export enum Triggers_Constraint {
  /** unique or primary key constraint on columns "id" */
  TriggersPkey = 'triggers_pkey'
}

/** select columns of table "triggers" */
export enum Triggers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionType = 'transactionType',
  /** column name */
  WebhookId = 'webhookId'
}

/** update columns of table "triggers" */
export enum Triggers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionType = 'transactionType',
  /** column name */
  WebhookId = 'webhookId'
}

/** unique or primary key constraints on table "unfts" */
export enum Unfts_Constraint {
  /** unique or primary key constraint on columns "network", "projectId", "superAdminAddress", "id", "transferable", "compressed", "orgId" */
  UnftsPkey = 'unfts_pkey'
}

/** select columns of table "unfts" */
export enum Unfts_Select_Column {
  /** column name */
  ClaimerAddress = 'claimerAddress',
  /** column name */
  Compressed = 'compressed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  NonceAddress = 'nonceAddress',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Otp = 'otp',
  /** column name */
  OwnerAddress = 'ownerAddress',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "unfts" */
export enum Unfts_Update_Column {
  /** column name */
  ClaimerAddress = 'claimerAddress',
  /** column name */
  Compressed = 'compressed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LookupTableAddress = 'lookupTableAddress',
  /** column name */
  MintAddress = 'mintAddress',
  /** column name */
  Network = 'network',
  /** column name */
  NonceAddress = 'nonceAddress',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Otp = 'otp',
  /** column name */
  OwnerAddress = 'ownerAddress',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminAddress = 'superAdminAddress',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** unique or primary key constraints on table "walletIntegrations" */
export enum WalletIntegrations_Constraint {
  /** unique or primary key constraint on columns "externalId", "integrationId" */
  WalletIntegrationsIntegrationIdExternalIdKey = 'walletIntegrations_integrationId_externalId_key',
  /** unique or primary key constraint on columns "id" */
  WalletIntegrationsPkey = 'walletIntegrations_pkey'
}

/** select columns of table "walletIntegrations" */
export enum WalletIntegrations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationId = 'integrationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "walletIntegrations" */
export enum WalletIntegrations_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationId = 'integrationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** unique or primary key constraints on table "wallets" */
export enum Wallets_Constraint {
  /** unique or primary key constraint on columns "address" */
  WalletsPkey = 'wallets_pkey',
  /** unique or primary key constraint on columns "stripeId" */
  WalletsStripeIdKey = 'wallets_stripeId_key'
}

/** select columns of table "wallets" */
export enum Wallets_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  StripeId = 'stripeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "wallets" */
export enum Wallets_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  StripeId = 'stripeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** unique or primary key constraints on table "webhooks" */
export enum Webhooks_Constraint {
  /** unique or primary key constraint on columns "id" */
  WebhooksPkey = 'webhooks_pkey'
}

/** select columns of table "webhooks" */
export enum Webhooks_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  Valid = 'valid',
  /** column name */
  WalletAddress = 'walletAddress'
}

/** update columns of table "webhooks" */
export enum Webhooks_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Network = 'network',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  Valid = 'valid',
  /** column name */
  WalletAddress = 'walletAddress'
}
