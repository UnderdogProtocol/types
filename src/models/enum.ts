import { z } from "zod";

export enum NetworkEnum {
  Devnet = "DEVNET",
  Localnet = "LOCALNET",
  Mainnet = "MAINNET",
}
export const networkEnumSchema = z.nativeEnum(NetworkEnum);

export enum PlansEnum {
  Developer = "DEVELOPER",
  Enterprise = "ENTERPRISE",
  Free = "FREE",
  Starter = "STARTER",
  Hobby = "HOBBY",
}

export const plansEnumSchema = z.nativeEnum(PlansEnum);

export enum StatusEnum {
  Burned = "burned",
  Confirmed = "confirmed",
  Failed = "failed",
  Pending = "pending",
  Processing = "processing",
}

export const statusEnumSchema = z.nativeEnum(StatusEnum);

export enum TransactionTypesEnum {
  ClaimBadge = "CLAIM_BADGE",
  CollectionAdd = "COLLECTION_ADD",
  CollectionCreate = "COLLECTION_CREATE",
  CollectionCreateDeprecated = "COLLECTION_CREATE_DEPRECATED",
  CompressedProjectCreate = "COMPRESSED_PROJECT_CREATE",
  CompressedProjectNftBatch = "COMPRESSED_PROJECT_NFT_BATCH",
  CompressedProjectNftCreate = "COMPRESSED_PROJECT_NFT_CREATE",
  CompressedProjectSftBatch = "COMPRESSED_PROJECT_SFT_BATCH",
  CompressedProjectSftCreate = "COMPRESSED_PROJECT_SFT_CREATE",
  ConfirmTransaction = "CONFIRM_TRANSACTION",
  Initialize = "INITIALIZE",
  ManagedNftRevoke = "MANAGED_NFT_REVOKE",
  NftCreate = "NFT_CREATE",
  NftCreateV2 = "NFT_CREATE_V2",
  NftUpdate = "NFT_UPDATE",
  OrgCreate = "ORG_CREATE",
  OrgMemberAdd = "ORG_MEMBER_ADD",
  ProjectCreate = "PROJECT_CREATE",
  ProjectNftBurn = "PROJECT_NFT_BURN",
  ProjectNftCreate = "PROJECT_NFT_CREATE",
  ProjectNftRevoke = "PROJECT_NFT_REVOKE",
  ProjectNftUpdate = "PROJECT_NFT_UPDATE",
  ProjectUpdate = "PROJECT_UPDATE",
  NonTransferableProjectCreate = "NON_TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectCreate = "TRANSFERABLE_PROJECT_CREATE",
  TransferableProjectNftCreate = "TRANSFERABLE_PROJECT_NFT_CREATE",
}

export const transactionTypesEnumSchema = z.nativeEnum(TransactionTypesEnum);

export enum IntegrationsEnum {
  Square = "square",
}

export const integrationsEnumSchema = z.nativeEnum(IntegrationsEnum);
